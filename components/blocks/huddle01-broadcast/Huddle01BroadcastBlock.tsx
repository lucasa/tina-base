import React from 'react';
import { AdvancedBlockBase, AdvancedBlockBaseProps, BlockView } from '../AdvancedBlockBase';

export interface Huddle01BroadcastBlockProps extends AdvancedBlockBaseProps {
  roomId?: string;
}

export class Huddle01BroadcastBlock extends AdvancedBlockBase<Huddle01BroadcastBlockProps, { roomId?: string }> {
  constructor(props: Huddle01BroadcastBlockProps) {
    super(props);
    this.state = { roomId: props.roomId };
  }

  renderView(view: BlockView) {
    switch (view) {
      case 'host':
        return <div>Visão do Host (em construção)</div>;
      case 'participant':
        return <div>Visão do Participante (em construção)</div>;
      default:
        return <div>Sala Huddle01: {this.state.roomId}</div>;
    }
  }
}
