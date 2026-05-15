import {
  Blocks,
  BookOpenText,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  Code2,
  Compass,
  Cpu,
  FileText,
  Flame,
  GraduationCap,
  Laptop,
  Megaphone,
  MessageSquareText,
  Network,
  PenLine,
  Radio,
  Search,
  Settings2,
  Sparkles,
  TerminalSquare,
  Wrench,
} from "lucide-react";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Builds", href: "#builds" },
  { label: "Beliefs", href: "#beliefs" },
  { label: "Stack", href: "#stack" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

export const commandCards = [
  "Building with AI",
  "Writing in public",
  "Homeschooling differently",
  "Fixing broken marketing",
  "Making chaos behave",
  "Learning out loud",
];

export const traits = [
  {
    title: "Blunt strategist",
    body: "I say the obvious thing people keep trying to politely avoid.",
    icon: MessageSquareText,
  },
  {
    title: "Systems builder",
    body: "If the process only lives in someone's head, it's already leaking money.",
    icon: Network,
  },
  {
    title: "AI operator",
    body: "I use AI to build, plan, write, research, and move faster without pretending the robot has a soul.",
    icon: Bot,
  },
  {
    title: "Real-world homeschooler",
    body: "My kids learn through projects, field trips, business, money, science, history, writing, and AI fluency.",
    icon: GraduationCap,
  },
  {
    title: "Local business brain",
    body: "I care about the businesses that actually keep towns alive.",
    icon: Building2,
  },
  {
    title: "Tool minimalist",
    body: "If the tool becomes homework, I fire it.",
    icon: Wrench,
  },
];

export const builds = [
  {
    title: "DewBwah",
    body: "A marketing agency for contractors, remodelers, builders, home service businesses, and local companies. Websites, SEO, ads, content, local visibility, and systems that should lead to calls, trust, and revenue.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Louie",
    body: "A Hermes-powered operator that helps with agency work, homeschool planning, research, writing, workflows, task management, and keeping my brain from opening another 97 tabs.",
    icon: BrainCircuit,
  },
  {
    title: "Homeschool Operating System",
    body: "A real-world learning setup for my boys built around AI fluency, field trips, projects, money, business, science, history, writing, and useful life skills.",
    icon: GraduationCap,
  },
  {
    title: "Personal Publishing System",
    body: "A growing body of writing across my website, Substack, LinkedIn, Instagram, X, and Facebook. Topics include AI, marketing, local business, systems, homeschooling, tools, and the business nonsense that needs called out.",
    icon: PenLine,
  },
  {
    title: "Website and Workflow Experiments",
    body: "Experiments built with Codex, Cursor, Antigravity, GitHub, Vercel, Tailwind, Next.js, and Mac/Apple workflows.",
    icon: Code2,
  },
  {
    title: "Local Problem-Solving",
    body: "Research and project ideas around Kansas City, local businesses, veterans, homelessness, civic problems, and practical ways regular people can help without drowning in bureaucracy.",
    icon: Compass,
  },
];

export const beliefs = [
  "Bad marketing advice wastes more than money. It wastes momentum.",
  "AI is useful when it gets work done, not when it makes prettier task lists.",
  "A website should explain, rank, load fast, build trust, and make the next step obvious.",
  "Local businesses need clarity before they need more content.",
  "If the work cannot survive outside your head, you do not have a system yet.",
  "Homeschooling should teach kids how the world actually works.",
  "Writing online should sound like a human had a pulse while typing it.",
  "Tools are only useful if they reduce friction. If they become a second job, they're fired.",
  "Pretty is nice. Useful pays better.",
  "If the phone is dead, the dashboard is decoration.",
];

export const proof = [
  {
    category: "Marketing and Websites",
    title: "Local visibility that earns the call",
    body: "Contractor websites, SEO structure, Google Business Profile systems, Google Ads audits, landing pages, offers, and local visibility strategy.",
    tags: ["Websites", "SEO", "GBP"],
    cta: "Review the work",
    icon: Search,
  },
  {
    category: "AI and Workflows",
    title: "Operators, dashboards, and prompt systems",
    body: "Hermes, Codex, Cursor, Antigravity, GitHub/Vercel workflows, dashboards, prompt systems, research flows, and Apple/Mac operating systems.",
    tags: ["Hermes", "Codex", "Systems"],
    cta: "Open the lab",
    icon: Cpu,
  },
  {
    category: "Writing and Publishing",
    title: "Sharp notes in public",
    body: "Posts and essays across DewBwahMarketing.com, Substack, LinkedIn, Facebook, Instagram, and X.",
    tags: ["Substack", "Blog", "Social"],
    cta: "Read the notes",
    icon: FileText,
  },
  {
    category: "Homeschool Projects",
    title: "Real-world learning days",
    body: "Field trips, business lessons, AI lessons, money/economy, science, history, writing, and planning systems.",
    tags: ["AI fluency", "Projects", "Life skills"],
    cta: "See the plan",
    icon: BookOpenText,
  },
  {
    category: "Local Problem Research",
    title: "Kansas City problems worth solving",
    body: "Civic issues, homelessness, veterans, local service gaps, and ways to turn research into practical action.",
    tags: ["KC", "Research", "Action"],
    cta: "Scan the notes",
    icon: Radio,
  },
  {
    category: "Website Experiments",
    title: "Fast builds and useful tests",
    body: "Personal sites, client sites, landing pages, dashboards, UX tests, and fast builds using modern tools.",
    tags: ["Next.js", "Tailwind", "Vercel"],
    cta: "View experiments",
    icon: TerminalSquare,
  },
];

export const stackGroups = [
  {
    title: "Build",
    items: ["Codex", "Cursor", "Antigravity", "GitHub", "Vercel", "Tailwind", "Next.js"],
    icon: Blocks,
  },
  {
    title: "AI",
    items: ["ChatGPT", "Hermes", "custom agents", "prompt systems", "workflow design"],
    icon: Bot,
  },
  {
    title: "Apple",
    items: ["Mac", "iPhone", "Apple ecosystem", "local files", "screenshots", "notes", "docs", "browser workflows"],
    icon: Laptop,
  },
  {
    title: "Marketing",
    items: ["Google Business Profile", "Google Search Console", "GA4", "Google Ads", "Meta", "PageSpeed Insights"],
    icon: Megaphone,
  },
  {
    title: "Publishing",
    items: ["DewBwah blog", "Substack", "LinkedIn", "Facebook", "Instagram", "X"],
    icon: PenLine,
  },
  {
    title: "Ops",
    items: ["Trello", "Slack", "Gmail", "Google Drive", "Google Calendar", "ContentSnare"],
    icon: Settings2,
  },
];

export const obsessions = [
  "AI agents that do actual work",
  "Hermes with ChatGPT as the brain",
  "Codex, Cursor, Antigravity, and fast site builds",
  "Contractor SEO and AI search",
  "Better websites for remodelers and builders",
  "Google Business Profile systems",
  "Local business lead flow",
  "Homeschooling outside the public-school box",
  "Workflow dashboards",
  "Kansas City problems worth solving",
  "Writing sharp posts without sounding like marketing oatmeal",
  "Tools that reduce friction instead of creating a second job",
];

export const articles = [
  {
    title: "I Fired Another Tool Because It Became Homework",
    category: "Tools",
    excerpt: "Some software saves time. Some software turns into a needy toddler with a login screen.",
    readTime: "4 min",
  },
  {
    title: "Your Website Is Not a Brochure. Stop Treating It Like One.",
    category: "Websites",
    excerpt: "A good website should answer questions, build trust, rank locally, and push the right person toward the next step.",
    readTime: "5 min",
  },
  {
    title: "AI Agents Are Only Cool If They Actually Do Something",
    category: "AI",
    excerpt: "A bot that needs constant babysitting is not an employee. It's a Tamagotchi with API access.",
    readTime: "6 min",
  },
  {
    title: "Homeschooling With AI Without Turning My Kids Into iPad Goblins",
    category: "Homeschool",
    excerpt: "AI can help kids think better, build more, and ask sharper questions when the human in charge refuses to outsource parenting to a screen.",
    readTime: "7 min",
  },
  {
    title: "Contractors Keep Buying Marketing They Don't Understand",
    category: "Marketing",
    excerpt: "Confusion is expensive. If you cannot explain what your marketing is doing, you probably cannot tell if it is working.",
    readTime: "5 min",
  },
  {
    title: "The Internet Is Full of Advice From People Who Have Never Had to Make Payroll",
    category: "Business",
    excerpt: "Theory is adorable until someone has to sell the thing, pay the invoice, and keep the lights on.",
    readTime: "4 min",
  },
];

export const contactCards = [
  {
    title: "Work with DewBwah",
    body: "For contractors, remodelers, builders, and local service companies that need websites, SEO, ads, content, or local visibility.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Collaborate",
    body: "For builders, writers, developers, operators, researchers, creators, and useful weirdos.",
    icon: Sparkles,
  },
  {
    title: "Follow Along",
    body: "For posts about AI, marketing, websites, homeschooling, local business, systems, and the occasional business take that should have been obvious.",
    icon: Flame,
  },
];

export const contactLinks = [
  { label: "Email Shelby", href: "mailto:hello@example.com" },
  { label: "Visit DewBwah", href: "#" },
  { label: "Read the Blog", href: "#" },
  { label: "Substack", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "X", href: "#" },
  { label: "Facebook", href: "#" },
];

export const currentTools = [
  "Hermes",
  "Codex",
  "Cursor",
  "Antigravity",
  "GitHub",
  "Vercel",
  "Tailwind",
  "Mac",
];
