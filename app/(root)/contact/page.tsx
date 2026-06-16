import { Metadata } from "next";

import { Icons } from "@/components/common/icons";
import PageContainer from "@/components/common/page-container";
import { Card } from "@/components/ui/card";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.contact.metadata.title,
  description: pagesConfig.contact.metadata.description,
};

const contactMethods = [
  {
    label: "Email",
    value: "ash.bhagat0511@gmail.com",
    href: "mailto:ash.bhagat0511@gmail.com",
    icon: Icons.gmail,
    external: false,
  },
  {
    label: "Phone",
    value: "+91 90458 05635",
    href: "tel:+919045805635",
    icon: Icons.contact,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "Ashish Bhagat",
    href: "https://www.linkedin.com/in/ashish-bhagat-85519227/",
    icon: Icons.linkedin,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <PageContainer
      title={pagesConfig.contact.title}
      description={pagesConfig.contact.description}
    >
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">
            Let&apos;s connect
          </h2>
          <p className="mt-2 text-muted-foreground">
            I&apos;m always happy to chat about new opportunities,
            partnerships, or how I can help. Based in India and open to new
            roles &mdash; feel free to reach out through any of the channels
            below.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <a
                key={method.label}
                href={method.href}
                target={method.external ? "_blank" : undefined}
                rel={method.external ? "noopener noreferrer" : undefined}
                className="group block focus:outline-none"
              >
                <Card className="flex h-full flex-col items-center gap-3 p-6 text-center transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group-focus-visible:ring-2 group-focus-visible:ring-ring">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-medium text-muted-foreground">
                    {method.label}
                  </span>
                  <span className="inline-flex items-center gap-1 break-all font-medium">
                    {method.value}
                    {method.external && (
                      <Icons.externalLink className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-70" />
                    )}
                  </span>
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </PageContainer>
  );
}
