# Registro de Blocos TinaCMS - Projeto Base

## Estrutura Organizada

Os blocos TinaCMS foram organizados de forma modular, onde cada bloco contém:

1. **Componente React** - A implementação visual do bloco
2. **Schema TinaCMS** - A configuração de campos para o editor
3. **Interface TypeScript** - Tipos para garantir type safety

## Padrão de Organização

### Blocos Simples
Localizados em `components/blocks/` como arquivos únicos:
- `hero.tsx` - Bloco de herói com título, subtítulo e imagem
- `content.tsx` - Bloco de conteúdo markdown
- `features.tsx` - Bloco de recursos/funcionalidades
- `testimonial.tsx` - Bloco de depoimentos
- `video.tsx` - Bloco de vídeo
- `callout.tsx` - Bloco de destaque/chamada
- `stats.tsx` - Bloco de estatísticas
- `call-to-action.tsx` - Bloco de chamada para ação

### Blocos Avançados
Localizados em `components/blocks/{nome}/` como pastas estruturadas:

#### `collaborative-map/`
- **Arquivo**: `CollaborativeMapBlock.tsx`
- **Schema**: `collaborativeMapBlockSchema`
- **Funcionalidade**: Mapas colaborativos com marcações e comentários

#### `educational-resources/`
- **Arquivo**: `EducationalResourcesBlock.tsx`
- **Schema**: `educationalResourcesBlockSchema`
- **Funcionalidade**: Recursos educacionais com filtros e busca

#### `event-calendar/`
- **Arquivo**: `EventCalendarBlock.tsx`
- **Schema**: `eventCalendarBlockSchema`
- **Funcionalidade**: Calendário de eventos com múltiplas visualizações

#### `interactive-timeline/`
- **Arquivo**: `InteractiveTimelineBlock.tsx`
- **Schema**: `interactiveTimelineBlockSchema`
- **Funcionalidade**: Linha do tempo interativa com animações

#### `quiz-poll/`
- **Arquivo**: `QuizPollBlock.tsx`
- **Schema**: `quizPollBlockSchema`
- **Funcionalidade**: Quiz e enquetes interativas

#### `story-gallery/`
- **Arquivo**: `StoryGalleryBlock.tsx`
- **Schema**: `storyGalleryBlockSchema`
- **Funcionalidade**: Galeria de histórias com submissão

#### `micro-donation/`
- **Arquivo**: `MicroDonationBlock.tsx`
- **Schema**: `microDonationBlockSchema`
- **Funcionalidade**: Sistema de micro doações

#### `online-petition/`
- **Arquivo**: `OnlinePetitionBlock.tsx`
- **Schema**: `onlinePetitionBlockSchema`
- **Funcionalidade**: Petições online com assinaturas

#### `huddle01-broadcast/`
- **Arquivo**: `Huddle01BroadcastBlock.tsx`
- **Schema**: `huddle01BroadcastBlockSchema`
- **Funcionalidade**: Transmissões via Huddle01

#### `whiteboard-affine/`
- **Arquivo**: `WhiteboardAffineBlock.tsx`
- **Schema**: `whiteboardAffineBlockSchema`
- **Funcionalidade**: Quadro branco colaborativo

## Registro dos Blocos

### 1. Configuração TinaCMS
Os schemas são registrados em:
- **Arquivo**: `tina/collection/page.ts`
- **Array**: `templates` dentro do campo `blocks`

### 2. Sistema de Renderização
Os componentes são registrados em:
- **Arquivo**: `components/blocks/index.tsx`
- **Function**: `Block()` com switch case para cada `__typename`

### 3. Padrão de Nomenclatura
- **Schema name**: `snake_case` (ex: `collaborative_map`)
- **TypeScript type**: `PageBlocks{PascalCase}` (ex: `PageBlocksCollaborative_map`)
- **Componente**: `PascalCase` (ex: `CollaborativeMapBlock`)

## Como Adicionar um Novo Bloco

### Passo 1: Criar o Componente
```typescript
// components/blocks/meu-bloco/MeuBlocoBlock.tsx
import React from 'react';
import type { Template } from 'tinacms';
import { AdvancedBlockBase, AdvancedBlockBaseProps, BlockView } from '../AdvancedBlockBase';
import { sectionBlockSchemaField } from '@/components/layout/section';

export interface MeuBlocoBlockProps extends AdvancedBlockBaseProps {
  // propriedades específicas
}

export class MeuBlocoBlock extends AdvancedBlockBase<MeuBlocoBlockProps, {}> {
  renderView(view: BlockView) {
    return <div>Meu Bloco</div>;
  }
}

export const meuBlocoBlockSchema: Template = {
  name: 'meu_bloco',
  label: 'Meu Bloco',
  fields: [
    sectionBlockSchemaField as any,
    // outros campos
  ],
};
```

### Passo 2: Registrar no TinaCMS
```typescript
// tina/collection/page.ts
import { meuBlocoBlockSchema } from '@/components/blocks/meu-bloco/MeuBlocoBlock';

// Adicionar no array templates:
templates: [
  // ...existing schemas...
  meuBlocoBlockSchema,
],
```

### Passo 3: Registrar no Renderizador
```typescript
// components/blocks/index.tsx
import { MeuBlocoBlock } from "./meu-bloco/MeuBlocoBlock";

// Adicionar no switch case:
case "PageBlocksMeu_bloco":
  return <MeuBlocoBlock {...(block as any)} />;
```

### Passo 4: Regenerar Tipos
```bash
pnpm tina:build
```

## Base Class: AdvancedBlockBase

Todos os blocos avançados herdam de `AdvancedBlockBase` que fornece:

- **Estado Local e Remoto**: Gerenciamento de estado interno e carregamento de dados externos
- **Múltiplas Visualizações**: Sistema de `view` para diferentes layouts
- **Mixins**: Sistema de extensibilidade via mixins
- **API Integration**: Carregamento automático de dados de URLs JSON
- **Type Safety**: Interfaces TypeScript robustas

## Recursos Comuns

### Campos Padrão
- `sectionBlockSchemaField` - Background configurável
- `view` - Seletor de visualização
- `apiUrl`/`dataUrl` - URL de dados externos

### Visualizações Típicas
- `default` - Visualização padrão
- `compact` - Visualização compacta
- `list` - Visualização em lista
- `grid` - Visualização em grade
- `edit` - Modo de edição
- `readonly` - Somente leitura

### Integração com APIs
Todos os blocos podem carregar dados de APIs externas através do padrão:
```typescript
// URL de configuração no schema
{
  type: 'string',
  label: 'URL dos Dados',
  name: 'dataUrl',
  description: 'URL JSON que retorna os dados',
}
```

## Estrutura de Desenvolvimento

O projeto segue o padrão estabelecido nas instruções do agente:
- **Documentação**: Cada bloco possui um `PROJETO.md` com especificações
- **Reusabilidade**: Componentes modulares e extensíveis
- **Type Safety**: Interfaces TypeScript rigorosas
- **Best Practices**: Padrões consistentes de desenvolvimento
- **Chain of Thought**: Documentação prévia antes da implementação
