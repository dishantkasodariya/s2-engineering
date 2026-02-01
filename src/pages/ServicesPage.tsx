import { Link } from "react-router-dom";
import {
  HardHat,
  ArrowRight,
  CheckCircle,
  ClipboardList,
  Ruler,
  Cog,
  Truck,
  Key,
  FlaskConical,
  Building2,
  FileText,
  Zap,
  Search,
  ShieldCheck,
  Calendar,
  Scale,
  Droplets,
  Users,
} from "lucide-react";

const services = [
  {
    icon: HardHat,
    title: "Construction Management",
    description:
      "Comprehensive construction management services for public works projects throughout California, including high-profile projects for SANBAG and Caltrans.",
    features: [
      "Preparation of cost estimates, budgets, and work timetables",
      "Contract interpretation and technical documentation",
      "Progress reporting and budget management",
      "Stakeholder collaboration and coordination",
    ],
    color: "bg-primary",
  },
  {
    icon: Search,
    title: "Inspection Services",
    description:
      "Professional construction inspection ensuring all projects comply with codes, regulations, and quality standards.",
    features: [
      "On-site construction inspection",
      "Quality control monitoring",
      "Code compliance verification",
      "Documentation and reporting",
    ],
    color: "bg-blue-500",
  },
  {
    icon: FileText,
    title: "Office Engineering",
    description:
      "Expert office engineering support providing technical analysis, documentation, and project coordination services.",
    features: [
      "Technical document review",
      "Project documentation management",
      "Engineering calculations and analysis",
      "Coordination with field operations",
    ],
    color: "bg-emerald-500",
  },
  {
    icon: Building2,
    title: "Structural Engineering",
    description:
      "Structural engineering services ensuring safety, stability, and compliance for infrastructure projects.",
    features: [
      "Structural design and analysis",
      "Load calculations and assessments",
      "Safety compliance verification",
      "Structural inspection services",
    ],
    color: "bg-purple-500",
  },
  {
    icon: Zap,
    title: "Electrical Engineering",
    description:
      "Professional electrical engineering services for transportation and infrastructure projects.",
    features: [
      "Electrical system design",
      "Power distribution planning",
      "Lighting and signal systems",
      "Electrical code compliance",
    ],
    color: "bg-amber-500",
  },
  {
    icon: ClipboardList,
    title: "Constructability Reviews",
    description:
      "Thorough constructability reviews identifying potential issues and optimizing construction methods before project execution.",
    features: [
      "Design review and analysis",
      "Construction method evaluation",
      "Cost optimization recommendations",
      "Risk identification and mitigation",
    ],
    color: "bg-rose-500",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Comprehensive quality assurance programs ensuring projects meet the highest standards of excellence.",
    features: [
      "QA/QC program development",
      "Quality standards implementation",
      "Testing and verification",
      "Continuous quality monitoring",
    ],
    color: "bg-indigo-500",
  },
  {
    icon: Calendar,
    title: "Project Scheduling",
    description:
      "Expert project scheduling services keeping projects on track and ensuring timely completion.",
    features: [
      "Master schedule development",
      "Critical path analysis",
      "Schedule monitoring and updates",
      "Delay analysis and recovery planning",
    ],
    color: "bg-cyan-500",
  },
  {
    icon: Scale,
    title: "Dispute Resolution",
    description:
      "Professional dispute resolution services helping resolve project conflicts efficiently and fairly.",
    features: [
      "Conflict analysis and assessment",
      "Negotiation support",
      "Documentation and evidence review",
      "Expert testimony services",
    ],
    color: "bg-orange-500",
  },
  {
    icon: Droplets,
    title: "Storm Water Compliance",
    description:
      "Storm water compliance services ensuring projects meet environmental regulations and best practices.",
    features: [
      "SWPPP development and implementation",
      "BMP inspection and monitoring",
      "Regulatory compliance verification",
      "Environmental documentation",
    ],
    color: "bg-teal-500",
  },
  {
    icon: Users,
    title: "Labor Compliance",
    description:
      "Labor compliance services ensuring adherence to prevailing wage laws and labor regulations.",
    features: [
      "Certified payroll review",
      "Prevailing wage compliance",
      "Labor law compliance monitoring",
      "Documentation and reporting",
    ],
    color: "bg-pink-500",
  },
  {
    icon: FlaskConical,
    title: "Materials Testing",
    description:
      "High quality materials sampling and testing services for Caltrans and public agencies. Graded 'superior' in responsiveness and performance.",
    features: [
      "Materials sampling and batch plant inspection",
      "Field and laboratory testing",
      "QC/QA project testing",
      "Mix design verifications",
    ],
    color: "bg-green-500",
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
