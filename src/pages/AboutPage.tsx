import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  Heart,
  Shield,
  Users,
  Award,
  ArrowRight,
  Linkedin,
  Twitter,
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We conduct business with honesty and transparency, building trust with every project.",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "We strive for the highest quality in everything we do, never compromising on standards.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work closely with clients, architects, and partners to achieve shared success.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "We are passionate about construction and take pride in bringing visions to life.",
  },
];

const team = [
  {
    name: "John Anderson",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Sarah Williams",
    role: "Chief Operations Officer",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Michael Chen",
    role: "Head of Architecture",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Emily Rodriguez",
    role: "Project Director",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
    linkedin: "#",
    twitter: "#",
  },
];

const milestones = [
  { year: "2001", event: "S2 Engineering founded as DBE certified firm" },
  { year: "2005", event: "Established Caltrans District 8 partnership" },
  { year: "2010", event: "Expanded to Caltrans District 7 services" },
  { year: "2014", event: "ASCE LA awards: Construction & Bridge Project of the Year" },
  { year: "2020", event: "Achieved 'Superior' rating from Caltrans" },
  { year: "2026", event: "24+ years of engineering excellence" },
];

export default function AboutPage() {
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
            About Us
          </span>
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-background sm:text-5xl lg:text-6xl">
            Building Excellence Since 2001
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-background/70">
            S2 Engineering, a DBE certified firm, has been transforming California's infrastructure
            with quality construction management, inspection services, and materials testing.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                Our Story
              </span>
              <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Award-Winning Excellence in Engineering
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                Established in 2001, S2 Engineering is a DBE certified firm that provides quality construction
                management, inspection services, and materials testing for public works projects
                throughout California. Providing clients with professional and first-rate
                services with great experience and dexterity is the cornerstone of our business.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                Recently, S2 Engineering was bestowed two prestigious awards from ASCE Los Angeles -
                "Construction Project of the Year" and "Bridge Project of the Year" for 2014,
                further cementing our commendable reputation in the industry. By having a thorough
                understanding of each project and the needs of the stakeholders, our professionals
                take the proactive action necessary to advance each project to its successful completion.
              </p>
              <div className="flex flex-wrap gap-8">
                <div>
                  <div className="text-4xl font-bold text-primary">24+</div>
                  <div className="text-muted-foreground">Years of Excellence</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">2</div>
                  <div className="text-muted-foreground">ASCE Awards 2014</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">DBE</div>
                  <div className="text-muted-foreground">Certified Firm</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"
                alt="Construction site"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-primary p-6 text-primary-foreground shadow-lg">
                <div className="text-3xl font-bold">2001</div>
                <div className="text-sm">Established</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted/50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-background p-8 shadow-lg lg:p-10">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">
                Our Mission
              </h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                To provide professional and first-rate construction management, inspection services,
                and materials testing for public works projects throughout California. We ensure every
                project complies with all codes and regulatory requirements while maintaining the highest
                standards of quality, safety, and client satisfaction.
              </p>
            </div>
            <div className="rounded-2xl bg-background p-8 shadow-lg lg:p-10">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <Eye className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">
                Our Vision
              </h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                To be California's most trusted partner for public works projects, recognized for our
                expertise in construction management and materials testing. We aspire to advance every
                project to successful completion through thorough understanding of stakeholder needs,
                proactive problem-solving, and unwavering commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              Our Values
            </span>
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Principles That Guide Us
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Our core values are the foundation of everything we do, shaping our
              culture and driving our commitment to excellence.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card block p-6 border border-border rounded-lg shadow-sm"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-foreground py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-semibold text-primary">
              Our Journey
            </span>
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-background sm:text-4xl">
              Milestones & Achievements
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-primary/30 md:block hidden" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <div className="inline-block rounded-2xl bg-background/10 p-6 backdrop-blur-sm">
                      <div className="text-2xl font-bold text-primary">
                        {milestone.year}
                      </div>
                      <div className="text-background/80">{milestone.event}</div>
                    </div>
                  </div>
                  <div className="relative z-10 hidden h-4 w-4 rounded-full bg-primary ring-4 ring-background md:block" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              Our Team
            </span>
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Meet the Experts
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Our leadership team brings decades of combined experience and a
              shared passion for construction excellence.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl bg-card shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-4/5 overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-foreground/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3 opacity-0 transition-all group-hover:opacity-100">
                    <a
                      href={member.linkedin}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={member.twitter}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                      aria-label={`${member.name} Twitter`}
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-muted/50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              Certifications & Memberships
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              "ISO 9001 Certified",
              "OSHA Compliant",
              "LEED Accredited",
              "National Association of Home Builders",
              "Associated General Contractors",
            ].map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-2 rounded-full bg-background px-6 py-3 shadow-sm"
              >
                <Award className="h-5 w-5 text-primary" />
                <span className="font-medium text-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground">
            Ready to Work With Us?
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/80">
            Let's discuss your project and see how we can bring your vision to
            life.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-background px-8 py-4 text-base font-semibold text-foreground transition-all hover:shadow-lg"
          >
            Get in Touch
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
