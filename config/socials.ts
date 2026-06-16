import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "LinkedIn",
    username: "Ashish Bhagat",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/ashish-bhagat-85519227/",
  },
  {
    name: "Gmail",
    username: "ash.bhagat0511",
    icon: Icons.gmail,
    link: "mailto:ash.bhagat0511@gmail.com",
  },
  {
    name: "Phone",
    username: "+91 90458 05635",
    icon: Icons.contact,
    link: "tel:+919045805635",
  },
];
