"use client";

import { BookOpen, Headphones, Heart, Palette, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";

interface DataItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

const DATA: DataItem[] = [
  {
    id: 1,
    icon: <Heart className="h-4 w-4" />,
    title: "labubu",
    description:
      "collects kawaii plushies and figurines, particularly labubu characters, as a way to showcase their 'soft masculinity' and aesthetic sensitivity.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1755466101193-gt4vosdfbxi.jpg",
  },
  {
    id: 2,
    icon: <Sparkles className="h-4 w-4" />,
    title: "matcha",
    description:
      "avant-garde styling choices that blur traditional gender lines, from painted nails to statement jewelry.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/6cd5bcd6-4e31-4edb-8785-aea5e6644a66/generated_images/aesthetic-matcha-green-tea-scene%2c-matc-c14d11fd-20250817210846.jpg?",
  },
  {
    id: 3,
    icon: <Palette className="h-4 w-4" />,
    title: "aesthetic choices",
    description:
      "platform shoes, flared pants, and carefully curated vintage pieces that scream 'i understand fashion beyond basic masculinity.'",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1755467118255-a4arnhyuhr.webp",
  },
  {
    id: 4,
    icon: <BookOpen className="h-4 w-4" />,
    title: "intellectual signaling",
    description:
      "carries feminist literature, quotes bell hooks casually in conversation, and has strong opinions about toxic masculinity.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/6cd5bcd6-4e31-4edb-8785-aea5e6644a66/generated_images/stack-of-feminist-literature-books%2c-ti-0af63131-20250817210905.jpg?",
  },
  {
    id: 5,
    icon: <Headphones className="h-4 w-4" />,
    title: "audio accessories",
    description:
      "premium headphones always visible, curated indie playlists, and an encyclopedic knowledge of underground artists.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/6cd5bcd6-4e31-4edb-8785-aea5e6644a66/generated_images/premium-aesthetic-headphones%2c-over-ear-d5d57b4b-20250817210856.jpg?",
  },
  {
    id: 6,
    icon: <Heart className="h-4 w-4" />,
    title: "social awareness",
    description:
      "performative activism on social media, virtue signaling, and being 'an ally' in ways that center themselves.",
    image:
      "https://images.unsplash.com/photo-1680499661732-3cfae4690e1c?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const NumberedBadgeCards = () => {
  return (
    <section className="bg-transparent py-16">
      <div className="container">
        <div className="flex flex-col items-center pb-4 text-center">
          <div>
            <span className="my-3 mb-4 flex items-center justify-center">
              <Badge
                variant="outline"
                className="bg-white px-3 py-1 border-green-500 text-green-600"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                <p className="text-xs">rating system</p>
              </Badge>
            </span>
          </div>
          <h1 className="pb-3 text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl font-display">
            rating criteria
          </h1>
          <p className="text-muted-foreground max-w-md text-sm lg:max-w-2xl lg:text-lg">
            what makes a male performative?
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-4 grid grid-cols-1 gap-4 px-4 sm:px-6 md:grid-cols-2 md:px-8 lg:grid-cols-3 lg:px-12">
          {DATA.map((feature) => (
            <div
              key={feature.id}
              className="bg-background grid grid-cols-1 rounded-3xl border border-matcha-light shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="bg-matcha text-white inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold">
                  {feature.icon}
                </div>
                <p className="text-md my-4 font-semibold font-display">
                  {feature.title}
                </p>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
              <div className="mt-auto flex min-h-[200px] justify-center rounded-b-3xl">
                <div className="h-[200px] w-full">
                  <img
                    src={feature.image}
                    alt="placeholder"
                    className="h-full w-full rounded-b-3xl object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { NumberedBadgeCards };
