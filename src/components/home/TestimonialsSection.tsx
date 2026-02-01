'use client';

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Robert Thompson",
    role: "CEO, Tech Innovations Inc.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    content:
      "BuildCraft transformed our vision into reality. Their attention to detail and commitment to excellence exceeded our expectations. The new office space has boosted our team's productivity significantly.",
    rating: 5,
    project: "Modern Office Complex",
  },
  {
    name: "Sarah Mitchell",
    role: "Homeowner",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    content:
      "Building our dream home was a seamless experience with BuildCraft. They listened to every detail and delivered a home that perfectly reflects our family's lifestyle. Couldn't be happier!",
    rating: 5,
    project: "Custom Family Residence",
  },
  {
    name: "Michael Chen",
    role: "Director, Retail Solutions",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    content:
      "Professional, punctual, and precise. BuildCraft delivered our retail space on time and within budget. Their project management skills are second to none in the industry.",
    rating: 5,
    project: "Shopping Center Renovation",
  },
  {
    name: "Emily Rodriguez",
    role: "Property Developer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    content:
      "We've worked with many construction firms, but BuildCraft stands out for their quality and reliability. They've become our go-to partner for all our development projects.",
    rating: 5,
    project: "Multi-Unit Development",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Testimonials
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Don't just take our word for it. Hear from the clients who have
            experienced our commitment to excellence firsthand.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div
          className="relative mx-auto max-w-4xl"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Testimonial Card */}
          <div className="relative overflow-hidden rounded-3xl bg-muted/50 p-8 md:p-12">
            {/* Quote Icon */}
            <div className="absolute right-8 top-8 text-primary/10">
              <Quote className="h-24 w-24" />
            </div>

            <div className="relative">
              {/* Stars */}
              <div className="mb-6 flex gap-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Content */}
              <blockquote className="mb-8 text-xl leading-relaxed text-foreground md:text-2xl">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="h-16 w-16 rounded-full object-cover ring-4 ring-background"
                />
                <div>
                  <div className="text-lg font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="mt-1 text-sm text-primary">
                    Project: {testimonials[currentIndex].project}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prevSlide}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all hover:border-primary hover:text-primary"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "w-3 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all hover:border-primary hover:text-primary"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
