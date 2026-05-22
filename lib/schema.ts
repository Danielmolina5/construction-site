import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Please enter your full name")
    .max(80, "Name is too long"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Enter a valid email address"),
  phone: z
    .string()
    .max(40, "Phone number is too long")
    .optional()
    .or(z.literal("")),
  company: z
    .string()
    .max(120, "Company name is too long")
    .optional()
    .or(z.literal("")),
  projectType: z.enum(
    ["commercial", "residential", "industrial", "healthcare", "education", "other"],
    { message: "Select a project type" }
  ),
  budget: z.enum(
    ["under-1m", "1-5m", "5-25m", "25-100m", "100m-plus", "undisclosed"],
    { message: "Select a budget range" }
  ),
  timeline: z.enum(
    ["immediate", "1-3-months", "3-6-months", "6-12-months", "exploring"],
    { message: "Select a timeline" }
  ),
  message: z
    .string()
    .min(20, "Tell us a little more — at least 20 characters")
    .max(4000, "Message is too long"),
  consent: z.literal(true, {
    message: "Please confirm to continue",
  }),
});

export type ContactInput = z.infer<typeof contactSchema>;
