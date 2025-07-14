import React from 'react';
import type { Template } from 'tinacms';
import { AdvancedBlockBase, AdvancedBlockBaseProps, BlockView } from '../AdvancedBlockBase';
import { sectionBlockSchemaField } from '@/components/layout/section';

export interface WhiteboardAffineBlockProps extends AdvancedBlockBaseProps {
  boardUrl?: string;
}

export class WhiteboardAffineBlock extends AdvancedBlockBase<WhiteboardAffineBlockProps, { boardUrl?: string }> {
  constructor(props: WhiteboardAffineBlockProps) {
    super(props);
    this.state = { boardUrl: props.boardUrl };
  }

  renderView(view: BlockView) {
    switch (view) {
      case 'edit':
        return <div>Editor de Whiteboard (em construção)</div>;
      default:
        return <div>Whiteboard embed: {this.state.boardUrl}</div>;
    }
  }
}

export const whiteboardAffineBlockSchema: Template = {
  name: 'whiteboard_affine',
  label: 'Quadro Branco Affine',
  ui: {
    previewSrc: '/blocks/whiteboard-affine.png',
    defaultItem: {
      view: 'default',
    },
  },
  fields: [
    sectionBlockSchemaField as any,
    {
      type: 'string',
      label: 'Workspace ID',
      name: 'workspaceId',
      description: 'ID do workspace Affine',
    },
    {
      type: 'string',
      label: 'Vista',
      name: 'view',
      options: [
        { label: 'Padrão', value: 'default' },
        { label: 'Somente Leitura', value: 'readonly' },
        { label: 'Editor', value: 'edit' },
      ],
    },
    {
      type: 'boolean',
      label: 'Modo Colaborativo',
      name: 'collaborative',
    },
  ],
};
