import React from 'react';

export type BlockView = 'default' | string;
export type BlockMixin = (block: AdvancedBlockBase<any, any>) => void;

export interface AdvancedBlockBaseProps {
  dataUrl?: string;
  initialState?: Record<string, any>;
  view?: BlockView;
  mixins?: BlockMixin[];
  onStateChange?: (state: any) => void;
}

export abstract class AdvancedBlockBase<P extends AdvancedBlockBaseProps = AdvancedBlockBaseProps, S = any> extends React.Component<P, S> {
  constructor(props: P) {
    super(props);
    this.state = props.initialState || {};
    this.applyMixins();
  }

  async loadData() {
    if (this.props.dataUrl) {
      const res = await fetch(this.props.dataUrl);
      const data = await res.json();
      this.setState(data);
    }
  }

  async saveData() {
    if (this.props.dataUrl) {
      await fetch(this.props.dataUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.state),
      });
    }
  }

  emit(event: string, detail: any) {
    window.dispatchEvent(new CustomEvent(event, { detail }));
  }

  applyMixins() {
    if (this.props.mixins) {
      this.props.mixins.forEach((mixin) => mixin(this));
    }
  }

  abstract renderView(view: BlockView): React.ReactNode;

  render() {
    return this.renderView(this.props.view || 'default');
  }
}
