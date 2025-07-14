import React from 'react';
import type { Template } from 'tinacms';
import { AdvancedBlockBase, AdvancedBlockBaseProps, BlockView } from '../AdvancedBlockBase';
import { sectionBlockSchemaField } from '@/components/layout/section';

export interface StoryGalleryBlockProps extends AdvancedBlockBaseProps {
  stories?: any[];
}

export class StoryGalleryBlock extends AdvancedBlockBase<StoryGalleryBlockProps, { stories: any[] }> {
  constructor(props: StoryGalleryBlockProps) {
    super(props);
    this.state = { stories: props.stories || [] };
  }

  renderView(view: BlockView) {
    switch (view) {
      case 'submit':
        return <div>Envio de história (em construção)</div>;
      default:
        return <div>Galeria de Histórias (em construção)</div>;
    }
  }
}

export const storyGalleryBlockSchema: Template = {
  name: 'story_gallery',
  label: 'Galeria de Histórias',
  ui: {
    previewSrc: '/blocks/story-gallery.png',
    defaultItem: {
      view: 'default',
    },
  },
  fields: [
    sectionBlockSchemaField as any,
    {
      type: 'string',
      label: 'URL das Histórias',
      name: 'storiesUrl',
      description: 'URL JSON que retorna as histórias',
    },
    {
      type: 'string',
      label: 'Vista',
      name: 'view',
      options: [
        { label: 'Padrão', value: 'default' },
        { label: 'Carrossel', value: 'carousel' },
        { label: 'Grade', value: 'grid' },
        { label: 'Envio', value: 'submit' },
      ],
    },
  ],
};
