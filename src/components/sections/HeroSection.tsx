import React from 'react';
import { companyInfo } from '../../data/company';
import heroImageDark from '../../assets/hero_image.png';
import heroImageLight from '../../assets/hero_image_light.png';
import { useTheme } from '../../theme/useTheme';

const HeroSection: React.FC = () => {
  const { mode } = useTheme();
  const heroImage = mode === 'light' ? heroImageLight : heroImageDark;

  return (
    <section className='relative min-h-screen bg-white dark:bg-[#0a0a0a] overflow-hidden'>
      {/* Subtle grid — desktop dark mode only */}
      <div
        className='hidden lg:dark:block absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-size-[80px_80px]'
      />
      {/* Ambient glow — desktop only */}
      <div
        className='hidden lg:block absolute top-0 right-0 w-150 h-125 pointer-events-none [background:radial-gradient(ellipse_at_80%_10%,rgba(255,92,0,0.12)_0%,transparent_65%)] dark:[background:radial-gradient(ellipse_at_80%_10%,rgba(255,92,0,0.18)_0%,transparent_65%)]'
      />
      {/* Dim glow — desktop only */}
      <div
        className='hidden lg:block absolute bottom-0 left-0 w-100 h-100 pointer-events-none [background:radial-gradient(ellipse_at_20%_90%,rgba(255,92,0,0.05)_0%,transparent_60%)] dark:[background:radial-gradient(ellipse_at_20%_90%,rgba(255,92,0,0.07)_0%,transparent_60%)]'
      />

      {/* ── Mobile / tablet layout (natural flow, up to lg) ── */}
      <div className='lg:hidden flex flex-col pt-[clamp(6rem,12vw,7.8rem)] pb-16'>
        {/* Title + subtitle + button */}
        <div className='flex flex-col items-start gap-8 md:gap-10 w-full px-[clamp(1.5rem,calc(-2.394rem+13.93vw),8.75rem)]'>
          <h1 className='w-full font-bold text-[clamp(2rem,6vw,3.5rem)] leading-tight tracking-[-0.02em] m-0'>
            <span className='block text-gray-900 dark:text-[#FDFDFD]'>Your Tech Partner for</span>
            <span className='block text-[#FF6C37]'>Smarter Growth</span>
          </h1>
          <p className='w-full font-semibold text-[clamp(1rem,2vw,1.25rem)] leading-7.5 text-gray-600 dark:text-[#FDFDFD] m-0'>
            {companyInfo.description}
          </p>
          <a
            href='#contact'
            className='flex flex-row justify-center items-center p-2 gap-1 w-full md:w-auto md:px-8 h-11 bg-[#FF623E] shadow-[inset_4px_4px_4px_rgba(255,255,255,0.25)] rounded-full font-semibold text-base text-white no-underline transition-all duration-200 hover:bg-[#FF623E]/90 hover:scale-105'
          >
            Let's Talk
          </a>
        </div>

        {/* Hero image */}
        <img
          src={heroImage}
          alt='Hero Image'
          className='w-full md:w-3/4 md:mx-auto aspect-square object-contain mt-10'
        />
      </div>

      {/* ── Desktop layout (absolute positioning) ── */}
      <div
        className='hidden lg:block absolute w-186.75 h-186.75 right-0 top-0'
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 30%), linear-gradient(to top, transparent 0%, black 25%)',
          maskComposite: 'intersect',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%), linear-gradient(to top, transparent 0%, black 25%)',
          WebkitMaskComposite: 'source-in',
        }}
      >
        <img src={heroImage} alt='Hero Image' className='w-full h-full object-contain' />
      </div>

      <div className='hidden lg:flex absolute z-10 flex-col items-start gap-10 w-163.25 left-35 top-57.5'>
        <h1 className='w-163.25 font-bold text-[56px] leading-17 tracking-[-0.02em] m-0'>
          <span className='block text-gray-900 dark:text-[#FDFDFD]'>Your Tech Partner for</span>
          <span className='block text-[#FF6C37]'>Smarter Growth</span>
        </h1>
        <p className='w-163.25 font-semibold text-xl leading-8.5 text-gray-600 dark:text-[#FDFDFD] m-0'>
          {companyInfo.description}
        </p>
        <a
          href='#contact'
          className='flex flex-row justify-center items-center gap-1 w-50 h-12 bg-[#FF623E] shadow-[inset_4px_4px_4px_rgba(255,255,255,0.25)] rounded-full cursor-pointer font-semibold text-base text-white no-underline transition-all duration-200 hover:bg-[#FF623E]/90 hover:scale-105'
        >
          Let's Talk
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
