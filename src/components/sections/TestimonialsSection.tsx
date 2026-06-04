import React, { useState, useEffect, useRef } from 'react';
import { testimonials } from '../../data/testimonials';
import quotationImg from '../../assets/quotation.png';

const GAP = 28;
const SWIPE_THRESHOLD = 50;

// Mirrors the navbar clamp: clamp(1.5rem, calc(-2.394rem + 13.93vw), 8.75rem)
// Uses clientWidth (excludes scrollbar) so the card aligns with the navbar's visual edges.
const getNavMargin = (w: number) => Math.min(Math.max(24, 0.1393 * w - 38.304), 140);

const getClientW = () => document.documentElement.clientWidth;

const calcCardW = (w: number) =>
  w < 640 ? w - 2 * getNavMargin(w) : Math.min(w - 80, 594);

const TestimonialsSection: React.FC = () => {
  const [current, setCurrent] = useState(1);
  const [vpWidth, setVpWidth] = useState(() => getClientW());
  const cardW = calcCardW(vpWidth);
  const dragStartX = useRef<number | null>(null);
  const [dragDelta, setDragDelta] = useState(0);
  const [grabbing, setGrabbing] = useState(false);

  useEffect(() => {
    const update = () => setVpWidth(getClientW());
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const STEP = cardW + GAP;

  const startDrag = (x: number) => {
    dragStartX.current = x;
    setGrabbing(true);
    setDragDelta(0);
  };

  const moveDrag = (x: number) => {
    if (!grabbing || dragStartX.current === null) return;
    setDragDelta(x - dragStartX.current);
  };

  const endDrag = () => {
    if (!grabbing) return;
    setGrabbing(false);
    if (dragDelta < -SWIPE_THRESHOLD && current < testimonials.length - 1) {
      setCurrent(c => c + 1);
    } else if (dragDelta > SWIPE_THRESHOLD && current > 0) {
      setCurrent(c => c - 1);
    }
    dragStartX.current = null;
    setDragDelta(0);
  };

  return (
    <section id="testimonials" className="bg-gray-50 dark:bg-[#0d0d0d] py-[clamp(3.5rem,8vw,6rem)]">

      {/* Header */}
      <div className="mx-[clamp(1rem,calc(-2.394rem+13.93vw),8.75rem)] text-center mb-16">
        <h2 className="w-full font-bold text-[clamp(1.75rem,calc(0.975rem+3.175vw),2.5rem)] leading-tight text-center tracking-[-0.02em] text-gray-900 dark:text-[#FDFDFD] mb-4">
          What Partners Say About Working With Us
        </h2>
        <p className="font-medium text-[clamp(0.875rem,1.8vw,1.125rem)] leading-7 md:leading-8 text-center text-[#A4A7AE]">
          Trusted voices. Real experiences. Proven results.
        </p>
      </div>

      {/* pt-14/pb-10 give breathing room for quote marks above and avatars below */}
      <div className="relative overflow-hidden pt-14 pb-24">

        {/* Left fade overlay — hidden on mobile */}
        <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-[clamp(3rem,12vw,10rem)] bg-linear-to-r from-gray-50 dark:from-[#0d0d0d] to-transparent z-10 pointer-events-none" />
        {/* Right fade overlay — hidden on mobile */}
        <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-[clamp(3rem,12vw,10rem)] bg-linear-to-l from-gray-50 dark:from-[#0d0d0d] to-transparent z-10 pointer-events-none" />

        <div
          className={`flex items-start ${dragDelta === 0 ? 'transition-transform duration-500 ease-out' : ''}`}
          style={{
            transform: `translateX(${vpWidth / 2 - (current * STEP + cardW / 2) + dragDelta}px)`,
            cursor: grabbing ? 'grabbing' : 'grab',
          }}
          onMouseDown={e => startDrag(e.clientX)}
          onMouseMove={e => moveDrag(e.clientX)}
          onMouseUp={endDrag}
          onMouseLeave={endDrag}
          onTouchStart={e => startDrag(e.touches[0].clientX)}
          onTouchMove={e => { e.preventDefault(); moveDrag(e.touches[0].clientX); }}
          onTouchEnd={endDrag}
        >
          {testimonials.map((t, i) => {
            const isActive = i === current;
            return (
              <div
                key={t.id}
                onClick={() => !isActive && setCurrent(i)}
                className={`relative shrink-0 transition-all duration-500 ${
                  isActive ? '' : 'opacity-40 cursor-pointer hover:opacity-60'
                }`}
                style={{ width: `${cardW}px`, marginRight: `${GAP}px` }}
              >
                {/* Quotation mark image — floats top-left above the card */}
                <div className="absolute -top-7 left-8 z-10">
                  <img src={quotationImg} alt="quote" className="w-14 h-auto" />
                </div>

                {/* Card */}
                <div className={`rounded-2xl p-px transition-all duration-500 ${isActive ? 'bg-linear-to-br from-[#FF623E] via-[#C026D3] to-black shadow-[0_0_24px_rgba(255,98,62,0.25)]' : 'bg-white/5 hover:bg-white/10 hover:shadow-md'}`}>
                <div
                  className={`flex flex-col items-center px-6 pt-6 pb-12 gap-6 isolate min-h-73 dark:bg-[#181D27] rounded-[15px] flex-none order-1 grow-0 z-1 transition-colors duration-500 ${
                    isActive ? 'bg-white' : 'bg-gray-100 hover:bg-gray-50 dark:hover:bg-[#1e2333]'
                  }`}
                >
                  {/* Stars */}
                  <div className="flex gap-2">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <svg key={j} width="24" height="24" viewBox="0 0 24 24" fill="#F59E0B" className="flex-none order-4 grow-0">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="w-full font-semibold text-[clamp(0.875rem,1.5vw,1.125rem)] leading-7 md:leading-8 text-center text-gray-800 dark:text-[#FDFDFD] flex-none order-1 self-stretch grow-0 z-1">
                    "{t.quote}"
                  </p>

                  {/* Name + Role grouped */}
                  <div className="flex flex-col items-center self-stretch order-2 gap-0.5">
                    <p className="font-semibold text-base md:text-lg leading-6 md:leading-8 text-center text-gray-900 dark:text-[#FDFDFD]">{t.name}</p>
                    <p className="font-semibold text-xs md:text-base leading-5 md:leading-7 text-center text-[#FF623E]">
                      {t.role} at {t.company}
                    </p>
                  </div>
                </div>
                </div>

                {/* Avatar — breaks below card */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 flex-none order-2 grow-0 z-2">
                  {t.avatarImg ? (
                    <img
                      src={t.avatarImg}
                      alt={t.name}
                      className="w-18.75 h-18.75 rounded-full object-cover"
                    />
                  ) : (
                    <div
                      className="w-18.75 h-18.75 rounded-full flex items-center justify-center font-black text-lg"
                      style={{ background: `${t.accentColor}20`, color: t.accentColor }}
                    >
                      {t.avatar}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center gap-3 mt-10">
        {testimonials.map((t, i) => (
          <button
            key={t.id}
            onClick={() => setCurrent(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`rounded-full transition-all duration-300 cursor-pointer ${
              i === current
                ? 'w-3 h-3 bg-[#FF6C37] flex-none order-0 grow-0'
                : 'w-3 h-3 bg-gray-300 dark:bg-white/25 hover:bg-gray-400 dark:hover:bg-white/50'
            }`}
          />
        ))}
      </div>

    </section>
  );
};

export default TestimonialsSection;
