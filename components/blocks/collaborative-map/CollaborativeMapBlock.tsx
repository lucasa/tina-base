import React from 'react';
import { AdvancedBlockBase, AdvancedBlockBaseProps, BlockView } from '../AdvancedBlockBase';

export interface CollaborativeMapBlockProps extends AdvancedBlockBaseProps {
  mapDataUrl?: string;
}

export class CollaborativeMapBlock extends AdvancedBlockBase<CollaborativeMapBlockProps, { mapDataUrl?: string }> {
  constructor(props: CollaborativeMapBlockProps) {
    super(props);
    this.state = { mapDataUrl: props.mapDataUrl };
  }

  renderView(view: BlockView) {
    switch (view) {
      case 'list':
        return <div>Lista de pontos do mapa (em construção)</div>;
      default:
        return <div>Mapa colaborativo: {this.state.mapDataUrl}</div>;
    }
  }
}
