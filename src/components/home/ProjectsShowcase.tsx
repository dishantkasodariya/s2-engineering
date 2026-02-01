import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";

const projects = [
  {
    title: "Modern Office Complex",
    category: "Commercial",
    location: "New York, NY",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    featured: true,
  },
  {
    title: "Luxury Residence",
    category: "Residential",
    location: "Los Angeles, CA",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
  },
  {
    title: "Industrial Warehouse",
    category: "Industrial",
    location: "Chicago, IL",
    image:
      "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?q=80&w=2071&auto=format&fit=crop",
  },
  {
    title: "Shopping Mall",
    category: "Commercial",
    location: "Miami, FL",
    image:
      "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=2126&auto=format&fit=crop",
  },
];

export default function ProjectsShowcase() {
  return (
    <section className="bg-muted/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              Featured Projects
            </span>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Our Recent Work
            </h2>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              Explore our portfolio of successful projects that showcase our
              expertise and commitment to excellence.
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary bg-transparent px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Projects Grid - Bento Style */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Link
              key={index}
              to="/projects"
              className={`group relative overflow-hidden rounded-2xl ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative ${
                  index === 0
                    ? "aspect-[4/3] md:aspect-auto md:h-full"
                    : "aspect-[4/3]"
                }`}
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="mb-2 w-fit rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    {project.category}
                  </span>
                  <h3
                    className={`mb-2 font-bold text-background ${
                      index === 0 ? "text-2xl md:text-3xl" : "text-xl"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-background/80">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </div>

                  {/* Hover Arrow */}
                  <div className="mt-4 flex items-center gap-2 text-primary opacity-0 transition-all group-hover:opacity-100">
                    <span className="text-sm font-semibold">View Project</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
