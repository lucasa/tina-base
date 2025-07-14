import type { Collection } from 'tinacms';
import { heroBlockSchema } from '@/components/blocks/hero';
import { contentBlockSchema } from '@/components/blocks/content';
import { testimonialBlockSchema } from '@/components/blocks/testimonial';
import { featureBlockSchema } from '@/components/blocks/features';
import { videoBlockSchema } from '@/components/blocks/video';
import { calloutBlockSchema } from '@/components/blocks/callout';
import { statsBlockSchema } from '@/components/blocks/stats';
import { ctaBlockSchema } from '@/components/blocks/call-to-action';
import { dynamicWebComponentBlockSchema } from './dynamic-webcomponent';
import { collaborativeMapBlockSchema } from '@/components/blocks/collaborative-map/CollaborativeMapBlock';
import { educationalResourcesBlockSchema } from '@/components/blocks/educational-resources/EducationalResourcesBlock';
import { eventCalendarBlockSchema } from '@/components/blocks/event-calendar/EventCalendarBlock';
import { interactiveTimelineBlockSchema } from '@/components/blocks/interactive-timeline/InteractiveTimelineBlock';
import { quizPollBlockSchema } from '@/components/blocks/quiz-poll/QuizPollBlock';
import { storyGalleryBlockSchema } from '@/components/blocks/story-gallery/StoryGalleryBlock';
import { microDonationBlockSchema } from '@/components/blocks/micro-donation/MicroDonationBlock';
import { onlinePetitionBlockSchema } from '@/components/blocks/online-petition/OnlinePetitionBlock';
import { huddle01BroadcastBlockSchema } from '@/components/blocks/huddle01-broadcast/Huddle01BroadcastBlock';
import { whiteboardAffineBlockSchema } from '@/components/blocks/whiteboard-affine/WhiteboardAffineBlock';

const Page: Collection = {
  label: 'Pages',
  name: 'page',
  path: 'content/pages',
  format: 'mdx',
  ui: {
    router: ({ document }) => {
      const filepath = document._sys.breadcrumbs.join('/');
      if (filepath === 'home') {
        return '/';
      }
      return `/${filepath}`;
    },
  },
  fields: [
    {
      type: 'object',
      list: true,
      name: 'blocks',
      label: 'Sections',
      ui: {
        visualSelector: true,
      },
      templates: [
        heroBlockSchema,
        calloutBlockSchema,
        featureBlockSchema,
        statsBlockSchema,
        ctaBlockSchema,
        contentBlockSchema,
        testimonialBlockSchema,
        videoBlockSchema,
        dynamicWebComponentBlockSchema,
        collaborativeMapBlockSchema,
        educationalResourcesBlockSchema,
        eventCalendarBlockSchema,
        interactiveTimelineBlockSchema,
        quizPollBlockSchema,
        storyGalleryBlockSchema,
        microDonationBlockSchema,
        onlinePetitionBlockSchema,
        huddle01BroadcastBlockSchema,
        whiteboardAffineBlockSchema,
      ],
    },
  ],
};

export default Page;
