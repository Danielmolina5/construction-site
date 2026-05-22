import type { Metadata } from "next";
import { Projects } from "@/components/sections/projects";
import { FutureProjects } from "@/components/sections/future-projects";
import { Reviews } from "@/components/sections/reviews";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Completed, in-flight, and future projects across commercial, healthcare, industrial, residential, and education sectors.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-32">
      <Projects />
      <FutureProjects />
      <Reviews />
    </div>
  );
}
