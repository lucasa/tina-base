import React from 'react';
import { AdvancedBlockBase, AdvancedBlockBaseProps, BlockView } from '../AdvancedBlockBase';

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
