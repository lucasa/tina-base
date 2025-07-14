import React from 'react';
import type { Template } from 'tinacms';
import { AdvancedBlockBase, AdvancedBlockBaseProps, BlockView } from '../AdvancedBlockBase';
import { sectionBlockSchemaField } from '@/components/layout/section';

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

export const collaborativeMapBlockSchema: Template = {
  name: 'collaborative_map',
  label: 'Mapa Colaborativo',
  ui: {
    previewSrc: '/blocks/collaborative-map.png',
    defaultItem: {
      mapDataUrl: '',
      view: 'default',
    },
  },
  fields: [
    sectionBlockSchemaField as any,
    {
      type: 'string',
      label: 'URL dos Dados do Mapa',
      name: 'mapDataUrl',
      description: 'URL JSON que retorna os dados do mapa',
    },
    {
      type: 'string',
      label: 'Vista',
      name: 'view',
      options: [
        { label: 'Padrão', value: 'default' },
        { label: 'Lista', value: 'list' },
      ],
    },
    {
      type: 'object',
      label: 'Configurações',
      name: 'config',
      fields: [
        {
          type: 'boolean',
          label: 'Permitir Comentários',
          name: 'allowComments',
        },
        {
          type: 'boolean',
          label: 'Mostrar Filtros',
          name: 'showFilters',
        },
      ],
    },
  ],
};
