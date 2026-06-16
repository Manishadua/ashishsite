import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "niva-bupa",
    position: "Relationship Manager",
    company: "Niva Bupa Health Insurance Company",
    location: "Rudrapur, Uttarakhand",
    startDate: new Date("2021-02-01"),
    endDate: "Present",
    description: [
      "Promoted from Assistant Relationship Manager to Relationship Manager in August 2022.",
      "Manages a cluster of 17 Axis Bank bancassurance branches.",
      "Responsible for branch performance, business growth, regulatory compliance, and fostering a positive work environment.",
      "Applies strong sales management and business-development skills to identify growth opportunities.",
    ],
    achievements: [
      "Promoted from Assistant Relationship Manager to Relationship Manager in August 2022 in recognition of consistent performance.",
      "Manages a cluster of 17 Axis Bank bancassurance branches, driving branch performance and business growth.",
      "Ensures regulatory compliance across the branch cluster while maintaining a positive and productive work environment.",
      "Identifies new growth opportunities through strong sales management and business-development initiatives.",
    ],
    skills: [
      "Relationship Management",
      "Sales & Business Development",
      "Bancassurance",
      "Regulatory Compliance",
      "Team Leadership",
      "Strategic Planning",
    ],
    companyUrl: "https://www.nivabupa.com",
  },
  {
    id: "gramen-botanicals",
    position: "Accounts & Foreign Compliance Executive",
    company: "Gramen Botanicals Pvt. Ltd.",
    location: "Haldwani, Uttarakhand",
    startDate: new Date("2020-07-01"),
    endDate: new Date("2021-01-01"),
    description: [
      "Managed financial accounts and ensured compliance with international regulations.",
      "Assisted internal and external audits by providing accurate financial information.",
    ],
    achievements: [
      "Managed financial accounts while ensuring full compliance with international regulations.",
      "Supported internal and external audits by preparing and providing accurate financial information.",
    ],
    skills: [
      "Regulatory Compliance",
      "Account Management",
      "Operations Management",
      "Time Management & Organization",
    ],
  },
  {
    id: "concentrix",
    position: "Operations Advisor",
    company: "Concentrix Daksh Services India Pvt. Ltd.",
    location: "Gurgaon, Haryana",
    startDate: new Date("2019-08-01"),
    endDate: new Date("2020-06-01"),
    description: [
      "Advised on optimizing operational processes and improving organizational efficiency.",
    ],
    achievements: [
      "Advised on optimizing operational processes and improving organizational efficiency across teams.",
    ],
    skills: [
      "Operations Management",
      "Strategic Planning",
      "Communication",
      "Adaptability & Resilience",
    ],
  },
  {
    id: "hinduja",
    position: "Customer Service Representative",
    company: "Hinduja Global Solutions",
    location: "Noida, Uttar Pradesh",
    startDate: new Date("2019-02-01"),
    endDate: new Date("2019-07-01"),
    description: [
      "Handled customer inquiries covering product information, order status, billing, and complaints.",
      "Communicated via phone, email, and chat to resolve customer needs.",
    ],
    achievements: [
      "Resolved a wide range of customer inquiries including product information, order status, billing, and complaints.",
      "Delivered consistent support across phone, email, and chat channels to meet customer needs.",
    ],
    skills: [
      "Customer Service",
      "Communication",
      "Interpersonal Skills",
      "Adaptability & Resilience",
    ],
  },
];
