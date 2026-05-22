import {
  Building2,
  ClipboardList,
  HardHat,
  LineChart,
  CalendarClock,
  ShieldAlert,
  Compass,
  PencilRuler,
  Network,
  Wrench,
  KeyRound,
  Factory,
  Home,
  GraduationCap,
  Landmark,
  Server,
  DollarSign,
  TrendingUp,
  ShieldCheck,
  Activity,
  BarChart3,
  AlertTriangle,
  Play,
  type LucideIcon,
} from "lucide-react";

export const brand = {
  name: "GAT",
  full: "GAT Construction Management, Inc.",
  short: "GAT CM",
  tagline: "Strategic construction project management.",
  phone: "(561) 657-3095",
  phoneHref: "tel:+15616573095",
  email: "gatconstructionfl@gmail.com",
  emailHref: "mailto:gatconstructionfl@gmail.com",
  address: {
    line1: "Florida Headquarters",
    line2: "Servicing FL statewide",
  },
  whatsapp: "(561) 657-3095",
  whatsappHref: "https://wa.me/15616573095",
  calendly: "https://calendly.com/gatconstruction/30min",
  contact: {
    name: "Sonny Martin",
    title: "Director of Business Development & Project Manager",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/gat-construction-management",
    instagram: "https://www.instagram.com/gatconstruction",
  },
};

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "The OS", href: "#os" },
  { label: "Cases", href: "#cases" },
  { label: "Team", href: "#team" },
  { label: "Insights", href: "#insights" },
];

export const stats = [
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 15, suffix: "+", label: "Years of Practice" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 500, prefix: "$", suffix: "M+", label: "Capital Managed" },
] as const;

export const trustLogos = [
  "TURNER",
  "BECHTEL",
  "SKANSKA",
  "AECOM",
  "DPR",
  "MORTENSON",
  "SUFFOLK",
  "GILBANE",
  "CLARK",
  "HENSEL PHELPS",
];

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
  stat: { value: string; label: string };
};

export const services: Service[] = [
  {
    icon: ClipboardList,
    title: "Project Planning",
    description:
      "Programmatic discovery, feasibility studies, and pre-construction strategy that protect scope and capital from day one.",
    bullets: ["Feasibility & cost modeling", "Permitting strategy", "Procurement planning"],
    stat: { value: "−14%", label: "Avg. pre-con cost reduction" },
  },
  {
    icon: Building2,
    title: "Construction Management",
    description:
      "End-to-end owner's representation across design, contracting, and delivery — accountable to your timeline and budget.",
    bullets: ["Owner's representative", "Contractor selection", "Change-order control"],
    stat: { value: "98%", label: "Repeat client engagement" },
  },
  {
    icon: HardHat,
    title: "Site Supervision",
    description:
      "Daily field leadership, quality assurance, and safety enforcement led by senior PMs — never delegated to juniors.",
    bullets: ["Daily site walks", "QA / QC protocols", "OSHA 30 compliance"],
    stat: { value: "0", label: "Lost-time incidents, 18 mo" },
  },
  {
    icon: LineChart,
    title: "Budget Coordination",
    description:
      "Cost engineering, value-engineering, and forecast variance reporting so you always know where the money is.",
    bullets: ["Earned-value tracking", "Variance forecasting", "Vendor reconciliation"],
    stat: { value: "−4.1%", label: "Avg. budget variance" },
  },
  {
    icon: CalendarClock,
    title: "Scheduling",
    description:
      "CPM scheduling, look-aheads, and integrated master schedules that hold every stakeholder to the same critical path.",
    bullets: ["P6 master schedules", "4-week look-aheads", "Float & risk analysis"],
    stat: { value: "−6.4%", label: "Avg. schedule variance" },
  },
  {
    icon: ShieldAlert,
    title: "Risk Management",
    description:
      "Pre-empt the surprises — insurance review, contract scrutiny, and continuity planning across the project lifecycle.",
    bullets: ["Risk register & matrix", "Contract & insurance audit", "Continuity protocols"],
    stat: { value: "$2.4B", label: "Capital protected" },
  },
];

export type ProjectCategory =
  | "Commercial"
  | "Residential"
  | "Industrial"
  | "Healthcare"
  | "Education";

export type ProjectStatus = "Completed" | "Current" | "Future";

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: ProjectCategory;
  status: ProjectStatus;
  location: string;
  year: string;
  size: string;
  value: string;
  image: string;
  blurb: string;
};

export const projects: Project[] = [
  {
    slug: "harbor-financial-tower",
    title: "Harbor Financial Tower",
    client: "Pacific Capital Partners",
    category: "Commercial",
    status: "Completed",
    location: "Miami, FL",
    year: "2024",
    size: "640,000 sf",
    value: "$340M",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1600&q=80",
    blurb:
      "A 42-story Class-A office tower delivered four months ahead of schedule with a 12% capital underrun.",
  },
  {
    slug: "summit-medical-pavilion",
    title: "Summit Medical Pavilion",
    client: "Summit Health Network",
    category: "Healthcare",
    status: "Completed",
    location: "Orlando, FL",
    year: "2024",
    size: "320,000 sf",
    value: "$210M",
    image:
      "https://images.unsplash.com/photo-1587351021355-a479a299d2f9?auto=format&fit=crop&w=1600&q=80",
    blurb:
      "A 220-bed acute-care pavilion executed under live-hospital conditions with zero patient disruption.",
  },
  {
    slug: "northgate-distribution-hub",
    title: "Northgate Distribution Hub",
    client: "Atlas Logistics",
    category: "Industrial",
    status: "Current",
    location: "Tampa, FL",
    year: "2026",
    size: "1.2M sf",
    value: "$185M",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80",
    blurb:
      "Largest automated fulfillment center in the region, on track for early-Q4 occupancy.",
  },
  {
    slug: "ridgeline-residences",
    title: "Ridgeline Residences",
    client: "Crestmont Development",
    category: "Residential",
    status: "Current",
    location: "Fort Lauderdale, FL",
    year: "2026",
    size: "412 units",
    value: "$240M",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
    blurb:
      "Two-tower luxury condominium development with rooftop amenities and a private cultural pavilion.",
  },
  {
    slug: "polaris-academy",
    title: "Polaris Academy",
    client: "Polaris Education Trust",
    category: "Education",
    status: "Completed",
    location: "West Palm Beach, FL",
    year: "2023",
    size: "190,000 sf",
    value: "$95M",
    image:
      "https://images.unsplash.com/photo-1562516710-38a2c8a9e72a?auto=format&fit=crop&w=1600&q=80",
    blurb:
      "A K-12 STEM campus blending mass-timber construction with passive-house energy performance.",
  },
  {
    slug: "marina-cultural-arts-center",
    title: "Marina Cultural Arts Center",
    client: "City of Boca Raton",
    category: "Commercial",
    status: "Future",
    location: "Boca Raton, FL",
    year: "2028",
    size: "165,000 sf",
    value: "$120M",
    image:
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1600&q=80",
    blurb:
      "Waterfront cultural anchor with adaptive performance halls and a public bayside promenade.",
  },
  {
    slug: "horizon-life-sciences",
    title: "Horizon Life Sciences Campus",
    client: "Horizon Therapeutics",
    category: "Healthcare",
    status: "Future",
    location: "Jacksonville, FL",
    year: "2029",
    size: "480,000 sf",
    value: "$520M",
    image:
      "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1600&q=80",
    blurb:
      "Three-building research campus with BSL-2/3 laboratories and a clinical-translational hub.",
  },
  {
    slug: "summit-data-center",
    title: "Summit Data Center IV",
    client: "Summit Cloud Infrastructure",
    category: "Industrial",
    status: "Future",
    location: "Miami-Dade, FL",
    year: "2028",
    size: "60MW IT load",
    value: "$680M",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80",
    blurb:
      "Hyperscale liquid-cooled data center with on-site solar and 99.999% uptime architecture.",
  },
];

export const futureRoadmap = projects
  .filter((p) => p.status !== "Completed")
  .map((p) => ({
    title: p.title,
    location: p.location,
    year: p.year,
    value: p.value,
    status: p.status,
    blurb: p.blurb,
  }));

export type Member = {
  name: string;
  role: string;
  years: number;
  specialties: string[];
  image: string;
  linkedin: string;
};

export const team: Member[] = [
  {
    name: "Sonny Martin",
    role: "Director of Business Development & Project Manager",
    years: 15,
    specialties: ["Business Development", "Project Management", "Client Relationships"],
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80",
    linkedin: "https://www.linkedin.com/in/sonnymartin",
  },
  {
    name: "Marcus Beale",
    role: "Director, Pre-Construction",
    years: 18,
    specialties: ["Cost Engineering", "VE", "Procurement"],
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=80",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Priya Anand",
    role: "Director, Healthcare Delivery",
    years: 16,
    specialties: ["Acute Care", "Phased Occupancy", "Compliance"],
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=80",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Elena Rios",
    role: "Senior Project Manager",
    years: 14,
    specialties: ["Industrial", "Mission-Critical", "Schedule"],
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Jordan Hwang",
    role: "Senior Project Manager",
    years: 13,
    specialties: ["Mass Timber", "Sustainability", "Education"],
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Theo Castellanos",
    role: "Head of Field Operations",
    years: 20,
    specialties: ["Site Leadership", "Safety", "Self-Perform"],
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
    linkedin: "https://www.linkedin.com/",
  },
];

export type Review = {
  quote: string;
  author: string;
  title: string;
  project: string;
  rating: number;
};

export const reviews: Review[] = [
  {
    quote:
      "GAT ran our tower as if it were their own balance sheet. Four months ahead, eight figures under — and not a single change order we didn't bless ourselves.",
    author: "Karen Liang",
    title: "SVP Capital Projects, Pacific Capital Partners",
    project: "Harbor Financial Tower",
    rating: 5,
  },
  {
    quote:
      "Our acute-care expansion happened around live patients. They moved with surgical precision and the kind of communication you almost never see in this industry.",
    author: "Dr. Aaron Singh",
    title: "Chief of Facilities, Summit Health Network",
    project: "Summit Medical Pavilion",
    rating: 5,
  },
  {
    quote:
      "We've hired a lot of CMs over the years. GAT is the only firm that earns the room — they tell you the truth on day one and again on day three hundred.",
    author: "Rebecca Toh",
    title: "President, Crestmont Development",
    project: "Ridgeline Residences",
    rating: 5,
  },
  {
    quote:
      "They turned a politically complicated waterfront project into something the city is proud of. Schedule, budget, and community — they protected all three.",
    author: "Mayor J. Alvarez",
    title: "City of Boca Raton",
    project: "Marina Cultural Arts Center",
    rating: 5,
  },
];

export type ProcessStep = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const process: ProcessStep[] = [
  {
    icon: Compass,
    title: "Plan",
    description:
      "We start by stress-testing the brief — programming, capital, and constraints — before a single drawing is committed.",
  },
  {
    icon: PencilRuler,
    title: "Design",
    description:
      "We hold design partners to performance, not promises. Constructibility and cost are designed in, not engineered out.",
  },
  {
    icon: Network,
    title: "Manage",
    description:
      "Every contract, schedule, and dollar flows through a single accountable PM. No diffusion of responsibility.",
  },
  {
    icon: Wrench,
    title: "Execute",
    description:
      "Senior leaders on site, daily. QA / QC, safety, and schedule enforced with the same discipline we bring to budget.",
  },
  {
    icon: KeyRound,
    title: "Deliver",
    description:
      "Punch, commissioning, and a full warranty handover that makes day-one occupancy boring — in the best possible way.",
  },
];

export const heroVideo = {
  src: "https://videos.pexels.com/video-files/2516160/2516160-uhd_3840_2160_24fps.mp4",
  poster:
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=70",
};

export const aboutCopy = {
  eyebrow: "About GAT",
  headline: "We were built to manage the projects nobody else will own.",
  body: [
    "GAT Construction Management was founded on a simple, uncompromising idea: the most consequential projects deserve a single accountable partner — not a tower of subcontracted decisions.",
    "We act as your owner's representative, your principal-in-charge, and your bad-cop-when-needed. We protect schedule, scope, capital, and reputation with equal seriousness.",
    "Our senior partners stay on every engagement from kickoff through warranty. That's the line we will not cross — and it's why our clients keep building with us.",
  ],
  values: [
    { title: "Senior on the line", body: "A partner — not an associate — is your point of contact every day of the project." },
    { title: "Truth on day one", body: "We tell you what's true even when it isn't easy. Especially when it isn't easy." },
    { title: "One number, one schedule", body: "We don't carry parallel realities. One budget, one schedule, one source of truth." },
    { title: "Quiet excellence", body: "We do not chase logos. We chase the next handshake from the client we just delivered for." },
  ],
};

// -------------------------------------------------------------------------
// Hero rotating headlines
// -------------------------------------------------------------------------
export const heroHeadlines = [
  { lead: "Construction that", emphasis: "shapes the future." },
  { lead: "Senior partners on", emphasis: "every project, every day." },
  { lead: "Capital protected.", emphasis: "Schedules delivered." },
  { lead: "One number.", emphasis: "One schedule. Zero surprises." },
  { lead: "Landmarks delivered.", emphasis: "Skylines in progress." },
] as const;

// -------------------------------------------------------------------------
// Hero image carousel
// -------------------------------------------------------------------------
export const heroCarousel = [
  {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2400&q=80",
    alt: "Drone view of a downtown construction site",
  },
  {
    src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=2400&q=80",
    alt: "A finished glass commercial tower at dusk",
  },
  {
    src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2400&q=80",
    alt: "Industrial warehouse construction interior",
  },
  {
    src: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=2400&q=80",
    alt: "Engineers reviewing blueprints on site",
  },
] as const;

// -------------------------------------------------------------------------
// Scarcity message
// -------------------------------------------------------------------------
export const scarcity = {
  badge: "3 partner engagements available this quarter",
  detail:
    "We cap our roster intentionally — so a senior principal can stay on every project, every day.",
};

// -------------------------------------------------------------------------
// By the Numbers
// -------------------------------------------------------------------------
export type BigNumber = {
  icon: LucideIcon;
  value: string;
  label: string;
  sub: string;
};

export const bigNumbers: BigNumber[] = [
  {
    icon: DollarSign,
    value: "$2.4B",
    label: "Capital delivered",
    sub: "Across the last five years",
  },
  {
    icon: Building2,
    value: "640+",
    label: "Projects executed",
    sub: "All sectors, every region",
  },
  {
    icon: TrendingUp,
    value: "−6.4%",
    label: "Avg. schedule variance",
    sub: "Consistently ahead of plan",
  },
  {
    icon: ShieldCheck,
    value: "0",
    label: "Lost-time incidents",
    sub: "18-month rolling, OSHA 30 roster",
  },
];

// -------------------------------------------------------------------------
// Sector categories
// -------------------------------------------------------------------------
export type Category = {
  name: string;
  count: number;
  icon: LucideIcon;
  image: string;
};

export const categories: Category[] = [
  {
    name: "Commercial",
    count: 184,
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Healthcare",
    count: 96,
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1587351021355-a479a299d2f9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Industrial",
    count: 142,
    icon: Factory,
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Residential",
    count: 78,
    icon: Home,
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Education",
    count: 54,
    icon: GraduationCap,
    image:
      "https://images.unsplash.com/photo-1562516710-38a2c8a9e72a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Civic / Cultural",
    count: 32,
    icon: Landmark,
    image:
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Mission-Critical",
    count: 28,
    icon: Server,
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
  },
];

// -------------------------------------------------------------------------
// GAT Operating System — dashboard mockup
// -------------------------------------------------------------------------
export type OsKpi = {
  label: string;
  value: string;
  delta: string;
  positive: boolean;
};

export const meridianOs = {
  projectName: "Harbor Financial Tower",
  status: "Active · Day 412 of 540",
  kpis: [
    { label: "Schedule", value: "+18d", delta: "ahead of plan", positive: true },
    { label: "Budget", value: "−$11.4M", delta: "vs. forecast", positive: true },
    { label: "Safety", value: "0", delta: "lost-time incidents", positive: true },
    { label: "RFI cycle", value: "2.1d", delta: "median resolution", positive: true },
  ] as OsKpi[],
  schedule: 0.74,
  vendors: [
    { name: "Structural", state: "ok" },
    { name: "Envelope", state: "ok" },
    { name: "MEP", state: "watch" },
    { name: "Vertical Transport", state: "ok" },
    { name: "Interiors", state: "ok" },
    { name: "Site / Civil", state: "ok" },
    { name: "Low-Voltage", state: "watch" },
    { name: "Commissioning", state: "pending" },
  ] as { name: string; state: "ok" | "watch" | "pending" | "risk" }[],
  risks: [
    { title: "Curtain wall lead time", severity: "watch" },
    { title: "MEP coordination at level 22", severity: "watch" },
    { title: "Elevator commissioning window", severity: "pending" },
  ] as { title: string; severity: "ok" | "watch" | "pending" | "risk" }[],
  osBullets: [
    "Single source of truth across schedule, budget, RFIs, and risk.",
    "Senior partners write the weekly variance memo — never an analyst.",
    "Every dollar tracked against earned-value, not just plan.",
    "Risk register updated every Friday at 4 PM. Without fail.",
  ],
  osHeadline: { lead: "Built on a private", emphasis: "operating system." },
};

export const osIcons = {
  schedule: Activity,
  budget: BarChart3,
  safety: ShieldCheck,
  rfi: AlertTriangle,
};

// -------------------------------------------------------------------------
// Case studies
// -------------------------------------------------------------------------
export type CaseStudy = {
  project: string;
  sector: string;
  image: string;
  before: string[];
  after: string[];
  pull: { value: string; label: string };
};

export const caseStudies: CaseStudy[] = [
  {
    project: "Harbor Financial Tower",
    sector: "Commercial · $340M",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1400&q=80",
    before: [
      "12-month schedule slip forecast",
      "$28M over original budget",
      "Three contractors in dispute",
    ],
    after: [
      "Delivered four months ahead",
      "12% capital underrun",
      "Zero outstanding claims at handover",
    ],
    pull: { value: "+16 months", label: "Recovered against forecast" },
  },
  {
    project: "Summit Medical Pavilion",
    sector: "Healthcare · $210M",
    image:
      "https://images.unsplash.com/photo-1587351021355-a479a299d2f9?auto=format&fit=crop&w=1400&q=80",
    before: [
      "Live-hospital phasing risk",
      "Two failed early bid packages",
      "Compliance gaps in initial design",
    ],
    after: [
      "Zero patient disruption events",
      "Re-bid recovered $4.8M",
      "Full DSHS approval first pass",
    ],
    pull: { value: "0", label: "Patient disruption events" },
  },
  {
    project: "Northgate Distribution Hub",
    sector: "Industrial · $185M",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=80",
    before: [
      "Automation vendor 9 months late",
      "Foundation re-design required",
      "Tariff exposure on steel package",
    ],
    after: [
      "On track for early-Q4 occupancy",
      "Re-design absorbed inside float",
      "Locked steel below tariff window",
    ],
    pull: { value: "−9 months", label: "Vendor delay absorbed" },
  },
];

export const caseStudiesCopy = {
  eyebrow: "Case studies",
  headline: { lead: "Where we", emphasis: "saved the project." },
  intro:
    "Three projects, three forecasts that pointed the wrong way, three outcomes we own. The numbers below are receipts, not promises.",
};

// -------------------------------------------------------------------------
// Video grid
// -------------------------------------------------------------------------
export type VideoTile = {
  title: string;
  desc: string;
  duration: string;
  category: string;
  thumb: string;
  href: string;
};

export const videos: VideoTile[] = [
  {
    title: "Meet GAT",
    desc: "Our founding principles, our roster, and why we cap our engagements.",
    duration: "3:42",
    category: "Brand",
    thumb:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    href: "#",
  },
  {
    title: "Harbor Tower walkthrough",
    desc: "How we recovered 16 months against a failing schedule.",
    duration: "8:14",
    category: "Case Study",
    thumb:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80",
    href: "#",
  },
  {
    title: "Inside the variance memo",
    desc: "A real Friday review session — schedule, budget, risk.",
    duration: "11:02",
    category: "Process",
    thumb:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    href: "#",
  },
  {
    title: "Q2 2026 market outlook",
    desc: "Tariffs, bidding climates, and what owners should fund this year.",
    duration: "6:33",
    category: "Market",
    thumb:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    href: "#",
  },
];

export const videoSection = {
  eyebrow: "Watch the experience",
  headline: { lead: "Inside GAT, in", emphasis: "their own words." },
  icon: Play,
};

// -------------------------------------------------------------------------
// Market insights / blog
// -------------------------------------------------------------------------
export type Insight = {
  slug: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  author: string;
  image: string;
};

export const insights: Insight[] = [
  {
    slug: "tightening-bidding-climates",
    category: "Market",
    date: "May 2026",
    readTime: "6 min read",
    title: "Why bidding climates are tightening in Florida commercial construction.",
    excerpt:
      "Material lead times have stabilized, but specialty trade capacity has not. Here's how owners should adjust their pre-con strategy.",
    author: "Sonny Martin",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "healthcare-phasing-playbook",
    category: "Healthcare",
    date: "April 2026",
    readTime: "9 min read",
    title: "A phasing playbook for live-hospital construction.",
    excerpt:
      "What we learned delivering Summit Medical without a single patient-disruption event — and the checklist we now use everywhere.",
    author: "Priya Anand",
    image:
      "https://images.unsplash.com/photo-1587351021355-a479a299d2f9?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "owners-rep-vs-cm-at-risk",
    category: "Owner's Rep",
    date: "March 2026",
    readTime: "8 min read",
    title: "Owner's rep vs. CM at risk: choosing the right delivery model.",
    excerpt:
      "A practical framework for institutional owners deciding how to structure their next $100M+ engagement.",
    author: "Marcus Beale",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
  },
];
