'use client';

import React from "react"

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Loader2,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["(909) 373-8240"],
    color: "bg-blue-500/10 text-blue-600",
    href: "tel:+19093738240",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@s2engineering.com"],
    color: "bg-emerald-500/10 text-emerald-600",
    href: "mailto:info@s2engineering.com",
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["8608 Utica Avenue", "Rancho Cucamonga, CA 91730"],
    color: "bg-primary/10 text-primary",
    href: "https://maps.google.com/?q=8608+Utica+Avenue+Rancho+Cucamonga+CA+91730",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
    color: "bg-amber-500/10 text-amber-600",
  },
];

const services = [
  "Construction Management",
  "Inspection Services",
  "Materials Testing",
  "Office Engineering",
  "Structural Engineering",
  "Electrical Engineering",
  "Constructability Reviews",
  "Quality Assurance",
  "Project Scheduling",
  "Storm Water Compliance",
  "Labor Compliance",
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
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
            Contact Us
          </span>
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-background sm:text-5xl lg:text-6xl">
            Let's Build Something Great Together
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-background/70">
            Have a project in mind? Get in touch with our team for a free
            consultation and quote. We're here to help bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${info.color}`}
                >
                  <info.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {info.title}
                </h3>
                {info.details.map((detail, i) =>
                  info.href ? (
                    <a
                      key={i}
                      href={info.href}
                      className="block text-muted-foreground transition-colors hover:text-primary"
                    >
                      {detail}
                    </a>
                  ) : (
                    <p key={i} className="text-muted-foreground">
                      {detail}
                    </p>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-muted/50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <div className="rounded-2xl bg-background p-8 shadow-lg lg:p-10">
              <h2 className="mb-2 text-2xl font-bold text-foreground">
                Send Us a Message
              </h2>
              <p className="mb-8 text-muted-foreground">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10">
                    <CheckCircle className="h-8 w-8 text-emerald-500" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We'll be in touch soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full rounded-xl border bg-muted/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${
                          errors.name ? "border-destructive" : "border-border"
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-destructive">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full rounded-xl border bg-muted/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${
                          errors.email ? "border-destructive" : "border-border"
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-destructive">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-border bg-muted/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="service"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-border bg-muted/50 px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Estimated Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-border bg-muted/50 px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value="">Select budget range</option>
                      <option value="Under $50K">Under $50,000</option>
                      <option value="$50K - $100K">$50,000 - $100,000</option>
                      <option value="$100K - $500K">$100,000 - $500,000</option>
                      <option value="$500K - $1M">$500,000 - $1,000,000</option>
                      <option value="Over $1M">Over $1,000,000</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full resize-none rounded-xl border bg-muted/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${
                        errors.message ? "border-destructive" : "border-border"
                      }`}
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 text-base font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Info Side */}
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-3xl font-bold text-foreground">
                Get a Free Consultation
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                Whether you're planning a new construction project or need expert
                advice on renovations, our team is ready to help. We offer free
                consultations to understand your needs and provide tailored
                solutions.
              </p>

              <div className="mb-8 space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">
                    Free project assessment
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">
                    Transparent pricing & quotes
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">
                    Expert recommendations
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">
                    Response within 24 hours
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="mb-4 text-lg font-semibold text-foreground">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="overflow-hidden rounded-2xl bg-muted">
            <div className="flex aspect-[21/9] items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
              <div className="text-center">
                <MapPin className="mx-auto mb-4 h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">
                  Visit Our Office
                </h3>
                <p className="text-muted-foreground">
                  123 Construction Ave, Building City, BC 12345
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
