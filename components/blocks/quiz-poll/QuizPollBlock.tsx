import React from 'react';
import type { Template } from 'tinacms';
import { AdvancedBlockBase, AdvancedBlockBaseProps, BlockView } from '../AdvancedBlockBase';
import { sectionBlockSchemaField } from '@/components/layout/section';

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

export const quizPollBlockSchema: Template = {
  name: 'quiz_poll',
  label: 'Quiz/Enquete',
  ui: {
    previewSrc: '/blocks/quiz-poll.png',
    defaultItem: {
      view: 'default',
    },
  },
  fields: [
    sectionBlockSchemaField as any,
    {
      type: 'string',
      label: 'URL do Quiz',
      name: 'quizUrl',
      description: 'URL JSON que retorna as perguntas do quiz',
    },
    {
      type: 'string',
      label: 'Vista',
      name: 'view',
      options: [
        { label: 'Padrão', value: 'default' },
        { label: 'Compacta', value: 'compact' },
        { label: 'Resultados', value: 'results' },
      ],
    },
    {
      type: 'boolean',
      label: 'Mostrar Resultados',
      name: 'showResults',
    },
  ],
};
