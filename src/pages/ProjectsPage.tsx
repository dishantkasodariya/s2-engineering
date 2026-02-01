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
  Home,
  Factory,
  Hammer,
} from "lucide-react";

const categories = [
  { id: "all", label: "All Projects", icon: Building2 },
  { id: "residential", label: "Residential", icon: Home },
  { id: "commercial", label: "Commercial", icon: Building2 },
  { id: "industrial", label: "Industrial", icon: Factory },
  { id: "renovation", label: "Renovation", icon: Hammer },
];

const projects = [
  {
    id: 1,
    title: "Modern Office Complex",
    category: "commercial",
    location: "New York, NY",
    year: "2024",
    description:
      "A state-of-the-art 15-story office building featuring sustainable design, smart building systems, and premium amenities for modern businesses.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop",
    ],
    specs: ["150,000 sq ft", "15 Floors", "LEED Platinum"],
  },
  {
    id: 2,
    title: "Luxury Waterfront Villa",
    category: "residential",
    location: "Miami, FL",
    year: "2023",
    description:
      "An exquisite waterfront residence featuring panoramic ocean views, infinity pool, and smart home automation throughout.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop",
    ],
    specs: ["8,500 sq ft", "5 Bedrooms", "Smart Home"],
  },
  {
    id: 3,
    title: "Industrial Distribution Center",
    category: "industrial",
    location: "Chicago, IL",
    year: "2023",
    description:
      "A massive distribution facility with advanced logistics systems, climate control, and sustainable energy solutions.",
    image:
      "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop",
    ],
    specs: ["500,000 sq ft", "50 Loading Docks", "Solar Powered"],
  },
  {
    id: 4,
    title: "Historic Hotel Renovation",
    category: "renovation",
    location: "Boston, MA",
    year: "2024",
    description:
      "Complete restoration and modernization of a 1920s historic hotel, preserving original architecture while adding modern amenities.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
    ],
    specs: ["200 Rooms", "Historic Preservation", "5-Star Rating"],
  },
  {
    id: 5,
    title: "Retail Shopping Center",
    category: "commercial",
    location: "Los Angeles, CA",
    year: "2023",
    description:
      "A contemporary shopping destination featuring open-air design, diverse retail spaces, and entertainment venues.",
    image:
      "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
    ],
    specs: ["300,000 sq ft", "75 Retail Spaces", "Open Air Design"],
  },
  {
    id: 6,
    title: "Modern Family Residence",
    category: "residential",
    location: "Seattle, WA",
    year: "2024",
    description:
      "A contemporary family home featuring sustainable materials, energy-efficient systems, and seamless indoor-outdoor living.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800&auto=format&fit=crop",
    ],
    specs: ["4,200 sq ft", "4 Bedrooms", "Net Zero Energy"],
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
