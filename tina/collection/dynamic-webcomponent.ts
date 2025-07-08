import { Template } from 'tinacms';

export const dynamicWebComponentBlockSchema: Template = {
  name: 'dynamic-webcomponent',
  label: 'Dynamic WebComponent',
  ui: {
    previewSrc: '/blocks/dynamic-webcomponent.png',
    defaultItem: {
      tagName: 'my-widget',
      cdnUrls: [],
      initialState: {},
      customJsCode: '// return { ...api.getState() }',
    },
  },
  fields: [
    {
      type: 'string',
      label: 'Tag Name',
      name: 'tagName',
      required: true,
    },
    {
      type: 'string',
      label: 'CDN URLs (separados por vírgula)',
      name: 'cdnUrls',
      list: true,
    },
    {
      type: 'object',
      label: 'Estado Inicial',
      name: 'initialState',
      fields: [],
      ui: { component: 'group' },
    },
    {
      type: 'string',
      label: 'Endpoint da API (opcional)',
      name: 'apiEndpoint',
    },
    {
      type: 'string',
      label: 'Custom JS Code',
      name: 'customJsCode',
      ui: {
        component: 'textarea',
        description: 'Função JS que recebe api e retorna props para o webcomponent.',
      },
    },
    {
      type: 'string',
      label: 'Classe CSS',
      name: 'className',
    },
  ],
};
