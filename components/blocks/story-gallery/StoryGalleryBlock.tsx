import React from 'react';
import { AdvancedBlockBase, AdvancedBlockBaseProps, BlockView } from '../AdvancedBlockBase';

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
