import { Link } from "react-router-dom";
import {
  Home,
  Building2,
  Hammer,
  Paintbrush,
  HardHat,
  Ruler,
  ArrowRight,
  CheckCircle,
  ClipboardList,
  Cog,
  Truck,
  Key,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    description:
      "Custom homes and residential developments built to your specifications with premium materials and exceptional craftsmanship.",
    features: [
      "Custom home design & build",
      "Multi-family developments",
      "Luxury estates",
      "Sustainable green building",
      "Smart home integration",
    ],
    color: "bg-blue-500",
  },
  {
    icon: Building2,
    title: "Commercial Construction",
    description:
      "Modern commercial spaces designed for functionality, aesthetics, and long-term value for your business success.",
    features: [
      "Office buildings",
      "Retail spaces",
      "Warehouses & industrial",
      "Healthcare facilities",
      "Educational institutions",
    ],
    color: "bg-primary",
  },
  {
    icon: Hammer,
    title: "Renovation & Remodeling",
    description:
      "Transform your existing space with expert renovation services that breathe new life into any property.",
    features: [
      "Kitchen & bathroom remodels",
      "Room additions",
      "Historic restoration",
      "Accessibility modifications",
      "Energy efficiency upgrades",
    ],
    color: "bg-emerald-500",
  },
  {
    icon: Paintbrush,
    title: "Interior Design",
    description:
      "Creative interior solutions that combine style with practicality for spaces that inspire and function beautifully.",
    features: [
      "Space planning",
      "Material selection",
      "Custom millwork",
      "Lighting design",
      "Furniture coordination",
    ],
    color: "bg-purple-500",
  },
  {
    icon: HardHat,
    title: "Project Management",
    description:
      "Expert oversight ensuring your project stays on budget, on schedule, and exceeds all expectations.",
    features: [
      "Budget management",
      "Schedule coordination",
      "Quality control",
      "Subcontractor management",
      "Progress reporting",
    ],
    color: "bg-amber-500",
  },
  {
    icon: Ruler,
    title: "Architectural Planning",
    description:
      "Comprehensive architectural services from concept to completion with attention to every detail.",
    features: [
      "Conceptual design",
      "3D visualization",
      "Construction documents",
      "Permit acquisition",
      "Site analysis",
    ],
    color: "bg-rose-500",
  },
];

const processSteps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Consultation",
    description:
      "We begin with a thorough consultation to understand your vision, requirements, and budget.",
  },
  {
    icon: Ruler,
    step: "02",
    title: "Planning & Design",
    description:
      "Our team creates detailed plans and designs, ensuring every aspect meets your expectations.",
  },
  {
    icon: Cog,
    step: "03",
    title: "Construction",
    description:
      "Expert craftsmen bring your project to life with quality materials and superior workmanship.",
  },
  {
    icon: Key,
    step: "04",
    title: "Delivery",
    description:
      "We complete final inspections and hand over your finished project, ready for use.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-foreground py-20 lg:py-28">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center lg:px-8">
          <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-semibold text-primary">
            Our Services
          </span>
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-background sm:text-5xl lg:text-6xl">
            Comprehensive Construction Solutions
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-background/70">
            From residential homes to commercial complexes, we offer a full
            spectrum of construction services tailored to meet your unique needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-xl"
              >
                <div className="p-8">
                  <div className="mb-6 flex items-start justify-between">
                    <div
                      className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${service.color} text-white`}
                    >
                      <service.icon className="h-7 w-7" />
                    </div>
                    <ArrowRight className="h-6 w-6 text-muted-foreground opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                  </div>

                  <h3 className="mb-3 text-2xl font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mb-6 text-muted-foreground">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-3 text-foreground"
                      >
                        <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-muted/50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              Our Process
            </span>
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How We Work
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Our streamlined process ensures your project is completed
              efficiently, on time, and within budget.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-1/2 top-14 hidden h-0.5 w-full bg-border lg:block" />
                )}

                <div className="relative rounded-2xl bg-background p-8 text-center shadow-lg">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-bold text-primary-foreground">
                    {step.step}
                  </div>

                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <step.icon className="h-7 w-7" />
                  </div>

                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                Service Areas
              </span>
              <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Serving Across the Nation
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                With offices in major cities and a network of skilled
                professionals, we provide construction services throughout the
                United States.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "New York",
                  "Los Angeles",
                  "Chicago",
                  "Houston",
                  "Miami",
                  "Seattle",
                  "Boston",
                  "Denver",
                ].map((city, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-lg bg-muted/50 p-4"
                  >
                    <Truck className="h-5 w-5 text-primary" />
                    <span className="font-medium text-foreground">{city}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-2xl bg-muted/50 p-8">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary">50+</div>
                  <div className="text-lg text-muted-foreground">
                    Cities Served Nationwide
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground">
            Ready to Start Your Project?
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/80">
            Contact us today for a free consultation and quote.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-background px-8 py-4 text-base font-semibold text-foreground transition-all hover:shadow-lg"
          >
            Get Free Quote
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
