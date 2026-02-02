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

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card block max-w-sm p-6 border border-border rounded-lg shadow-sm"
            >
              <Link to="/projects">
                <img
                  className="rounded-lg w-full h-auto"
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                />
              </Link>
              <Link to="/projects">
                <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-foreground">
                  {project.title}
                </h5>
              </Link>
              <p className="mb-4 text-muted-foreground">
                {project.category} project located in {project.location}
              </p>
              <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {project.location}
              </div>
              <Link
                to="/projects"
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
  );
}
