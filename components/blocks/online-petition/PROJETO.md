# Bloco de Petição Online (Container)

## Descrição Formal
Componente React container para petições online, permitindo a composição, reordenação e configuração visual de sub-blocos (hero, carrossel, descrição, dashboard, assinatura, compartilhamento etc) via TinaCMS. Integração total com API externa para leitura e escrita de dados (assinaturas, progresso, contagem dos votos e estatísticas), atualização dinâmica dos gráficos e suporte a mixins/extensões.

## Arquitetura e Cadeia de Pensamento
- O bloco principal é um **container**: não renderiza conteúdo fixo, mas sim uma lista de sub-blocos configuráveis.
- Cada sub-bloco (hero, carrossel, dashboard, assinatura, compartilhamento, etc) é um bloco independente, podendo ser rearranjado, removido ou customizado via TinaCMS.
- O container é responsável por:
  - Carregar o estado global da petição (GET na API)
  - Repassar o estado para os sub-blocos como prop
  - Expor métodos para atualização do estado (ex: após assinatura)
  - Permitir mixins/extensões (ex: analytics, hooks, custom code)
- O sub-bloco de assinatura executa POST na API e, ao sucesso, dispara atualização do estado global, refletindo imediatamente nos gráficos/dashboards.
- O dashboard/gráfico lê o estado global e se atualiza automaticamente.
- O editor pode adicionar/remover/reordenar sub-blocos conforme a necessidade da campanha.
- Toda configuração visual e de fluxo é feita via TinaCMS, sem necessidade de código.

## Características
- Herda de `AdvancedBlockBase`
- Estado global dos votos e estatísticas da petição carregado de API externa (GET)
- Escrita de assinaturas na API (POST)
- Atualização dinâmica dos sub-blocos após assinatura
- Sub-blocos rearranjáveis/configuráveis via TinaCMS
- Suporte a múltiplas visões (ex: desktop, mobile)
- Mixins plugáveis para extensões
- Configuração visual e de fluxo via TinaCMS
- Suporte a custom code seguro

## Sub-blocos recomendados e responsabilidades
- **PetitionHeroBlock**: Exibe imagem e título da petição. Recebe dados do container.
- **PetitionCarouselBlock**: Mostra depoimentos ou apoiadores. Pode receber lista do container ou de fonte própria.
- **PetitionDescriptionBlock**: Exibe texto descritivo da petição.
- **PetitionDashboardBlock**: Mostra gráfico de progresso (assinaturas, meta, percentual). Atualiza automaticamente ao mudar o estado global.
- **PetitionSignFormBlock**: Formulário de assinatura. Ao submeter, faz POST na API e aciona atualização do estado global no container.
- **PetitionShareBlock**: Botões de compartilhamento em redes sociais, usando dados do container.
- (Outros: FAQ, vídeo, comentários, etc, podem ser adicionados como blocos reutilizáveis)

## Integrações e Fluxo de Dados
- O container carrega o estado da petição da API (GET) e repassa para os sub-blocos.
- O sub-bloco de assinatura executa POST na API e, ao sucesso, aciona recarregamento do estado global.
- O dashboard e outros sub-blocos refletem o novo estado imediatamente.
- O container pode expor eventos no barramento global (window) para integração com outros blocos ou sistemas.
- Mixins podem ser usados para adicionar funcionalidades (ex: analytics, hooks de eventos, customizações visuais).

## Exemplo de uso no schema TinaCMS
```ts
{
  type: 'object',
  name: 'childrenBlocks',
  label: 'Blocos da Petição',
  list: true,
  templates: [
    petitionHeroBlockSchema,
    petitionCarouselBlockSchema,
    petitionDescriptionBlockSchema,
    petitionDashboardBlockSchema,
    petitionSignFormBlockSchema,
    petitionShareBlockSchema,
    // ...outros blocos reutilizáveis...
  ]
}
```

## Fluxo de dados resumido
1. Container faz GET na API e armazena estado global.
2. Sub-blocos recebem estado como prop.
3. Formulário de assinatura faz POST na API.
4. Ao sucesso, container faz novo GET e atualiza todos os sub-blocos.
5. Editor pode rearranjar/remover/adicionar sub-blocos conforme a estratégia da campanha.

## Considerações para implementação
- Tipagem forte para props e estado compartilhado.
- Sub-blocos devem ser desacoplados e receber apenas o necessário via props.
- O container pode expor métodos para atualização do estado global e eventos customizados.
- Toda lógica de integração com API fica centralizada no container.
- Documentação clara para editores e desenvolvedores.
