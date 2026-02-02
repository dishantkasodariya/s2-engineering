const testimonials = [
  {
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
    name: 'Robert Thompson',
    handle: '@rthompson',
    date: 'March 15, 2025',
    content: 'S2 Engineering transformed our vision into reality. Their attention to detail and commitment to excellence exceeded our expectations.'
  },
  {
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    name: 'Sarah Mitchell',
    handle: '@sarahmitchell',
    date: 'April 22, 2025',
    content: 'Building our dream home was a seamless experience. They listened to every detail and delivered a home that perfectly reflects our family\'s lifestyle.'
  },
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    name: 'Michael Chen',
    handle: '@mchen',
    date: 'May 8, 2025',
    content: 'Professional, punctual, and precise. S2 Engineering delivered our retail space on time and within budget. Their project management skills are outstanding.'
  },
  {
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
    name: 'Emily Rodriguez',
    handle: '@emilyrod',
    date: 'June 12, 2025',
    content: 'We\'ve worked with many construction firms, but S2 Engineering stands out for their quality and reliability. They\'ve become our go-to partner.'
  },
  {
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    name: 'David Martinez',
    handle: '@davidm',
    date: 'July 3, 2025',
    content: 'Exceptional craftsmanship and customer service. The team went above and beyond to ensure every aspect of our commercial project was perfect.'
  },
  {
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    name: 'Jennifer Lee',
    handle: '@jenniferlee',
    date: 'August 18, 2025',
    content: 'Their innovative approach to sustainable construction helped us achieve our green building goals while staying within budget. Highly recommend!'
  },
];

const TestimonialCard = ({ card }: { card: typeof testimonials[0] }) => (
  <div className="p-4 rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0 bg-white">
    <div className="flex gap-2">
      <img className="size-11 rounded-full" src={card.image} alt={card.name} />
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <p className="font-medium">{card.name}</p>
          <svg className="mt-0.5" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" fill="#2196F3" />
          </svg>
        </div>
        <span className="text-xs text-slate-500">{card.handle}</span>
      </div>
    </div>
    <p className="text-sm py-4 text-gray-800">{card.content}</p>
    <div className="flex items-center justify-between text-slate-500 text-xs">
      <div className="flex items-center gap-1">
        <span>Posted on</span>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500">
          <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="m.027 0 4.247 5.516L0 10h.962l3.742-3.926L7.727 10H11L6.514 4.174 10.492 0H9.53L6.084 3.616 3.3 0zM1.44.688h1.504l6.64 8.624H8.082z" fill="currentColor" />
          </svg>
        </a>
      </div>
      <p>{card.date}</p>
    </div>
  </div>
);

export default function TestimonialsSection() {
  return (
    <>
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .marquee-inner {
          animation: marqueeScroll 25s linear infinite;
        }

        .marquee-reverse {
          animation-direction: reverse;
        }
      `}</style>

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Section Header */}
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              Testimonials
            </span>
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              What Our Clients Say
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Don't just take our word for it. Hear from the clients who have
              experienced our commitment to excellence firsthand.
            </p>
          </div>

          {/* First Marquee Row */}
          <div className="marquee-row w-full mx-auto max-w-7xl overflow-hidden relative">
            <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent"></div>
            <div className="marquee-inner flex transform-gpu min-w-[200%] pt-10 pb-5">
              {[...testimonials, ...testimonials].map((card, index) => (
                <TestimonialCard key={index} card={card} />
              ))}
            </div>
            <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent"></div>
          </div>

          {/* Second Marquee Row (Reverse) */}
          <div className="marquee-row w-full mx-auto max-w-7xl overflow-hidden relative">
            <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent"></div>
            <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-10 pb-5">
              {[...testimonials, ...testimonials].map((card, index) => (
                <TestimonialCard key={index} card={card} />
              ))}
            </div>
            <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent"></div>
          </div>
        </div>
      </section>
    </>
  );
}
