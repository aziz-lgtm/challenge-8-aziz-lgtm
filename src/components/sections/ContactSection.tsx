import React, { useState } from 'react';
import Input from '../ui/Input';
import { faqItems, contactServiceOptions } from '../../data/company';
import type { ContactFormData } from '../../types';
import consultationImg from '../../assets/consultation.png';
import successModalImg from '../../assets/popups/succes_modal.png';
import errorModalImg from '../../assets/popups/error_modal.png';

const ContactSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [form, setForm] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    services: [],
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? null : i);

  const toggleService = (service: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus(Math.random() > 0.4 ? 'success' : 'error');
  };

  return (
    <>
      {/* FAQ */}
      <section id="faq" className="bg-white dark:bg-[#0a0a0a] py-[clamp(3.5rem,8vw,6rem)]">
        <div className="mx-[clamp(1rem,calc(-2.394rem+13.93vw),8.75rem)]">

          {/* Header row */}
          <div className="flex flex-col md:flex-row lg:flex-row md:items-start lg:items-start md:justify-between lg:justify-between mb-6 gap-2 md:gap-0">
            <h2 className="font-bold text-[clamp(1.75rem,calc(0.975rem+3.175vw),2.5rem)] leading-tight tracking-[-0.02em] text-gray-900 dark:text-[#FDFDFD]">
              Need Help? Start<br />Here.
            </h2>
            <p className="font-medium text-[clamp(0.875rem,1.5vw,1.125rem)] leading-7 md:text-right text-[#A4A7AE] md:w-61.25">
              Everything you need to know — all in one place.
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 dark:border-white/10 mb-10" />

          {/* Two columns */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_329px] lg:grid-cols-[1fr_329px] gap-10 items-start">

            {/* Left — FAQ accordion */}
            <div>
              {faqItems.map((faq, i) => (
                <div key={faq.question} className="border-b border-gray-200 dark:border-white/10 transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-white/3 rounded-lg px-2 -mx-2">
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full flex items-center justify-between py-5 text-left group cursor-pointer"
                  >
                    <span className="text-[clamp(1.125rem,2.5vw,1.5rem)] leading-tight font-medium text-gray-900 dark:text-white">
                      {faq.question}
                    </span>
                    <span className="text-[#717680] dark:text-white/50 text-xl ml-4 shrink-0">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === i && (
                    <p className="font-medium text-md sm:text-lg md:text-lg lg:text-lg leading-8.5 text-[#A4A7AE] flex-none order-1 self-stretch grow-0 pb-5">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Right — Orange CTA card */}
            <div className="bg-[#CC4E32] rounded-3xl p-6 flex flex-col justify-center items-start gap-6 w-full md:w-82.25 h-auto md:h-[453.38px] shrink-0 order-1">
              <div>
                <h3 className="w-full font-bold text-2xl sm:text-[28px] sm:leading-9.5 md:text-2xl md:leading-8 lg:text-4xl lg:leading-11 leading-8 tracking-[-0.02em] text-white flex-none order-0 self-stretch grow-0">
                  Let's talk it through
                </h3>
                <p className="w-full font-semibold text-sm sm:text-sm sm:leading-7 md:text-lg md:leading-8 lg:text-lg lg:leading-8 leading-7 text-white flex-none order-1 self-stretch grow-0">
                  book a free consultation with our team.
                </p>
              </div>
              <img
                src={consultationImg}
                alt="Team consultation"
                className="rounded-xl w-full object-cover"
              />
              <a href="#contact" className="flex flex-row justify-center items-center p-2 gap-1 w-full h-12 bg-[#000000] dark:bg-white shadow-[inset_4px_4px_4px_rgba(255,255,255,0.25)] rounded-full flex-none order-2 self-stretch grow-0 text-white dark:text-[#1a1a1a] font-bold text-sm hover:bg-black/90 dark:hover:bg-white/90 hover:scale-105 transition-all duration-200 no-underline">
                Free Consultation
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Contact form */}
      <section id="contact" className="bg-gray-50 dark:bg-[#0d0d0d] py-[clamp(4rem,10vw,8rem)] border-t border-gray-200 dark:border-white/4">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="w-full font-bold text-[28px] sm:text-[34px] md:text-[40px] lg:text-[40px] leading-tight md:leading-14 lg:leading-14 text-center tracking-[-0.02em] text-gray-900 dark:text-[#FDFDFD] flex-none order-0 self-stretch grow-0 mb-4">
              Ready to Start? Let's Talk.
            </h2>
            <p className="w-full mx-auto font-medium text-sm leading-7 md:max-w-180 md:text-lg md:leading-8 lg:text-lg lg:leading-8 text-center text-[#A4A7AE] flex-none order-1 self-stretch grow-0">
              Tell us what you need, and we'll get back to you soon.
            </p>
          </div>

          {/* Success modal */}
          {status === 'success' && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 dark:bg-black/60 backdrop-blur-sm">
              <div className="bg-white dark:bg-[#1a1a2e] border border-gray-200 dark:border-white/10 rounded-2xl p-10 flex flex-col items-center text-center max-w-sm w-full mx-4 shadow-2xl">
                <img src={successModalImg} alt="Success" className="w-32 h-32 object-contain mb-6" />
                <h3 className="text-gray-900 dark:text-white font-bold text-2xl mb-3">Message Received!</h3>
                <p className="text-gray-500 dark:text-white/50 text-sm mb-8">Thanks for reaching out — we'll get back to you as soon as possible.</p>
                <a href="#" onClick={() => setStatus('idle')} className="w-full py-3 bg-[#FF623E] hover:bg-[#FF623E]/90 hover:scale-105 text-white font-bold text-sm rounded-full text-center transition-all duration-200">
                  Back to Home
                </a>
              </div>
            </div>
          )}

          {/* Error modal */}
          {status === 'error' && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 dark:bg-black/60 backdrop-blur-sm">
              <div className="bg-white dark:bg-[#1a1a2e] border border-gray-200 dark:border-white/10 rounded-2xl p-10 flex flex-col items-center text-center max-w-sm w-full mx-4 shadow-2xl">
                <img src={errorModalImg} alt="Error" className="w-32 h-32 object-contain mb-6" />
                <h3 className="text-gray-900 dark:text-white font-bold text-2xl mb-3">Oops! Something went wrong.</h3>
                <p className="text-gray-500 dark:text-white/50 text-sm mb-8">We couldn't send your message. Please try again or check your connection.</p>
                <button onClick={() => setStatus('idle')} className="w-full py-3 bg-[#FF623E] hover:bg-[#FF623E]/90 hover:scale-105 text-white font-bold text-sm rounded-full transition-all duration-200 cursor-pointer">
                  Try Again
                </button>
              </div>
            </div>
          )}

          {status === 'idle' && (
            <div>
              <div className="flex flex-col gap-4 mb-4">
                <Input
                  label="Name"
                  name="name"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <Input
                label="Message"
                name="message"
                placeholder="Enter your message"
                value={form.message}
                onChange={handleChange}
                multiline
                rows={4}
                className="mb-5 [&_textarea]:h-33.5 sm:[&_textarea]:h-33.5 md:[&_textarea]:h-auto"
                required
              />

              {/* Service checkboxes */}
              <div className="mb-8">
                <p className="text-xs font-semibold tracking-widest text-[#0A0D12] dark:text-[#FDFDFD] uppercase mb-3">
                  Services
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {contactServiceOptions.map((service) => {
                    const selected = form.services.includes(service);
                    return (
                      <label
                        key={service}
                        className="flex items-center gap-3 cursor-pointer"
                        onClick={() => toggleService(service)}
                      >
                        <span className={[
                          'w-5 h-5 rounded flex items-center justify-center border shrink-0 transition-all duration-150 hover:scale-110',
                          selected
                            ? 'bg-[#FF5C00] border-[#FF5C00]'
                            : 'bg-transparent border-gray-300 dark:border-white/20',
                        ].join(' ')}>
                          {selected && (
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </span>
                        <span className="text-sm font-medium text-gray-700 dark:text-white/70">
                          {service}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="flex flex-row justify-center items-center p-2 gap-1 w-full h-12 bg-[#FF623E] shadow-[inset_4px_4px_4px_rgba(255,255,255,0.25)] rounded-full flex-none order-1 self-stretch grow-0 text-white font-semibold text-base hover:bg-[#FF623E]/90 hover:scale-[1.02] transition-all duration-200 cursor-pointer"
              >
                Send
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ContactSection;
