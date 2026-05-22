import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { Team } from "@/components/sections/team";
import { WhyUs } from "@/components/sections/why-us";
import { TrustBar } from "@/components/sections/trust-bar";

export const metadata: Metadata = {
  title: "About",
  description:
    "GAT Construction Management is built around a single principle — a senior partner accountable for every project, every day.",
};

export default function AboutPage() {
  return (
    <div className="pt-32">
      <About />
      <TrustBar />
      <Team />
      <WhyUs />
    </div>
  );
}
