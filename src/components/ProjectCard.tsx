import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  id?: number;
  title: string;
  description: string;
  image: string;
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  link = "#",
}: ProjectCardProps) {
  return (
    <div className="bg-card block max-w-sm p-6 border border-border rounded-lg shadow-sm">
      <Link to={link}>
        <img
          className="rounded-lg w-full h-auto"
          src={image}
          alt={title}
        />
      </Link>
      <Link to={link}>
        <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-foreground">
          {title}
        </h5>
      </Link>
      <p className="mb-6 text-muted-foreground">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center text-foreground bg-muted box-border border border-border hover:bg-muted/80 hover:text-foreground focus:ring-4 focus:ring-muted/50 shadow-sm font-medium leading-5 rounded-lg text-sm px-4 py-2.5 focus:outline-none transition-all"
      >
        Read more
        <ArrowRight className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" />
      </Link>
    </div>
  );
}
