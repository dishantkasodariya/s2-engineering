import { Link } from "react-router-dom";
import {
  Home,
  Building2,
  Hammer,
  Paintbrush,
  HardHat,
  Ruler,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    description:
      "Custom homes and residential developments built to your specifications with premium materials and craftsmanship.",
    color: "bg-blue-500/10 text-blue-600",
    hoverColor: "group-hover:bg-blue-500 group-hover:text-white",
  },
  {
    icon: Building2,
    title: "Commercial Buildings",
    description:
      "Modern commercial spaces designed for functionality, aesthetics, and long-term value for your business.",
    color: "bg-primary/10 text-primary",
    hoverColor: "group-hover:bg-primary group-hover:text-white",
  },
  {
    icon: Hammer,
    title: "Renovation & Remodeling",
    description:
      "Transform your existing space with expert renovation services that breathe new life into any property.",
    color: "bg-emerald-500/10 text-emerald-600",
    hoverColor: "group-hover:bg-emerald-500 group-hover:text-white",
  },
  {
    icon: Paintbrush,
    title: "Interior Design",
    description:
      "Creative interior solutions that combine style with practicality for spaces that inspire.",
    color: "bg-purple-500/10 text-purple-600",
    hoverColor: "group-hover:bg-purple-500 group-hover:text-white",
  },
  {
    icon: HardHat,
    title: "Project Management",
    description:
      "Expert oversight ensuring your project stays on budget, on schedule, and exceeds expectations.",
    color: "bg-amber-500/10 text-amber-600",
    hoverColor: "group-hover:bg-amber-500 group-hover:text-white",
  },
  {
    icon: Ruler,
    title: "Architectural Planning",
    description:
      "Comprehensive architectural services from concept to completion with attention to every detail.",
    color: "bg-rose-500/10 text-rose-600",
    hoverColor: "group-hover:bg-rose-500 group-hover:text-white",
  },
];

export default function FeaturedServices() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Our Services
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Comprehensive Construction Solutions
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            From concept to completion, we offer a full range of construction
            services tailored to meet your unique needs and exceed your
            expectations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Icon */}
              <div
                className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300 ${service.color} ${service.hoverColor}`}
              >
                <service.icon className="h-7 w-7" />
              </div>

              {/* Content */}
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mb-6 text-muted-foreground">{service.description}</p>

              {/* Link */}
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary opacity-0 transition-all group-hover:opacity-100"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>

              {/* Decorative corner */}
              <div className="absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-primary/5 transition-transform group-hover:scale-150" />
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary bg-transparent px-8 py-3 text-base font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            View All Services
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
