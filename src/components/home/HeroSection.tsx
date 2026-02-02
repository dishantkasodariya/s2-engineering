import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center text-white text-sm min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800">
      {/* Radial Gradient Background */}
      <svg 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-auto pointer-events-none" 
        width="1440" 
        height="676" 
        viewBox="0 0 1440 676" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect x="-92" y="-948" width="1624" height="1624" rx="812" fill="url(#radial-gradient)"/>
        <defs>
          <radialGradient 
            id="radial-gradient" 
            cx="0" 
            cy="0" 
            r="1" 
            gradientUnits="userSpaceOnUse" 
            gradientTransform="rotate(90 428 292) scale(812)"
          >
            <stop offset=".63" stopColor="#372AAC" stopOpacity="0"/>
            <stop offset="1" stopColor="#372AAC"/>
          </radialGradient>
        </defs>
      </svg>

      {/* Content */}
      <div className="relative z-10 flex items-center mt-32 gap-2 border border-slate-600 text-gray-50 rounded-full px-4 py-2">
        <div className="size-2.5 bg-green-500 rounded-full" />
        <span>DBE Certified | Serving California Since 2001</span>
      </div>

      <h1 className="relative z-10 text-center text-5xl leading-tight md:text-6xl md:leading-tight mt-4 font-semibold max-w-2xl px-4">
        Building California's Infrastructure with Excellence
      </h1>

      <p className="relative z-10 text-center text-base max-w-lg mt-2 px-4">
        Quality construction management, inspection services, and materials testing for public works projects throughout California.
      </p>

      <div className="relative z-10 flex items-center gap-4 mt-8 px-4 flex-wrap justify-center">
        <Link
          to="/contact"
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white active:scale-95 rounded-lg px-7 h-11 transition"
        >
          Start Your Project
          <ArrowRight className="w-5 h-5" />
        </Link>
        <Link
          to="/projects"
          className="border border-slate-400 active:scale-95 hover:bg-white/10 transition rounded-lg px-8 h-11 flex items-center justify-center"
        >
          View Projects
        </Link>
      </div>

      <img 
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop"
        className="relative z-10 w-full rounded-[15px] max-w-4xl mt-16 px-4 mb-16"
        alt="Construction showcase"
      />
    </section>
  );
}
