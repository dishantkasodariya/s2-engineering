import { Link } from "react-router-dom";
import { ArrowRight, Play, Shield, Clock, Award } from "lucide-react";

const features = [
  { icon: Shield, text: "DBE Certified" },
  { icon: Clock, text: "ASCE Award Winner" },
  { icon: Award, text: "Superior Rating" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-foreground">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-4 py-20 lg:px-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span className="text-sm font-medium text-primary">
              DBE Certified | Serving California Since 2001
            </span>
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-background sm:text-5xl md:text-6xl lg:text-7xl">
            Building California's{" "}
            <span className="relative inline-block text-primary">
              Infrastructure
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
              >
                <path
                  d="M2 10C50 4 150 4 198 10"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="text-primary/50"
                />
              </svg>
            </span>{" "}
            with Excellence
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-xl text-lg leading-relaxed text-background/70 md:text-xl">
            Quality construction management, inspection services, and materials testing
            for public works projects throughout California. Award-winning excellence
            since 2001.
          </p>

          {/* CTA Buttons */}
          <div className="mb-12 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
            >
              Start Your Project
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <button
              type="button"
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-background/20 bg-background/5 px-8 py-4 text-base font-semibold text-background backdrop-blur-sm transition-all hover:bg-background/10"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-background/20">
                <Play className="h-4 w-4 fill-current" />
              </span>
              Watch Our Story
            </button>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-background/80"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Cards (floating) */}
        <div className="absolute bottom-10 right-8 hidden flex-col gap-4 lg:flex">
          <div className="rounded-2xl border border-background/10 bg-background/10 p-4 backdrop-blur-md">
            <div className="text-3xl font-bold text-primary">500+</div>
            <div className="text-sm text-background/70">Projects Completed</div>
          </div>
          <div className="rounded-2xl border border-background/10 bg-background/10 p-4 backdrop-blur-md">
            <div className="text-3xl font-bold text-primary">28+</div>
            <div className="text-sm text-background/70">Years Experience</div>
          </div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          className="w-full text-background"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
