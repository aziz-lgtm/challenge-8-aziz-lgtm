import React from 'react';
import Icon from '../ui/Icon';
import companyLogo from '../../assets/company_logo.png';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Service', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

const TikTokIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
  </svg>
);

const socialLinks = [
  { key: 'facebook', icon: <Icon name="facebook" size={16} /> },
  { key: 'instagram', icon: <Icon name="instagram" size={16} /> },
  { key: 'linkedin', icon: <Icon name="linkedin" size={16} /> },
  { key: 'tiktok', icon: <TikTokIcon size={16} /> },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-[#0d0d0d] py-8">
      <div className="mx-[clamp(1rem,calc(-2.394rem+13.93vw),8.75rem)] h-auto bg-white dark:bg-[#0A0D12] border border-gray-200 dark:border-[#252B37] rounded-3xl flex flex-col items-start p-5 sm:p-5 gap-6 sm:gap-6 md:p-10 lg:p-10 flex-none order-0 self-stretch grow-0">

        {/* Logo — mobile/sm top, hidden on desktop */}
        <div className="flex lg:hidden items-center gap-3">
          <img src={companyLogo} alt="Company Logo" className="h-8 w-auto" />
          <span className="text-gray-900 dark:text-white font-bold text-lg">Your Logo</span>
        </div>

        {/* Title row */}
        <div className="flex items-center justify-between w-full">
          <h3 className="w-full sm:w-full md:w-full lg:w-70.25 h-19 sm:h-19 md:h-22 lg:h-22 font-bold text-[28px] sm:text-[28px] md:text-2xl lg:text-[36px] leading-9.5 sm:leading-9.5 md:leading-8 lg:leading-11 tracking-[-0.02em] text-gray-900 dark:text-[#FDFDFD] flex-none order-1 sm:order-1 md:order-0 grow-0">LET'S DISCUSS <br className="hidden lg:block"/> YOUR IDEAS</h3>
          {/* Logo — desktop only */}
          <div className="hidden lg:flex items-center gap-3">
            <img src={companyLogo} alt="Company Logo" className="h-8 w-auto" />
            <span className="text-gray-900 dark:text-white font-bold text-lg">Your Logo</span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-200 dark:border-[#252B37] mt-auto mb-14 lg:mb-14" />

        {/* Nav + Social — stacked on mobile, side-by-side on lg */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full gap-4 lg:gap-0">
          <nav className="flex flex-col lg:flex-row lg:flex-wrap gap-2 lg:gap-x-6 lg:gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="h-7 sm:h-7 md:h-7.5 lg:h-7.5 font-medium text-sm sm:text-sm md:text-base lg:text-base leading-7 sm:leading-7 md:leading-7.5 lg:leading-7.5 text-gray-700 dark:text-white/50 hover:text-gray-900 lg:text-[#0A0D12] dark:hover:text-white lg:hover:text-gray-600 flex-none order-0 sm:order-0 grow-0 sm:grow-0 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.key}
                href="#"
                className="w-9 h-9 rounded-full bg-gray-100 dark:bg-transparent border border-gray-300 dark:border-white/20 hover:bg-[#FF5C00] hover:border-[#FF5C00] flex items-center justify-center text-[#0A0D12] dark:text-[#FDFDFD] hover:text-white transition-all duration-200"
                aria-label={social.key}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
