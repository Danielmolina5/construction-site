import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { ByTheNumbers } from "@/components/sections/by-the-numbers";
import { CategoryStrip } from "@/components/sections/category-strip";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { MeridianOs } from "@/components/sections/meridian-os";
import { WhyUs } from "@/components/sections/why-us";
import { CaseStudies } from "@/components/sections/case-studies";
import { Team } from "@/components/sections/team";
import { VideoGrid } from "@/components/sections/video-grid";
import { Reviews } from "@/components/sections/reviews";
import { FutureProjects } from "@/components/sections/future-projects";
import { Insights } from "@/components/sections/insights";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ByTheNumbers />
      <CategoryStrip />
      <Projects />
      <Services />
      <MeridianOs />
      <WhyUs />
      <CaseStudies />
      <Team />
      <VideoGrid />
      <Reviews />
      <FutureProjects />
      <Insights />
      <About />
      <Contact />
    </>
  );
}
