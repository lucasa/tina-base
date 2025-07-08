import React from 'react';
import { AdvancedBlockBase, AdvancedBlockBaseProps, BlockView } from '../AdvancedBlockBase';

export interface WhiteboardAffineBlockProps extends AdvancedBlockBaseProps {
  boardUrl?: string;
}

export class WhiteboardAffineBlock extends AdvancedBlockBase<WhiteboardAffineBlockProps, { boardUrl?: string }> {
  constructor(props: WhiteboardAffineBlockProps) {
    super(props);
    this.state = { boardUrl: props.boardUrl };
  }

  renderView(view: BlockView) {
    switch (view) {
      case 'edit':
        return <div>Editor de Whiteboard (em construção)</div>;
      default:
        return <div>Whiteboard embed: {this.state.boardUrl}</div>;
    }
  }
}
