'use client';

import { useEffect, useState, useRef } from "react";
import {
  Building,
  Award,
  Calendar,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: 24,
    suffix: "+",
    label: "Years of Excellence",
    description: "Serving California since 2001",
  },
  {
    icon: Award,
    value: 2,
    suffix: "",
    label: "ASCE Awards",
    description: "2014 Project of the Year",
  },
  {
    icon: Building,
    value: 3,
    suffix: "",
    label: "Caltrans Districts",
    description: "Districts 7, 8, and 11",
  },
  {
    icon: CheckCircle,
    value: 100,
    suffix: "%",
    label: "DBE Certified",
    description: "Disadvantaged Business Enterprise",
  },
];

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return count;
}

function StatCard({
  stat,
  isVisible,
}: {
  stat: (typeof stats)[0];
  isVisible: boolean;
}) {
  const count = useCountUp(stat.value, 2000, isVisible);

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-background/10 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-background/20">
      {/* Icon */}
      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 text-primary transition-transform group-hover:scale-110">
        <stat.icon className="h-7 w-7" />
      </div>

      {/* Value */}
      <div className="mb-2 text-4xl font-bold text-background md:text-5xl">
        {count}
        {stat.suffix}
      </div>

      {/* Label */}
      <div className="mb-1 text-lg font-semibold text-background">
        {stat.label}
      </div>
      <div className="text-sm text-background/60">{stat.description}</div>

      {/* Decorative element */}
      <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-primary/10 transition-transform group-hover:scale-150" />
    </div>
  );
}

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-foreground py-20 lg:py-28"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-semibold text-primary">
            Our Achievements
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-background sm:text-4xl lg:text-5xl">
            Numbers That Speak Excellence
          </h2>
          <p className="text-lg leading-relaxed text-background/70">
            Our track record demonstrates our commitment to delivering
            exceptional construction services that exceed expectations.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} isVisible={isVisible} />
          ))}
        </div>

        {/* Bottom Features */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-background/80">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            <span>ISO Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <span>98% Project Success Rate</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            <span>Best Construction Company 2024</span>
          </div>
        </div>
      </div>
    </section>
  );
}
