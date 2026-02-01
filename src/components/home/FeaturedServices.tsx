import { Link } from "react-router-dom";
import {
  HardHat,
  FlaskConical,
  ArrowRight,
  Search,
  Building2,
  Zap,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: HardHat,
    title: "Construction Management",
    description:
      "Quality construction management for public works projects throughout California. Expert oversight ensuring projects stay on budget, on schedule, and exceed all expectations.",
    color: "bg-primary/10 text-primary",
    hoverColor: "group-hover:bg-primary group-hover:text-white",
  },
  {
    icon: Search,
    title: "Inspection Services",
    description:
      "Professional construction inspection services ensuring all projects comply with codes, regulations, and quality standards for SANBAG and Caltrans projects.",
    color: "bg-blue-500/10 text-blue-600",
    hoverColor: "group-hover:bg-blue-500 group-hover:text-white",
  },
  {
    icon: FlaskConical,
    title: "Materials Testing",
    description:
      "High quality materials sampling and testing services for Caltrans and public agencies. Graded 'superior' in responsiveness and performance.",
    color: "bg-emerald-500/10 text-emerald-600",
    hoverColor: "group-hover:bg-emerald-500 group-hover:text-white",
  },
  {
    icon: Building2,
    title: "Structural Engineering",
    description:
      "Structural engineering services ensuring safety, stability, and compliance for infrastructure projects throughout California.",
    color: "bg-purple-500/10 text-purple-600",
    hoverColor: "group-hover:bg-purple-500 group-hover:text-white",
  },
  {
    icon: Zap,
    title: "Electrical Engineering",
    description:
      "Professional electrical engineering services for transportation and infrastructure projects with comprehensive system design and planning.",
    color: "bg-amber-500/10 text-amber-600",
    hoverColor: "group-hover:bg-amber-500 group-hover:text-white",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Comprehensive quality assurance programs ensuring projects meet the highest standards of excellence and regulatory compliance.",
    color: "bg-indigo-500/10 text-indigo-600",
    hoverColor: "group-hover:bg-indigo-500 group-hover:text-white",
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
            to="/services"
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
