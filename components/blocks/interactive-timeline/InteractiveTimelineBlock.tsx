import React from 'react';
import { AdvancedBlockBase, AdvancedBlockBaseProps, BlockView } from '../AdvancedBlockBase';

export interface TimelineEvent {
  id: string;
  title: string;
  date: string;
  description?: string;
}

export interface InteractiveTimelineBlockProps extends AdvancedBlockBaseProps {
  events?: TimelineEvent[];
}

export class InteractiveTimelineBlock extends AdvancedBlockBase<InteractiveTimelineBlockProps, { events: TimelineEvent[] }> {
  constructor(props: InteractiveTimelineBlockProps) {
    super(props);
    this.state = { events: props.events || [] };
  }

  renderView(view: BlockView) {
    switch (view) {
      case 'edit':
        return <div>Editor de Linha do Tempo (em construção)</div>;
      case 'filter':
        return <div>Filtro de eventos (em construção)</div>;
      default:
        return (
          <div>
            <h3>Linha do Tempo</h3>
            <ul>
              {this.state.events.map((ev) => (
                <li key={ev.id}>
                  <strong>{ev.title}</strong> - {ev.date}
                  <div>{ev.description}</div>
                </li>
              ))}
            </ul>
          </div>
        );
    }
  }
}
