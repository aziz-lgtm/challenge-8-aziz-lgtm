import React, { useState, useEffect, useRef } from 'react';
import { testimonials } from '../../data/testimonials';
import quotationImg from '../../assets/quotation.png';

const GAP = 28;
const SWIPE_THRESHOLD = 50;

const TestimonialsSection: React.FC = () => {
  const [current, setCurrent] = useState(1);
  const [cardW, setCardW] = useState(() => Math.min(window.innerWidth - 48, 594));
  const dragStartX = useRef<number | null>(null);
  const [dragDelta, setDragDelta] = useState(0);
  const [grabbing, setGrabbing] = useState(false);

  useEffect(() => {
    const update = () => setCardW(Math.min(window.innerWidth - 48, 594));
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
    <section id="testimonials" className="bg-gray-50 dark:bg-[#0d0d0d] py-24">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-16">
        <h2 className="font-bold text-[28px] sm:w-98.25 sm:mx-auto sm:h-19 sm:text-[28px] sm:leading-9.5 md:w-full md:mx-0 md:h-auto md:text-[40px] md:leading-14 lg:text-[40px] lg:leading-14 leading-tight text-center sm:text-center tracking-[-0.02em] text-gray-900 dark:text-[#FDFDFD] flex-none sm:flex-none order-0 sm:order-0 self-stretch sm:self-stretch grow-0 sm:grow-0 mb-4">
          What Partners Say About Working With Us
        </h2>
        <p className="font-medium text-lg sm:w-98.25 sm:mx-auto sm:h-7 sm:text-sm sm:leading-7 md:w-full md:mx-0 md:h-auto md:text-lg md:leading-8 lg:text-lg lg:leading-8 leading-8 text-center text-[#A4A7AE] flex-none order-1 sm:order-1 self-stretch sm:self-stretch grow-0 sm:grow-0">
          Trusted voices. Real experiences. Proven results.
        </p>
      </div>

      {/* pt-14/pb-10 give breathing room for quote marks above and avatars below */}
      <div className="relative overflow-x-hidden pt-14 pb-10">
        <div
          className={`flex ${dragDelta === 0 ? 'transition-transform duration-500 ease-out' : ''}`}
          style={{
            transform: `translateX(calc(50vw - ${current * STEP + cardW / 2}px + ${dragDelta}px))`,
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
                  <p className="h-24 font-semibold text-sm sm:text-md md:text-xl lg:text-xl leading-8 sm:w-82.25 sm:mx-auto sm:h-28 sm:text-sm sm:leading-7 md:w-full md:mx-0 md:h-24 md:text-lg md:leading-8 lg:text-lg lg:leading-8 leading-8 text-center text-gray-800 dark:text-[#FDFDFD] flex-none order-1 sm:order-1 self-stretch sm:self-stretch grow-0 sm:grow-0 z-1">
                    "{t.quote}"
                  </p>

                  {/* Name + Role grouped */}
                  <div className="flex flex-col items-center self-stretch order-2">
                    <p className="h-8 font-semibold text-lg leading-8 text-center text-gray-900 dark:text-[#FDFDFD] flex-none order-0 self-stretch grow-0">{t.name}</p>
                    <p className="h-8 font-semibold text-lg leading-8 text-center text-[#FF623E] flex-none order-1 self-stretch grow-0">
                      {t.role} at {t.company}
                    </p>
                  </div>
                </div>
                </div>

                {/* Avatar — breaks below card */}
                <div className="absolute left-1/2 -translate-x-1/2 top-65.5 flex-none order-2 grow-0 z-2">
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
        {testimonials.map((_, i) => (
          <button
            key={i}
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
