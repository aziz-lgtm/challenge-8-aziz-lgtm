import React, { useState } from 'react';
import Icon from '../ui/Icon';
import { companyInfo, companyStats, processSteps } from '../../data/company';
import adobe from '../../assets/adobe.png';
import airbnb from '../../assets/airbnb.png';
import paypal from '../../assets/paypal.png';
import netflix from '../../assets/netflix.png';
import postman from '../../assets/postman.png';
import zoom from '../../assets/zoom.png';
import dropbox from '../../assets/dropbox.png';
import upwork from '../../assets/upwork.png';
import databrick from '../../assets/databrick.png';

const logos = [
  { src: adobe, alt: 'Adobe' },
  { src: upwork, alt: 'Upwork' },
  { src: zoom, alt: 'Zoom' },
  { src: postman, alt: 'Postman' },
  { src: databrick, alt: 'Databrick', height: 'h-16' },
  { src: airbnb, alt: 'Airbnb' },
  { src: dropbox, alt: 'Dropbox' },
  { src: paypal, alt: 'PayPal' },
  { src: netflix, alt: 'Netflix' },
];

const AboutSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <section id='about' className='bg-white dark:bg-[#0a0a0a] pb-[clamp(2.5rem,10vw,8rem)] px-[clamp(1rem,calc(-2.394rem+13.93vw),8.75rem)]'>
      {/* Title — outside the mask so it never gets the fade effect */}
      <span className='block font-bold text-base sm:text-lg md:text-2xl leading-7.5 sm:leading-8 md:leading-9 text-center tracking-[-0.02em] text-gray-900 dark:text-[#FDFDFD] mb-6'>
        Trusted by Global Innovators & Leading Brands
      </span>

      {/* Brand strip — full-width bleed, mask applies ONLY to logos */}
      <div className='-mx-[clamp(1rem,calc(-2.394rem+13.93vw),8.75rem)] relative h-32 overflow-hidden mb-24 mask-[linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)] sm:mask-[linear-gradient(to_right,transparent_0%,transparent_15%,black_25%,black_75%,transparent_85%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)] sm:[-webkit-mask-image:linear-gradient(to_right,transparent_0%,transparent_15%,black_25%,black_75%,transparent_85%,transparent_100%)]'>
        {/* Logos container — doubled for seamless loop */}
        <div
          aria-hidden='true'
          className='flex flex-row items-center py-10 absolute w-max h-32 left-0 top-0 animate-marquee'
        >
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={`${logo.alt}-${i}`}
              src={logo.src}
              alt={logo.alt}
              className={`${logo.height ?? 'h-12'} w-auto max-w-34 mr-12 mix-blend-luminosity shrink-0 opacity-[0.65] grayscale object-contain transition-all duration-200 ease-in-out hover:opacity-100 hover:grayscale-0 hover:scale-105`}
            />
          ))}
        </div>
      </div>

      {/* Header + stats */}
        <div className='flex flex-col items-center text-center gap-12 mb-24'>
          <div className='w-full max-w-5xl'>
            <h2 className='w-full mx-auto font-bold text-[clamp(1.75rem,calc(0.975rem+3.175vw),2.5rem)] leading-tight text-center tracking-[-0.02em] text-gray-900 dark:text-[#FDFDFD] flex-none order-0 self-stretch grow-0 m-0'>
              End-to-End IT Solutions That Drive Results
            </h2>
            <p className='w-full mx-auto font-medium text-[clamp(0.875rem,1.8vw,1.125rem)] leading-7 sm:leading-8 text-center text-[#717680] dark:text-[#A4A7AE] flex-none order-1 self-stretch grow-0 m-0'>
              {companyInfo.longDescription}
            </p>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full'>
            {companyStats.map((stat) => (
              <div
                key={stat.label}
                className='flex flex-col justify-center items-center p-4 gap-1.5 aspect-square bg-gray-50 dark:bg-[#0A0D12] border border-gray-200 dark:border-[#181D27] rounded-full transition-all duration-300 hover:scale-105 hover:border-[#FF623E]/50 hover:shadow-lg'
              >
                <p className='w-full font-bold text-[clamp(1.5rem,3vw,3rem)] text-center tracking-[-0.02em] text-[#FF623E] m-0'>
                  {stat.value}
                </p>
                <p className='w-full font-semibold text-[clamp(0.75rem,1.2vw,1.25rem)] text-center text-[#0A0D12] dark:text-[#FDFDFD] m-0'>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Process */}
        <div className='w-full'>
          <div className='flex flex-col items-center text-center gap-4 mb-12'>
            <h2 className='w-full mx-auto font-bold text-[clamp(1.75rem,calc(0.975rem+3.175vw),3rem)] leading-tight tracking-[-0.02em] text-gray-900 dark:text-[#FDFDFD] flex-none order-0 self-stretch grow-0'>
              Our Process
            </h2>
            <p className='w-full mx-auto font-medium text-[clamp(0.875rem,1.8vw,1.125rem)] leading-7 sm:leading-8 text-center text-[#A4A7AE] flex-none order-1 self-stretch grow-0'>
              Clear steps. Smart execution. Results you can count on.
            </p>
          </div>

          <div className='relative'>
            {/* Vertical line — center on desktop, left on mobile */}
            <div className='absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-white/10 md:-translate-x-1/2' />

            {/* Mobile: [circle | card], Desktop: zigzag [card | circle | card] */}
            <div className='relative flex flex-col gap-8 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-y-8'>
              {processSteps.map((step, index) => {
                const isLeft = index % 2 === 0;
                const isOpen = openItems.has(index);

                const card = (
                  <div className='w-full rounded-2xl bg-gray-50 dark:bg-[#0A0D12] p-4 cursor-pointer border border-gray-200 dark:border-[#181D27] transition-all duration-200 hover:border-gray-300 dark:hover:border-white/10 hover:bg-gray-100 dark:hover:bg-[#1a1a1a]' onClick={() => toggle(index)}>
                    <div className='flex items-center justify-between gap-[clamp(0.5rem,1.5vw,2.5rem)]'>
                      <h3 className='flex-1 font-bold text-[clamp(1rem,1.5vw,1.25rem)] leading-tight tracking-[-0.02em] text-gray-900 dark:text-[#FDFDFD] order-0 self-stretch m-0'>
                        {step.title}
                      </h3>
                      <span className={`shrink-0 transition-transform duration-200 ${isOpen ? 'text-[#FF5C00] rotate-180' : 'text-[#717680] dark:text-[#FDFDFD]'}`}>
                        <Icon name='chevron-down' size={20} />
                      </span>
                    </div>
                    {isOpen && (
                      <p className='w-full font-medium text-[clamp(0.875rem,1.2vw,1rem)] leading-7 text-[#A4A7AE] flex-none order-1 self-stretch grow-0 m-0 mt-2'>
                        {step.detail}
                      </p>
                    )}
                  </div>
                );

                return (
                  <React.Fragment key={step.number}>
                    {/* Mobile layout */}
                    <div className='flex lg:hidden items-start gap-4 pl-0'>
                      <div className='relative z-10 flex items-center justify-center shrink-0 mt-1'>
                        <div className='flex flex-col justify-center items-center p-2 gap-2 w-12 h-12 bg-[#FF623E] rounded-full flex-none text-sm font-bold text-white'>
                          {step.number}
                        </div>
                      </div>
                      <div className='flex-1'>{card}</div>
                    </div>

                    {/* Desktop zigzag layout */}
                    <div className='hidden lg:flex items-center justify-end pr-[clamp(1rem,2vw,2rem)]'>
                      {isLeft ? card : null}
                    </div>
                    <div className='hidden lg:flex relative z-10 items-center justify-center py-2'>
                      <div className='flex flex-col justify-center items-center p-2 gap-2 w-12 h-12 bg-[#FF623E] rounded-full flex-none order-1 grow-0 text-sm font-bold text-white'>
                        {step.number}
                      </div>
                    </div>
                    <div className='hidden lg:flex items-center justify-start pl-[clamp(1rem,2vw,2rem)]'>
                      {!isLeft ? card : null}
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
    </section>
  );
};

export default AboutSection;
