"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { ChevronRight, Star } from "lucide-react";
import { useRef } from "react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Jake M.",
    role: "Brooklyn Resident",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Jake%20M",
    rating: "8.5/10",
    content:
      "Got a 8.5/10 - apparently my tote bag collection sealed the deal. Who knew my grocery shopping aesthetic was peak performative?",
  },
  {
    name: "Tyler B.",
    role: "Graduate Student",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Tyler%20B",
    rating: "7/10",
    content:
      "7/10 - points deducted for actually reading the feminist theory instead of just carrying it around. Rookie mistake.",
  },
  {
    name: "Marcus D.",
    role: "Tech Bro",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Marcus%20D",
    rating: "9/10",
    content:
      "9/10 - the platform docs were *chef's kiss*. Lost a point for not mentioning my therapist enough in casual conversation.",
  },
  {
    name: "Alex K.",
    role: "Coffee Shop Regular",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Alex%20K",
    rating: "6.5/10",
    content:
      "6.5/10 - apparently my extensive vinyl collection doesn't count if I actually listen to it. Should've kept them mint condition for the aesthetic.",
  },
  {
    name: "Sam L.",
    role: "Instagram Poet",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Sam%20L",
    rating: "8/10",
    content:
      "8/10 - solid score! My thrift store flannel and artisanal beard oil combo really hit the mark. The algorithm knows me too well.",
  },
  {
    name: "Ryan C.",
    role: "Yoga Instructor",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Ryan%20C",
    rating: "7.5/10",
    content:
      "7.5/10 - turns out posting about mindfulness while doom-scrolling is peak performative masculinity. Self-awareness level: expert.",
  },
];

const ScrollingCarouselTestimonials = () => {
  const plugin = useRef(
    AutoScroll({
      startDelay: 500,
      speed: 0.7,
    })
  );

  return (
    <section className="py-32 bg-background">
      <div className="container flex flex-col items-center gap-4">
        <h2 className="text-center text-3xl font-semibold lg:text-4xl font-display">
          Recently Rated Males
        </h2>
        <p className="text-center text-muted-foreground lg:text-lg">
          Real reviews from guys who found out just how performative they really are
        </p>
        <a href="#" className="flex items-center gap-1 font-semibold text-primary hover:text-accent">
          View all ratings
          <ChevronRight className="mt-0.5 h-4 w-auto" />
        </a>
      </div>
      <div className="lg:container">
        <div className="mt-16 space-y-4">
          <Carousel
            opts={{
              loop: true,
            }}
            plugins={[plugin.current]}
            onMouseLeave={() => plugin.current.play()}
            className="relative before:absolute before:top-0 before:bottom-0 before:left-0 before:z-10 before:w-36 before:bg-linear-to-r before:from-background before:to-transparent after:absolute after:top-0 after:right-0 after:bottom-0 after:z-10 after:w-36 after:bg-linear-to-l after:from-background after:to-transparent"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="basis-auto">
                  <Card className="max-w-96 p-6 select-none border-2 border-matcha-light/20 bg-card hover:bg-matcha-tint/30 transition-colors">
                    <div className="mb-4 flex gap-4">
                      <Avatar className="size-14 rounded-full ring-2 ring-primary/20">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium font-display">{testimonial.name}</p>
                          <div className="flex items-center gap-1 text-primary font-semibold">
                            <Star className="h-4 w-4 fill-current" />
                            <span className="text-sm">{testimonial.rating}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <q className="leading-7 text-muted-foreground italic">
                      {testimonial.content}
                    </q>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { ScrollingCarouselTestimonials };