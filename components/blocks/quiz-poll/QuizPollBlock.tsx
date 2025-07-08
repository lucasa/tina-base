import React from 'react';
import { AdvancedBlockBase, AdvancedBlockBaseProps, BlockView } from '../AdvancedBlockBase';

export interface QuizPollBlockProps extends AdvancedBlockBaseProps {
  questions?: any[];
}

export class QuizPollBlock extends AdvancedBlockBase<QuizPollBlockProps, { questions: any[] }> {
  constructor(props: QuizPollBlockProps) {
    super(props);
    this.state = { questions: props.questions || [] };
  }

  renderView(view: BlockView) {
    switch (view) {
      case 'results':
        return <div>Resultados do Quiz/Enquete (em construção)</div>;
      default:
        return <div>Quiz/Enquete (em construção)</div>;
    }
  }
}
