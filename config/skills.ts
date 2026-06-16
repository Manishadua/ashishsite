import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  // Sales & Relationship
  {
    name: "Relationship Management",
    description:
      "Build and maintain lasting client relationships built on trust, support, and satisfaction.",
    rating: 5,
    icon: Icons.userFill,
  },
  {
    name: "Sales & Business Development",
    description:
      "Identify growth opportunities and drive business performance across branch networks.",
    rating: 5,
    icon: Icons.work,
  },
  {
    name: "Bancassurance",
    description:
      "Distribute insurance products through banking partners and manage branch-level performance.",
    rating: 5,
    icon: Icons.gitOrgBuilding,
  },
  {
    name: "Account Management",
    description:
      "Oversee client and financial accounts with accuracy, ownership, and attention to detail.",
    rating: 4,
    icon: Icons.billing,
  },
  {
    name: "Negotiation & Persuasion",
    description:
      "Influence outcomes and close agreements through clear, confident, and fair negotiation.",
    rating: 4,
    icon: Icons.laughEmoji,
  },

  // Operations & Compliance
  {
    name: "Operations Management",
    description:
      "Optimize operational processes to improve organizational efficiency and consistency.",
    rating: 4,
    icon: Icons.settings,
  },
  {
    name: "Regulatory Compliance",
    description:
      "Ensure adherence to industry regulations and support internal and external audits.",
    rating: 5,
    icon: Icons.check,
  },
  {
    name: "Strategic Planning",
    description:
      "Plan and execute initiatives that align day-to-day work with long-term business goals.",
    rating: 4,
    icon: Icons.infoMark,
  },
  {
    name: "Time Management & Organization",
    description:
      "Prioritize tasks and manage time effectively to deliver results under deadlines.",
    rating: 4,
    icon: Icons.calendar,
  },

  // Core Strengths
  {
    name: "Customer Service",
    description:
      "Deliver personalized support and ensure customer satisfaction at every touchpoint.",
    rating: 5,
    icon: Icons.contact,
  },
  {
    name: "Communication",
    description:
      "Communicate clearly across phone, email, and chat to resolve needs and build rapport.",
    rating: 5,
    icon: Icons.questionMark,
  },
  {
    name: "Team Leadership",
    description:
      "Lead and motivate teams while fostering a positive and productive work environment.",
    rating: 4,
    icon: Icons.user,
  },
  {
    name: "Interpersonal Skills",
    description:
      "Connect with clients and colleagues through empathy, listening, and collaboration.",
    rating: 5,
    icon: Icons.link,
  },
  {
    name: "Adaptability & Resilience",
    description:
      "Stay current on industry trends and adapt quickly to changing business demands.",
    rating: 4,
    icon: Icons.star,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
