import React from 'react';
import type { Template } from 'tinacms';
import { AdvancedBlockBase, AdvancedBlockBaseProps, BlockView } from '../AdvancedBlockBase';
import { sectionBlockSchemaField } from '@/components/layout/section';

export interface MicroDonationBlockProps extends AdvancedBlockBaseProps {
  poolId?: string;
}

export class MicroDonationBlock extends AdvancedBlockBase<MicroDonationBlockProps, { poolId?: string }> {
  constructor(props: MicroDonationBlockProps) {
    super(props);
    this.state = { poolId: props.poolId };
  }

  renderView(view: BlockView) {
    switch (view) {
      case 'progress':
        return <div>Progresso da doação (em construção)</div>;
      default:
        return <div>Micro Doação/Financiamento: {this.state.poolId}</div>;
    }
  }
}

export const microDonationBlockSchema: Template = {
  name: 'micro_donation',
  label: 'Micro Doação',
  ui: {
    previewSrc: '/blocks/micro-donation.png',
    defaultItem: {
      view: 'default',
    },
  },
  fields: [
    sectionBlockSchemaField as any,
    {
      type: 'string',
      label: 'URL de Configuração',
      name: 'configUrl',
      description: 'URL JSON que retorna a configuração de doação',
    },
    {
      type: 'string',
      label: 'Vista',
      name: 'view',
      options: [
        { label: 'Padrão', value: 'default' },
        { label: 'Compacta', value: 'compact' },
        { label: 'Progresso', value: 'progress' },
      ],
    },
    {
      type: 'object',
      label: 'Valores Sugeridos',
      name: 'suggestedAmounts',
      list: true,
      fields: [
        {
          type: 'number',
          label: 'Valor',
          name: 'amount',
        },
        {
          type: 'string',
          label: 'Descrição',
          name: 'description',
        },
      ],
    },
  ],
};
