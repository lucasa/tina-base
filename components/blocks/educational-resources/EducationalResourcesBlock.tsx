import React from 'react';
import { AdvancedBlockBase, AdvancedBlockBaseProps, BlockView } from '../AdvancedBlockBase';

export interface EducationalResourcesBlockProps extends AdvancedBlockBaseProps {
  resources?: any[];
}

export class EducationalResourcesBlock extends AdvancedBlockBase<EducationalResourcesBlockProps, { resources: any[] }> {
  constructor(props: EducationalResourcesBlockProps) {
    super(props);
    this.state = { resources: props.resources || [] };
  }

  renderView(view: BlockView) {
    switch (view) {
      case 'search':
        return <div>Busca de recursos (em construção)</div>;
      default:
        return <div>Recursos Didáticos (em construção)</div>;
    }
  }
}
