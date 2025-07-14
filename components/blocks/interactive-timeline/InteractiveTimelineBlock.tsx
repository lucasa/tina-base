import React from 'react';
import type { Template } from 'tinacms';
import { AdvancedBlockBase, AdvancedBlockBaseProps, BlockView } from '../AdvancedBlockBase';
import { sectionBlockSchemaField } from '@/components/layout/section';

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

export const interactiveTimelineBlockSchema: Template = {
  name: 'interactive_timeline',
  label: 'Linha do Tempo Interativa',
  ui: {
    previewSrc: '/blocks/interactive-timeline.png',
    defaultItem: {
      view: 'default',
    },
  },
  fields: [
    sectionBlockSchemaField as any,
    {
      type: 'string',
      label: 'URL da Timeline',
      name: 'timelineUrl',
      description: 'URL JSON que retorna os dados da linha do tempo',
    },
    {
      type: 'string',
      label: 'Vista',
      name: 'view',
      options: [
        { label: 'Padrão', value: 'default' },
        { label: 'Horizontal', value: 'horizontal' },
        { label: 'Vertical', value: 'vertical' },
        { label: 'Editor', value: 'edit' },
        { label: 'Filtro', value: 'filter' },
      ],
    },
    {
      type: 'boolean',
      label: 'Animações',
      name: 'animations',
    },
  ],
};
