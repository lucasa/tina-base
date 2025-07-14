import { tinaField } from "tinacms/dist/react";
import { Page, PageBlocks } from "../../tina/__generated__/types";
import { Hero } from "./hero";
import { Content } from "./content";
import { Features } from "./features";
import { Testimonial } from "./testimonial";
import { Video } from "./video";
import { Callout } from "./callout";
import { Stats } from "./stats";
import { CallToAction } from "./call-to-action";
import { DynamicWebComponentBlock } from "./dynamic-webcomponent";
import { CollaborativeMapBlock } from "./collaborative-map/CollaborativeMapBlock";
import { EducationalResourcesBlock } from "./educational-resources/EducationalResourcesBlock";
import { EventCalendarBlock } from "./event-calendar/EventCalendarBlock";
import { InteractiveTimelineBlock } from "./interactive-timeline/InteractiveTimelineBlock";
import { QuizPollBlock } from "./quiz-poll/QuizPollBlock";
import { StoryGalleryBlock } from "./story-gallery/StoryGalleryBlock";
import { MicroDonationBlock } from "./micro-donation/MicroDonationBlock";
import { OnlinePetitionBlock } from "./online-petition/OnlinePetitionBlock";
import { Huddle01BroadcastBlock } from "./huddle01-broadcast/Huddle01BroadcastBlock";
import { WhiteboardAffineBlock } from "./whiteboard-affine/WhiteboardAffineBlock";

export const Blocks = (props: Omit<Page, "id" | "_sys" | "_values">) => {
  if (!props.blocks) return null;
  return (
    <>
      {props.blocks.map(function (block, i) {
        return (
          <div key={i} data-tina-field={tinaField(block)}>
            <Block {...block} />
          </div>
        );
      })}
    </>
  );
};

const Block = (block: PageBlocks) => {
  switch (block.__typename) {
    case "PageBlocksVideo":
      return <Video data={block} />;
    case "PageBlocksHero":
      return <Hero data={block} />;
    case "PageBlocksCallout":
      return <Callout data={block} />;
    case "PageBlocksStats":
      return <Stats data={block} />;
    case "PageBlocksContent":
      return <Content data={block} />;
    case "PageBlocksFeatures":
      return <Features data={block} />;
    case "PageBlocksTestimonial":
      return <Testimonial data={block} />;
    case "PageBlocksCta":
      return <CallToAction data={block} />;
    case "PageBlocksDynamic_webcomponent":
      return <DynamicWebComponentBlock {...(block as any)} />;
    case "PageBlocksCollaborative_map":
      return <CollaborativeMapBlock {...(block as any)} />;
    case "PageBlocksEducational_resources":
      return <EducationalResourcesBlock {...(block as any)} />;
    case "PageBlocksEvent_calendar":
      return <EventCalendarBlock {...(block as any)} />;
    case "PageBlocksInteractive_timeline":
      return <InteractiveTimelineBlock {...(block as any)} />;
    case "PageBlocksQuiz_poll":
      return <QuizPollBlock {...(block as any)} />;
    case "PageBlocksStory_gallery":
      return <StoryGalleryBlock {...(block as any)} />;
    case "PageBlocksMicro_donation":
      return <MicroDonationBlock {...(block as any)} />;
    case "PageBlocksOnline_petition":
      return <OnlinePetitionBlock {...(block as any)} />;
    case "PageBlocksHuddle01_broadcast":
      return <Huddle01BroadcastBlock {...(block as any)} />;
    case "PageBlocksWhiteboard_affine":
      return <WhiteboardAffineBlock {...(block as any)} />;
    default:
      return null;
  }
};
