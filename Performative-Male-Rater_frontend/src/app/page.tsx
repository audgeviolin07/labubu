import { AnimatedIndicatorNavbar } from "@/components/navbars/animated-indicator-navbar";
import LiveDetectionHero from "@/components/detection/live-detection-hero";
import { NumberedBadgeCards } from "@/components/feature/numbered-badge-cards";
import { SimpleRoundedFaqs } from "@/components/faqs/simple-rounded-faqs";
import { MinimalCenteredFooter } from "@/components/footers/minimal-centered-footer";

export default function Page() {
  return (
    <>
      <AnimatedIndicatorNavbar />
      <LiveDetectionHero />
      <NumberedBadgeCards />
      <SimpleRoundedFaqs />
      <MinimalCenteredFooter />
    </>
  );
}