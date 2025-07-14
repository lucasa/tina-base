import React from 'react';
import type { Template } from 'tinacms';
import { AdvancedBlockBase, AdvancedBlockBaseProps, BlockView } from '../AdvancedBlockBase';
import { sectionBlockSchemaField } from '@/components/layout/section';

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

export const huddle01BroadcastBlockSchema: Template = {
  name: 'huddle01_broadcast',
  label: 'Huddle01 Broadcast',
  ui: {
    previewSrc: '/blocks/huddle01-broadcast.png',
    defaultItem: {
      view: 'default',
    },
  },
  fields: [
    sectionBlockSchemaField as any,
    {
      type: 'string',
      label: 'Room ID',
      name: 'roomId',
      description: 'ID da sala Huddle01',
    },
    {
      type: 'string',
      label: 'Vista',
      name: 'view',
      options: [
        { label: 'Padrão', value: 'default' },
        { label: 'Host', value: 'host' },
        { label: 'Participante', value: 'participant' },
      ],
    },
    {
      type: 'object',
      label: 'Configurações',
      name: 'config',
      fields: [
        {
          type: 'boolean',
          label: 'Auto Join',
          name: 'autoJoin',
        },
        {
          type: 'boolean',
          label: 'Mostrar Chat',
          name: 'showChat',
        },
      ],
    },
  ],
};
