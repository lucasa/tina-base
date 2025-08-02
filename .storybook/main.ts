import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../components/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/nextjs',
    options: {
      builder: {
        useSWC: true, // Usa SWC ao invés de Babel para melhor performance
      }
    },
  },
  docs: {
    autodocs: 'tag',
  },
  core: {
    disableTelemetry: true,
    enableCrashReports: false,
  },
  typescript: {
    reactDocgen: 'react-docgen', // Mais leve que o padrão
    check: false, // Desabilita type checking durante o build
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../'),
      };
    }

    // Otimizações de performance
    if (config.optimization) {
      config.optimization.minimize = false;
      config.optimization.minimizer = [];
    }

    // Configura o mode como development para build mais rápido
    config.mode = 'development';
    
    return config;
  },
  staticDirs: ['../public'],
  features: {
    storyStoreV7: false // Desativa o novo store para reduzir uso de memória
  },
};

export default config;
