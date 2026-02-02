'use client';

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Calendar,
  ArrowRight,
  Building2,
  Factory,
} from "lucide-react";

const categories = [
  { id: "all", label: "All Projects", icon: Building2 },
  { id: "construction", label: "Construction Management", icon: Building2 },
  { id: "materials", label: "Materials Testing", icon: Factory },
];

const projects = [
  {
    id: 1,
    title: "I-215 Realignment and Widening Project",
    category: "construction",
    location: "San Bernardino, CA",
    year: "SANBAG",
    description:
      "Major freeway realignment and widening project providing construction management and inspection services for SANBAG's high-profile infrastructure improvement.",
    image:
      "https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=800&auto=format&fit=crop",
    ],
    specs: ["SANBAG Project", "Construction Management", "Inspection Services"],
  },
  {
    id: 2,
    title: "I-5 South Corridor CM Services",
    category: "construction",
    location: "Los Angeles and Ventura Counties",
    year: "Caltrans District 7",
    description:
      "Comprehensive construction management services for the I-5 Corridor Improvement Project, one of California's most significant transportation infrastructure initiatives.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
    ],
    specs: ["Caltrans District 7", "I-5 Corridor", "CM Services"],
  },
  {
    id: 3,
    title: "I-15 Cajon Pass Pavement Rehabilitation",
    category: "construction",
    location: "Post Mile 15-31, San Bernardino County",
    year: "Caltrans District 8",
    description:
      "$120 million Design-Build pilot project under Senate Bill 4, restoring structural integrity and ride quality on I-15 through Cajon Pass. S2 provided construction management and IQA services including CCO processing, claims review, CPM schedule analysis, and comprehensive inspection services.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
    ],
    specs: ["$120 Million Budget", "16-Mile Corridor", "Design-Build SB4"],
  },
  {
    id: 4,
    title: "Route 138 Widening and Realignment",
    category: "construction",
    location: "LA County Line to I-15, Wrightwood & Hesperia, CA",
    year: "Caltrans District 8",
    description:
      "$30 million, 15-mile highway widening project adding truck climbing lanes and realigning curves for improved sight distance. S2 provided construction inspection and materials testing services, managing 600,000 m³ excavation, 29 drainage systems, and 130,000 tonnes of AC placement.",
    image:
      "https://images.unsplash.com/photo-1572819541993-d9305ff41799?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1572819541993-d9305ff41799?q=80&w=800&auto=format&fit=crop",
    ],
    specs: ["$30 Million Budget", "15-Mile Corridor", "Inspection & Materials Testing"],
  },
  {
    id: 5,
    title: "I-10 Cherry Avenue Interchange Project",
    category: "construction",
    location: "Ontario, CA",
    year: "SANBAG",
    description:
      "Major interchange reconstruction project providing improved traffic flow and safety at the I-10 and Cherry Avenue intersection.",
    image:
      "https://images.unsplash.com/photo-1587844626431-2b8e452b3ff8?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1587844626431-2b8e452b3ff8?q=80&w=800&auto=format&fit=crop",
    ],
    specs: ["SANBAG Project", "Interchange", "I-10 Corridor"],
  },
  {
    id: 6,
    title: "I-10 Citrus Avenue Interchange Project",
    category: "construction",
    location: "Fontana, CA",
    year: "SANBAG",
    description:
      "Complete interchange reconstruction enhancing connectivity and traffic management in the rapidly growing Fontana area.",
    image:
      "https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=800&auto=format&fit=crop",
    ],
    specs: ["SANBAG Project", "Interchange", "I-10 Corridor"],
  },
  {
    id: 7,
    title: "North Milliken Avenue Grade Separation",
    category: "construction",
    location: "Ontario, CA",
    year: "SANBAG",
    description:
      "Grade separation project eliminating at-grade railroad crossings to improve safety and traffic flow.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
    ],
    specs: ["SANBAG Project", "Grade Separation", "Rail Crossing"],
  },
  {
    id: 8,
    title: "I-10 Truck Climbing Lane Addition",
    category: "construction",
    location: "Redlands, CA",
    year: "SANBAG",
    description:
      "Addition of truck climbing lanes on I-10 to improve traffic flow and safety in mountainous terrain.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
    ],
    specs: ["SANBAG Project", "I-10 Corridor", "Climbing Lanes"],
  },
  {
    id: 9,
    title: "Caltrans District 7 Materials Testing",
    category: "materials",
    location: "Los Angeles, CA",
    year: "Caltrans District 7",
    description:
      "On-call materials testing and sampling services for Caltrans District 7, providing comprehensive quality assurance for multiple highway projects.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
    ],
    specs: ["On-Call Services", "Materials Testing", "Above Requirement Rating"],
  },
  {
    id: 10,
    title: "Caltrans District 8 Materials Testing",
    category: "materials",
    location: "San Bernardino, CA",
    year: "Caltrans District 8",
    description:
      "On-call materials testing and sampling services for Caltrans District 8, graded 'Superior' in responsiveness and level of effort.",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop",
    ],
    specs: ["On-Call Services", "Materials Testing", "Superior Rating"],
  },
  {
    id: 11,
    title: "City of Glendale Materials Testing",
    category: "materials",
    location: "Glendale, CA",
    year: "City of Glendale",
    description:
      "On-call materials testing services for various city infrastructure projects, ensuring quality and compliance.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
    ],
    specs: ["City Project", "On-Call Services", "QA/QC Testing"],
  },
  {
    id: 12,
    title: "Bear Valley Road Improvement",
    category: "materials",
    location: "Victorville / Apple Valley, CA",
    year: "City Projects",
    description:
      "Materials testing for major road improvement and utility relocation project spanning two cities in the High Desert.",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop",
    ],
    specs: ["Road Improvement", "Utility Relocation", "Materials Testing"],
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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
            Our Portfolio
          </span>
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-background sm:text-5xl lg:text-6xl">
            Featured Projects
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-background/70">
            Explore our portfolio of successful construction projects that
            showcase our expertise, craftsmanship, and commitment to excellence.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                <category.icon className="h-4 w-4" />
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-card block max-w-sm p-6 border border-border rounded-lg shadow-sm"
              >
                <Link to={`/projects/${project.id}`}>
                  <img
                    className="rounded-lg w-full h-auto"
                    src={project.image}
                    alt={project.title}
                  />
                </Link>
                <Link to={`/projects/${project.id}`}>
                  <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-foreground">
                    {project.title}
                  </h5>
                </Link>
                <p className="mb-4 text-muted-foreground">{project.description}</p>
                <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {project.year}
                  </span>
                </div>
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center text-foreground bg-muted box-border border border-border hover:bg-muted/80 hover:text-foreground focus:ring-4 focus:ring-muted/50 shadow-sm font-medium leading-5 rounded-lg text-sm px-4 py-2.5 focus:outline-none transition-all"
                >
                  Read more
                  <ArrowRight className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground">
            Have a Project in Mind?
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/80">
            Let's discuss how we can bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-background px-8 py-4 text-base font-semibold text-foreground transition-all hover:shadow-lg"
          >
            Contact Us Today
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
