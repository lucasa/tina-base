#!/bin/bash

# Configura as opções do Node para aumentar a memória disponível
export NODE_OPTIONS="--max-old-space-size=4096"

# Limpa os caches
rm -rf node_modules/.cache
rm -rf .next/cache

# Define variáveis de ambiente para otimização
export NODE_ENV=development
export WEBPACK_CACHE=false

# Executa o build do storybook
pnpm build-storybook
