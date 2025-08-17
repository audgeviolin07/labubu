import { ArrowUpRight, Instagram, Music } from "lucide-react";

const MinimalCenteredFooter = () => {
  const navigation = [
    { name: "Privacy Policy", href: "#" },
    { name: "How It Works", href: "#" },
    { name: "Criteria Guide", href: "#" },
    { name: "Contact", href: "#" },
    { name: "About", href: "#" },
  ];

  const social = [
    { name: "Instagram", href: "https://instagram.com/performameter", icon: Instagram },
    { name: "TikTok", href: "https://tiktok.com/@performameter", icon: Music },
  ];

  return (
    <section className="bg-background flex flex-col items-center gap-14 py-32">
      <nav className="container flex flex-col items-center gap-6">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="font-medium text-matcha hover:text-matcha-deep transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
          {social.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="flex items-center gap-1 font-medium text-matcha hover:text-matcha-deep transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <item.icon className="size-4" />
                {item.name}
                <ArrowUpRight className="size-3" />
              </a>
            </li>
          ))}
        </ul>
        
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 PerformaMeter. All rights reserved.
          </p>
          <p className="text-xs text-text-secondary max-w-md">
            This is a playful, satirical tool for entertainment purposes. Results are not meant to be taken seriously and are based on aesthetic trends and cultural observations.
          </p>
        </div>
      </nav>
    </section>
  );
};

export { MinimalCenteredFooter };