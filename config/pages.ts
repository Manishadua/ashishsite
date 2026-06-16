import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Ashish Bhagat's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description:
      "Professional strengths that define my work as a Relationship Manager.",
    metadata: {
      title: "Skills",
      description:
        "Ashish Bhagat's professional skills in relationship management, sales, operations, and customer service.",
    },
  },
  experience: {
    title: "Experience",
    description: "My professional journey across insurance, banking, and customer service.",
    metadata: {
      title: "Experience",
      description:
        "Ashish Bhagat's professional journey and career timeline across insurance, banking, and customer service.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore opportunities to work together.",
    metadata: {
      title: "Contact",
      description: "Get in touch with Ashish Bhagat.",
    },
  },
  resume: {
    title: "Resume",
    description: "Ashish Bhagat's resume.",
    metadata: {
      title: "Resume",
      description: "Ashish Bhagat's resume.",
    },
  },
};
