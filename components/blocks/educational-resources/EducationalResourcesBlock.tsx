import React from 'react';
import type { Template } from 'tinacms';
import { AdvancedBlockBase, AdvancedBlockBaseProps, BlockView } from '../AdvancedBlockBase';
import { sectionBlockSchemaField } from '@/components/layout/section';

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

export const educationalResourcesBlockSchema: Template = {
  name: 'educational_resources',
  label: 'Recursos Educacionais',
  ui: {
    previewSrc: '/blocks/educational-resources.png',
    defaultItem: {
      view: 'default',
    },
  },
  fields: [
    sectionBlockSchemaField as any,
    {
      type: 'string',
      label: 'URL dos Recursos',
      name: 'resourcesUrl',
      description: 'URL JSON que retorna os recursos educacionais',
    },
    {
      type: 'string',
      label: 'Vista',
      name: 'view',
      options: [
        { label: 'Padrão', value: 'default' },
        { label: 'Grade', value: 'grid' },
        { label: 'Lista', value: 'list' },
        { label: 'Busca', value: 'search' },
      ],
    },
    {
      type: 'object',
      label: 'Filtros',
      name: 'filters',
      fields: [
        {
          type: 'string',
          label: 'Categoria',
          name: 'category',
        },
        {
          type: 'string',
          label: 'Nível',
          name: 'level',
        },
      ],
    },
  ],
};
