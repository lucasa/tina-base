import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';

type DynamicWebComponentBlockProps = {
  tagName: string;
  cdnUrls: string[];
  initialState?: Record<string, any>;
  apiEndpoint?: string;
  customJsCode?: string;
  style?: React.CSSProperties;
  className?: string;
};

export const DynamicWebComponentBlock: React.FC<DynamicWebComponentBlockProps> = ({
  tagName,
  cdnUrls,
  initialState = {},
  apiEndpoint,
  customJsCode,
  style,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState(initialState);

  // Carrega scripts de CDN
  useEffect(() => {
    cdnUrls.forEach((url) => {
      if (!document.querySelector(`script[src="${url}"]`)) {
        const script = document.createElement('script');
        script.src = url;
        script.async = true;
        document.body.appendChild(script);
      }
    });
  }, [cdnUrls]);

  // Envia estado para API sempre que mudar
  useEffect(() => {
    if (apiEndpoint) {
      fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state),
      });
    }
  }, [apiEndpoint, state]);

  // Publica estado no barramento global (window)
  useEffect(() => {
    const event = new CustomEvent('dynamic-block-state', {
      detail: { tagName, state },
    });
    window.dispatchEvent(event);
    (window as any)[`dynamicBlockState_${tagName}`] = state;
  }, [tagName, state]);

  // Permite que custom code acesse e modifique o estado
  const setStateSandboxed = useCallback((patch: any) => {
    setState((prev) => ({ ...prev, ...patch }));
  }, []);

  // Executa custom code para adaptar o estado para o webcomponent
  const adaptedProps = useMemo(() => {
    if (!customJsCode) return state;
    try {
      const sandboxAPI = {
        setState: setStateSandboxed,
        getState: () => state,
        emit: (event: string, detail: any) =>
          window.dispatchEvent(new CustomEvent(event, { detail })),
      };
      // eslint-disable-next-line no-new-func
      const fn = new Function('api', customJsCode);
      const result = fn(sandboxAPI);
      return typeof result === 'object' && result !== null ? result : state;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('Erro no customJsCode:', e);
      return state;
    }
  }, [customJsCode, state, setStateSandboxed]);

  // Permite que outros blocos assinem atualizações deste bloco
  useEffect(() => {
    const handler = (e: CustomEvent) => {
      if (e.detail?.tagName !== tagName && e.detail?.state) {
        // Exemplo: sincronizar parte do estado de outro bloco
        // setState((prev) => ({ ...prev, ...e.detail.state }));
      }
    };
    window.addEventListener('dynamic-block-state', handler as EventListener);
    return () => window.removeEventListener('dynamic-block-state', handler as EventListener);
  }, [tagName]);

  // Renderiza o webcomponent, passando as props adaptadas
  return (
    <div ref={ref} style={style} className={className}>
      {React.createElement(tagName, {
        ...adaptedProps,
        ref: (el: any) => {
          if (el && typeof el.setState === 'function') {
            el.setState(adaptedProps);
          }
        },
      })}
    </div>
  );
};

export default DynamicWebComponentBlock;
