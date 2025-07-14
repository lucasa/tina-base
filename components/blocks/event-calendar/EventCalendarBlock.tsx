import React from 'react';
import type { Template } from 'tinacms';
import { AdvancedBlockBase, AdvancedBlockBaseProps, BlockView } from '../AdvancedBlockBase';
import { sectionBlockSchemaField } from '@/components/layout/section';

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

export const eventCalendarBlockSchema: Template = {
  name: 'event_calendar',
  label: 'Calendário de Eventos',
  ui: {
    previewSrc: '/blocks/event-calendar.png',
    defaultItem: {
      view: 'default',
    },
  },
  fields: [
    sectionBlockSchemaField as any,
    {
      type: 'string',
      label: 'URL dos Eventos',
      name: 'eventsUrl',
      description: 'URL JSON que retorna os eventos',
    },
    {
      type: 'string',
      label: 'Vista',
      name: 'view',
      options: [
        { label: 'Padrão', value: 'default' },
        { label: 'Mensal', value: 'month' },
        { label: 'Semanal', value: 'week' },
        { label: 'Lista', value: 'list' },
      ],
    },
  ],
};
