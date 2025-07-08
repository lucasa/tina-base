import React from 'react';
import { AdvancedBlockBase, AdvancedBlockBaseProps, BlockView } from '../AdvancedBlockBase';

export interface EventCalendarBlockProps extends AdvancedBlockBaseProps {
  events?: any[];
}

export class EventCalendarBlock extends AdvancedBlockBase<EventCalendarBlockProps, { events: any[] }> {
  constructor(props: EventCalendarBlockProps) {
    super(props);
    this.state = { events: props.events || [] };
  }

  renderView(view: BlockView) {
    switch (view) {
      case 'list':
        return <div>Lista de eventos (em construção)</div>;
      default:
        return <div>Calendário de Eventos (em construção)</div>;
    }
  }
}
