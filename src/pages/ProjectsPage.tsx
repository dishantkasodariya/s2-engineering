'use client';

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Calendar,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
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
    location: "San Bernardino, CA",
    year: "Caltrans District 8",
    description:
      "Large-scale pavement rehabilitation project on one of Southern California's most critical highway corridors through the Cajon Pass.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
    ],
    specs: ["Caltrans District 8", "Pavement Rehab", "I-15 Corridor"],
  },
  {
    id: 4,
    title: "Route 138 Widening and Realignment",
    category: "construction",
    location: "Wrightwood & Hesperia, CA",
    year: "Caltrans District 8",
    description:
      "Highway widening and realignment project improving safety and capacity on Route 138 through the High Desert region.",
    image:
      "https://images.unsplash.com/photo-1572819541993-d9305ff41799?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1572819541993-d9305ff41799?q=80&w=800&auto=format&fit=crop",
    ],
    specs: ["Caltrans District 8", "Route 138", "Widening Project"],
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
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const openModal = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(
        (prev) => (prev + 1) % selectedProject.images.length
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(
        (prev) =>
          (prev - 1 + selectedProject.images.length) %
          selectedProject.images.length
      );
    }
  };

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
                className="group cursor-pointer overflow-hidden rounded-2xl bg-card shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
                onClick={() => openModal(project)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      View Details
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold capitalize text-primary">
                    {project.category}
                  </span>
                  <h3 className="mb-2 text-xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {project.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-background shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg transition-colors hover:bg-primary hover:text-primary-foreground"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Image Gallery */}
            <div className="relative aspect-video">
              <img
                src={selectedProject.images[currentImageIndex] || "/placeholder.svg"}
                alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                className="h-full w-full object-cover"
              />
              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg transition-colors hover:bg-primary hover:text-primary-foreground"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg transition-colors hover:bg-primary hover:text-primary-foreground"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                    {selectedProject.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`h-2 rounded-full transition-all ${
                          index === currentImageIndex
                            ? "w-6 bg-primary"
                            : "w-2 bg-background/60"
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold capitalize text-primary">
                  {selectedProject.category}
                </span>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {selectedProject.location}
                </span>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {selectedProject.year}
                </span>
              </div>

              <h2 className="mb-4 text-3xl font-bold text-foreground">
                {selectedProject.title}
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                {selectedProject.description}
              </p>

              <div className="mb-6 flex flex-wrap gap-3">
                {selectedProject.specs.map((spec, index) => (
                  <span
                    key={index}
                    className="rounded-lg bg-muted px-4 py-2 text-sm font-medium text-foreground"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-all hover:shadow-lg"
                onClick={closeModal}
              >
                Start a Similar Project
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      )}

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
