import { Link } from "react-router-dom";
import { ArrowRight, Phone, Clock, CheckCircle } from "lucide-react";

const benefits = [
  "Free project consultation",
  "Transparent pricing",
  "Expert team assigned",
  "On-time completion guarantee",
];

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 lg:py-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <pattern
            id="grid"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
              Ready to Start Your Construction Project?
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-primary-foreground/80">
              Let's discuss your vision and turn it into reality. Our team of
              experts is ready to guide you through every step of the
              construction process.
            </p>

            {/* Benefits */}
            <ul className="mb-8 grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-primary-foreground/90"
                >
                  <CheckCircle className="h-5 w-5 shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-background px-8 py-4 text-base font-semibold text-foreground transition-all hover:shadow-lg"
              >
                Get Free Quote
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:+19093738240"
                className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-primary-foreground/30 bg-transparent px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:border-primary-foreground hover:bg-primary-foreground/10"
              >
                <Phone className="h-5 w-5" />
                (909) 373-8240
              </a>
            </div>
          </div>

          {/* Contact Card */}
          <div className="rounded-3xl bg-background p-8 shadow-2xl lg:p-10">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <Clock className="h-7 w-7 text-primary" />
              </div>
              <div>
                <div className="text-lg font-semibold text-foreground">
                  Quick Response
                </div>
                <div className="text-muted-foreground">
                  We respond within 24 hours
                </div>
              </div>
            </div>

            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-border bg-muted/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-border bg-muted/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-xl border border-border bg-muted/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <textarea
                  placeholder="Tell us about your project..."
                  rows={3}
                  className="w-full resize-none rounded-xl border border-border bg-muted/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-primary py-4 text-base font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Request Free Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
