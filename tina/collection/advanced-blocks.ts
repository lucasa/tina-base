import type { Template } from 'tinacms';
import { sectionBlockSchemaField } from '@/components/layout/section';

// Collaborative Map Block Schema
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

// Educational Resources Block Schema
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

// Event Calendar Block Schema
export const eventCalendarBlockSchema: Template = {
  name: 'event_calendar',
  label: 'Calendário de Eventos',
  ui: {
    previewSrc: '/blocks/event-calendar.png',
    defaultItem: {
      view: 'default',
    },
  },
  fields: [
    sectionBlockSchemaField as any,
    {
      type: 'string',
      label: 'URL dos Eventos',
      name: 'eventsUrl',
      description: 'URL JSON que retorna os eventos',
    },
    {
      type: 'string',
      label: 'Vista',
      name: 'view',
      options: [
        { label: 'Padrão', value: 'default' },
        { label: 'Mensal', value: 'month' },
        { label: 'Semanal', value: 'week' },
        { label: 'Lista', value: 'list' },
      ],
    },
  ],
};

// Interactive Timeline Block Schema
export const interactiveTimelineBlockSchema: Template = {
  name: 'interactive_timeline',
  label: 'Linha do Tempo Interativa',
  ui: {
    previewSrc: '/blocks/interactive-timeline.png',
    defaultItem: {
      view: 'default',
    },
  },
  fields: [
    sectionBlockSchemaField as any,
    {
      type: 'string',
      label: 'URL da Timeline',
      name: 'timelineUrl',
      description: 'URL JSON que retorna os dados da linha do tempo',
    },
    {
      type: 'string',
      label: 'Vista',
      name: 'view',
      options: [
        { label: 'Padrão', value: 'default' },
        { label: 'Horizontal', value: 'horizontal' },
        { label: 'Vertical', value: 'vertical' },
      ],
    },
    {
      type: 'boolean',
      label: 'Animações',
      name: 'animations',
    },
  ],
};

// Quiz Poll Block Schema
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
      ],
    },
    {
      type: 'boolean',
      label: 'Mostrar Resultados',
      name: 'showResults',
    },
  ],
};

// Story Gallery Block Schema
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
      ],
    },
  ],
};

// Micro Donation Block Schema
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

// Online Petition Block Schema
export const onlinePetitionBlockSchema: Template = {
  name: 'online_petition',
  label: 'Petição Online',
  ui: {
    previewSrc: '/blocks/online-petition.png',
    defaultItem: {
      view: 'default',
    },
  },
  fields: [
    sectionBlockSchemaField as any,
    {
      type: 'string',
      label: 'URL da Petição',
      name: 'petitionUrl',
      description: 'URL JSON que retorna os dados da petição',
    },
    {
      type: 'string',
      label: 'Vista',
      name: 'view',
      options: [
        { label: 'Padrão', value: 'default' },
        { label: 'Compacta', value: 'compact' },
      ],
    },
    {
      type: 'boolean',
      label: 'Mostrar Contador',
      name: 'showCounter',
    },
  ],
};

// Huddle01 Broadcast Block Schema
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
        { label: 'Compacta', value: 'compact' },
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

// Whiteboard Affine Block Schema
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
      ],
    },
    {
      type: 'boolean',
      label: 'Modo Colaborativo',
      name: 'collaborative',
    },
  ],
};
