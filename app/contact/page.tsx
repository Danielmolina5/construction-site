import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your project. A senior partner will respond within one business day — and they'll be the same person who runs it.",
};

export default function ContactPage() {
  return (
    <div className="pt-32">
      <Contact />
    </div>
  );
}
