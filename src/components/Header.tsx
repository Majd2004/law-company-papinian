import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import {
  Globe,
  Menu,
  X,
  Scale,
  Sparkles,
  Calendar,
  Layers
} from 'lucide-react';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenBooking: () => void;
  onOpenAiAssessor: () => void;
  onOpenSitePlan: () => void;
  onTriggerEmergency: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  setLang,
  onOpenBooking,
  onOpenAiAssessor,
  onOpenSitePlan,
  onTriggerEmergency
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === 'ar' ? 'en' : 'ar';
    setLang(newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  const isAr = lang === 'ar';

  const navLinks = [
    { href: '#about', labelAr: 'عن بابينيان', labelEn: 'About Us' },
    { href: '#practice-areas', labelAr: 'مجالات الممارسة', labelEn: 'Practices' },
    { href: '#legal-calculators', labelAr: 'الحاسبات القانونية', labelEn: 'Legal Calculators' },
    { href: '#smart-contracts', labelAr: 'العقود الذكية', labelEn: 'Smart Contracts' },
    { href: '#team', labelAr: 'فريق المستشارين', labelEn: 'Legal Elite' },
    { href: '#case-studies', labelAr: 'سجل النجاح', labelEn: 'Track Record' },
    { href: '#insights', labelAr: 'المركز المعرفي', labelEn: 'Insights' },
    { href: '#offices', labelAr: 'فروعنا', labelEn: 'Global Offices' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Hotline Bar */}
      <div className="bg-slate-900/90 backdrop-blur-md border-b border-amber-500/10 text-xs py-1.5 px-4 text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              {isAr ? 'الخط الساخن للطوارئ القضائية 24/7:' : '24/7 Urgent Legal Emergency:'}
            </span>
            <button 
              onClick={onTriggerEmergency}
              className="text-amber-200 hover:text-amber-400 underline cursor-pointer font-bold tracking-wider"
            >
              +966 800 PAPINIAN (727-4642)
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenSitePlan}
              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] hover:bg-amber-500/20 transition-all cursor-pointer"
            >
              <Layers className="w-3 h-3 text-amber-400" />
              <span>{isAr ? 'خطة ومعمارية الموقع' : 'Site Roadmap'}</span>
            </button>

            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1 text-slate-300 hover:text-amber-400 transition-colors cursor-pointer font-medium"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{isAr ? 'English' : 'العربية'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/90 backdrop-blur-xl border-b border-amber-500/20 py-3 shadow-2xl'
            : 'bg-gradient-to-b from-slate-950/90 via-slate-950/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-600 to-amber-800 p-0.5 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center border border-amber-400/30">
                <Scale className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-1.5 font-sans-en">
                PAPINIAN
                <span className="text-xs px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 font-bold border border-amber-500/30 uppercase tracking-widest font-cairo">
                  {isAr ? 'للمحاماة' : 'LAW'}
                </span>
              </span>
              <span className="text-[10px] text-amber-400/80 tracking-wider uppercase font-semibold">
                {isAr ? 'بابينيان للمحاماة والاستشارات' : 'Law Firm & Legal Consultants'}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors duration-200 relative group py-1"
              >
                {isAr ? link.labelAr : link.labelEn}
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></span>
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenAiAssessor}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-amber-500/50 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-amber-500/10"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>{isAr ? 'التقييم الذكي للقضية' : 'AI Case Assessor'}</span>
            </button>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>{isAr ? 'احجز استشارة' : 'Book Consultation'}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-slate-300 hover:text-amber-400 p-2 rounded-lg bg-slate-900 border border-slate-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 px-4 pt-2 pb-6 bg-slate-950/95 backdrop-blur-2xl border-b border-amber-500/20 shadow-2xl">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-900 hover:text-amber-400 transition-colors"
                >
                  {isAr ? link.labelAr : link.labelEn}
                </a>
              ))}

              <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAiAssessor();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 text-slate-200 border border-slate-700"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>{isAr ? 'المساعد الذكي لتقييم القضية' : 'AI Case Assessor'}</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-amber-500 text-slate-950"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{isAr ? 'احجز استشارة قانونية مشفرة' : 'Book Encrypted Consultation'}</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenSitePlan();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30"
                >
                  <Layers className="w-4 h-4" />
                  <span>{isAr ? 'عرض خطة ومعمارية الموقع' : 'View Site Architecture'}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
