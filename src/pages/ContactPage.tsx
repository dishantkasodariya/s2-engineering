'use client';

import React from "react"

import { useState, useEffect } from "react";
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
  ChevronDown,
  Check,
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

const countryCodes = [
  { code: "+1", country: "US", format: "(###) ###-####", placeholder: "(123) 456-7890" },
  { code: "+44", country: "UK", format: "#### ### ####", placeholder: "1234 567 8901" },
  { code: "+91", country: "IN", format: "##### #####", placeholder: "12345 67890" },
  { code: "+61", country: "Aust", format: "### ### ###", placeholder: "412 345 678" },
  { code: "+81", country: "JP", format: "##-####-####", placeholder: "90-1234-5678" },
  { code: "+86", country: "CN", format: "### #### ####", placeholder: "138 0013 8000" },
  { code: "+33", country: "FR", format: "# ## ## ## ##", placeholder: "6 12 34 56 78" },
  { code: "+49", country: "DE", format: "### #######", placeholder: "151 12345678" },
  { code: "+52", country: "MX", format: "## #### ####", placeholder: "55 1234 5678" },
  { code: "+55", country: "BR", format: "## #####-####", placeholder: "11 91234-5678" },
  { code: "+971", country: "UAE", format: "## ### ####", placeholder: "50 123 4567" },
  { code: "+65", country: "SG", format: "#### ####", placeholder: "8123 4567" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+1",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [openCountryCode, setOpenCountryCode] = useState(false);
  const [openService, setOpenService] = useState(false);
  const [openBudget, setOpenBudget] = useState(false);

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
    
    // Format phone number based on country code
    if (name === "phone") {
      const selectedCountry = countryCodes.find(c => c.code === formData.countryCode);
      if (selectedCountry) {
        const formatted = formatPhoneNumber(value, selectedCountry.format);
        setFormData((prev) => ({ ...prev, [name]: formatted }));
      } else {
        setFormData((prev) => ({ ...prev, [name]: value }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Phone number formatting function
  const formatPhoneNumber = (value: string, format: string) => {
    // Remove all non-numeric characters
    const numbers = value.replace(/\D/g, '');
    
    // Apply format
    let formatted = '';
    let numberIndex = 0;
    
    for (let i = 0; i < format.length && numberIndex < numbers.length; i++) {
      if (format[i] === '#') {
        formatted += numbers[numberIndex];
        numberIndex++;
      } else {
        formatted += format[i];
      }
    }
    
    return formatted;
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setOpenCountryCode(false);
      setOpenService(false);
      setOpenBudget(false);
    };
    if (openCountryCode || openService || openBudget) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [openCountryCode, openService, openBudget]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-foreground pb-12 pt-28 sm:pb-16 sm:pt-32 lg:pb-28 lg:pt-40">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mb-3 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-xs font-semibold text-primary sm:mb-4 sm:text-sm">
            Contact Us
          </span>
          <h1 className="mb-4 text-balance text-3xl font-bold tracking-tight text-background sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
            Let's Build Something Great Together
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-background/70 sm:text-lg">
            Have a project in mind? Get in touch with our team for a free
            consultation and quote. We're here to help bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-card block p-6 border border-border rounded-lg shadow-sm"
              >
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${info.color}`}
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
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {detail}
                    </a>
                  ) : (
                    <p key={i} className="text-sm text-muted-foreground">
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
      <section className="bg-muted/50 py-12 sm:py-16 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
            {/* Form */}
            <div className="rounded-2xl bg-background p-6 shadow-lg sm:p-8 lg:p-10">
              <h2 className="mb-2 text-xl font-bold text-foreground sm:text-2xl">
                Send Us a Message
              </h2>
              <p className="mb-6 text-sm text-muted-foreground sm:mb-8 sm:text-base">
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
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
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
                        className={`w-full rounded-xl border bg-muted/50 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:px-4 sm:py-3 ${
                          errors.name ? "border-destructive" : "border-border"
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-destructive sm:text-sm">
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
                        className={`w-full rounded-xl border bg-muted/50 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:px-4 sm:py-3 ${
                          errors.email ? "border-destructive" : "border-border"
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-destructive sm:text-sm">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Phone Number
                    </label>
                    <div className="flex gap-2 sm:gap-3">
                      <div className="relative w-[110px] sm:w-[130px]">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenCountryCode(!openCountryCode);
                          }}
                          className="flex w-full items-center justify-between rounded-xl border border-border bg-muted/50 px-2 py-2.5 text-xs text-foreground hover:bg-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:px-3 sm:py-3 sm:text-sm"
                        >
                          <span>{formData.countryCode} {countryCodes.find(c => c.code === formData.countryCode)?.country}</span>
                          <ChevronDown className="h-3 w-3 opacity-50 sm:h-4 sm:w-4" />
                        </button>
                        {openCountryCode && (
                          <div className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-xl border border-border bg-background shadow-lg">
                            {countryCodes.map((item) => (
                              <button
                                key={item.code}
                                type="button"
                                onClick={() => {
                                  setFormData(prev => ({ ...prev, countryCode: item.code, phone: "" }));
                                  setOpenCountryCode(false);
                                }}
                                className={`flex w-full items-center justify-between px-2 py-2 text-xs hover:bg-muted sm:px-3 sm:text-sm ${
                                  formData.countryCode === item.code ? 'bg-muted' : ''
                                }`}
                              >
                                <span>{item.code} {item.country}</span>
                                {formData.countryCode === item.code && (
                                  <Check className="h-3 w-3 sm:h-4 sm:w-4" />
                                )}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="flex-1 rounded-xl border border-border bg-muted/50 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:px-4 sm:py-3"
                        placeholder={countryCodes.find(c => c.code === formData.countryCode)?.placeholder || "123-456-7890"}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Service Interested In
                    </label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenService(!openService);
                        }}
                        className="flex w-full items-center justify-between rounded-xl border border-border bg-muted/50 px-3 py-2.5 text-sm text-foreground hover:bg-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:px-4 sm:py-3"
                      >
                        <span className={formData.service ? "text-foreground" : "text-muted-foreground"}>
                          {formData.service || "Select a service"}
                        </span>
                        <ChevronDown className="h-3 w-3 opacity-50 sm:h-4 sm:w-4" />
                      </button>
                      {openService && (
                        <div className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-xl border border-border bg-background shadow-lg">
                          {services.map((service, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => {
                                setFormData(prev => ({ ...prev, service }));
                                setOpenService(false);
                              }}
                              className={`flex w-full items-center justify-between px-3 py-2 text-xs hover:bg-muted sm:px-4 sm:text-sm ${
                                formData.service === service ? 'bg-muted' : ''
                              }`}
                            >
                              <span>{service}</span>
                              {formData.service === service && (
                                <Check className="h-3 w-3 sm:h-4 sm:w-4" />
                              )}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Estimated Budget
                    </label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenBudget(!openBudget);
                        }}
                        className="flex w-full items-center justify-between rounded-xl border border-border bg-muted/50 px-3 py-2.5 text-sm text-foreground hover:bg-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:px-4 sm:py-3"
                      >
                        <span className={formData.budget ? "text-foreground" : "text-muted-foreground"}>
                          {formData.budget || "Select budget range"}
                        </span>
                        <ChevronDown className="h-3 w-3 opacity-50 sm:h-4 sm:w-4" />
                      </button>
                      {openBudget && (
                        <div className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-xl border border-border bg-background shadow-lg">
                          {[
                            "Under $50,000",
                            "$50,000 - $100,000",
                            "$100,000 - $500,000",
                            "$500,000 - $1,000,000",
                            "Over $1,000,000"
                          ].map((budgetOption) => (
                            <button
                              key={budgetOption}
                              type="button"
                              onClick={() => {
                                setFormData(prev => ({ ...prev, budget: budgetOption }));
                                setOpenBudget(false);
                              }}
                              className={`flex w-full items-center justify-between px-3 py-2 text-xs hover:bg-muted sm:px-4 sm:text-sm ${
                                formData.budget === budgetOption ? 'bg-muted' : ''
                              }`}
                            >
                              <span>{budgetOption}</span>
                              {formData.budget === budgetOption && (
                                <Check className="h-3 w-3 sm:h-4 sm:w-4" />
                              )}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
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
                      className={`w-full resize-none rounded-xl border bg-muted/50 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:px-4 sm:py-3 ${
                        errors.message ? "border-destructive" : "border-border"
                      }`}
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-destructive sm:text-sm">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25 disabled:opacity-70 sm:py-4 sm:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin sm:h-5 sm:w-5" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Info Side */}
            <div className="flex flex-col justify-center">
              <h2 className="mb-4 text-2xl font-bold text-foreground sm:mb-6 sm:text-3xl">
                Get a Free Consultation
              </h2>
              <p className="mb-6 text-base leading-relaxed text-muted-foreground sm:mb-8 sm:text-lg">
                Whether you're planning a new construction project or need expert
                advice on renovations, our team is ready to help. We offer free
                consultations to understand your needs and provide tailored
                solutions.
              </p>

              <div className="mb-6 space-y-3 sm:mb-8 sm:space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 flex-shrink-0 text-primary sm:h-5 sm:w-5" />
                  <span className="text-sm text-foreground sm:text-base">
                    Free project assessment
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 flex-shrink-0 text-primary sm:h-5 sm:w-5" />
                  <span className="text-sm text-foreground sm:text-base">
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
