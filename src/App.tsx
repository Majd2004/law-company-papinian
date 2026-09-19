import { useState } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutPapinian } from './components/AboutPapinian';
import { PracticeAreas } from './components/PracticeAreas';
import { LegalCalculators } from './components/LegalCalculators';
import { SmartContractsHub } from './components/SmartContractsHub';
import { TeamSection } from './components/TeamSection';
import { CaseStudies } from './components/CaseStudies';
import { LegalInsights } from './components/LegalInsights';
import { FAQSection } from './components/FAQSection';
import { OfficesAndContact } from './components/OfficesAndContact';
import { Footer } from './components/Footer';
import { PlanOverviewModal } from './components/PlanOverviewModal';
import { ConsultationBooking } from './components/ConsultationBooking';
import { AICaseAssessorModal } from './components/AICaseAssessorModal';
import { EmergencyModal } from './components/EmergencyModal';

import {
  Calendar,
  Sparkles,
  Layers
} from 'lucide-react';

export function App() {
  const [lang, setLang] = useState<Language>('ar');

  // Modals state
  const [isSitePlanOpen, setIsSitePlanOpen] = useState<boolean>(false);
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [isAiAssessorOpen, setIsAiAssessorOpen] = useState<boolean>(false);
  const [isEmergencyOpen, setIsEmergencyOpen] = useState<boolean>(false);

  // Booking pre-fills
  const [bookingAreaId, setBookingAreaId] = useState<string | undefined>();
  const [bookingMemberId, setBookingMemberId] = useState<string | undefined>();
  const [bookingSummary, setBookingSummary] = useState<string>('');

  const isAr = lang === 'ar';

  const handleOpenBookingWithArea = (areaId: string) => {
    setBookingAreaId(areaId);
    setBookingMemberId(undefined);
    setBookingSummary('');
    setIsBookingOpen(true);
  };

  const handleOpenBookingWithMember = (memberId: string) => {
    setBookingMemberId(memberId);
    setBookingAreaId(undefined);
    setBookingSummary('');
    setIsBookingOpen(true);
  };

  const handleOpenBookingAfterCalc = (summaryText: string) => {
    setBookingSummary(summaryText);
    setBookingAreaId(undefined);
    setBookingMemberId(undefined);
    setIsBookingOpen(true);
  };

  return (
    <div className={`min-h-screen bg-slate-950 text-slate-100 ${isAr ? 'font-cairo' : 'font-sans-en'}`}>
      {/* Global Header Navigation */}
      <Header
        lang={lang}
        setLang={setLang}
        onOpenBooking={() => {
          setBookingAreaId(undefined);
          setBookingMemberId(undefined);
          setBookingSummary('');
          setIsBookingOpen(true);
        }}
        onOpenAiAssessor={() => setIsAiAssessorOpen(true)}
        onOpenSitePlan={() => setIsSitePlanOpen(true)}
        onTriggerEmergency={() => setIsEmergencyOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        lang={lang}
        onOpenBooking={() => {
          setBookingAreaId(undefined);
          setBookingMemberId(undefined);
          setBookingSummary('');
          setIsBookingOpen(true);
        }}
        onOpenAiAssessor={() => setIsAiAssessorOpen(true)}
        onOpenSitePlan={() => setIsSitePlanOpen(true)}
      />

      {/* About Papinian (Heritage + 4 Pillars + Comparison Matrix) */}
      <AboutPapinian lang={lang} />

      {/* Practice Areas */}
      <PracticeAreas
        lang={lang}
        onOpenBookingWithArea={handleOpenBookingWithArea}
      />

      {/* Interactive Legal Calculators */}
      <LegalCalculators
        lang={lang}
        onBookAfterCalc={handleOpenBookingAfterCalc}
      />

      {/* Smart Contract Studio */}
      <SmartContractsHub lang={lang} />

      {/* Senior Partners & Team */}
      <TeamSection
        lang={lang}
        onOpenBookingWithMember={handleOpenBookingWithMember}
      />

      {/* Case Studies & Track Record */}
      <CaseStudies lang={lang} />

      {/* Legal Knowledge Hub & Articles */}
      <LegalInsights lang={lang} />

      {/* FAQ Accordion */}
      <FAQSection
        lang={lang}
        onOpenBooking={() => {
          setBookingAreaId(undefined);
          setBookingMemberId(undefined);
          setBookingSummary('');
          setIsBookingOpen(true);
        }}
      />

      {/* Offices & Contact Form */}
      <OfficesAndContact
        lang={lang}
        onTriggerEmergency={() => setIsEmergencyOpen(true)}
      />

      {/* Footer */}
      <Footer
        lang={lang}
        onOpenSitePlan={() => setIsSitePlanOpen(true)}
        onTriggerEmergency={() => setIsEmergencyOpen(true)}
      />

      {/* Floating Action Bar (Bottom Right) */}
      <div className="fixed bottom-6 right-6 rtl:right-auto rtl:left-6 z-40 flex flex-col gap-3">
        {/* Floating Blueprint button */}
        <button
          onClick={() => setIsSitePlanOpen(true)}
          title={isAr ? 'خطة ومعمارية الموقع' : 'Site Blueprint'}
          className="w-12 h-12 rounded-full bg-slate-900 border border-amber-500/40 text-amber-400 hover:bg-slate-800 flex items-center justify-center shadow-xl transition-transform hover:scale-110 cursor-pointer"
        >
          <Layers className="w-5 h-5" />
        </button>

        {/* Floating AI Assessor button */}
        <button
          onClick={() => setIsAiAssessorOpen(true)}
          title={isAr ? 'المساعد الذكي لتقييم القضايا' : 'AI Case Assessor'}
          className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/50 text-amber-400 hover:bg-amber-500 hover:text-slate-950 flex items-center justify-center shadow-xl transition-transform hover:scale-110 cursor-pointer"
        >
          <Sparkles className="w-5 h-5 animate-pulse" />
        </button>

        {/* Floating Booking Button */}
        <button
          onClick={() => {
            setBookingAreaId(undefined);
            setBookingMemberId(undefined);
            setBookingSummary('');
            setIsBookingOpen(true);
          }}
          className="px-4 py-3 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-2xl shadow-amber-500/30 hover:scale-105 transition-transform cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span className="hidden sm:inline">{isAr ? 'احجز استشارة' : 'Book Consultation'}</span>
        </button>
      </div>

      {/* Modals */}
      <PlanOverviewModal
        isOpen={isSitePlanOpen}
        onClose={() => setIsSitePlanOpen(false)}
        lang={lang}
      />

      <ConsultationBooking
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        lang={lang}
        preselectedAreaId={bookingAreaId}
        preselectedMemberId={bookingMemberId}
        prefilledSummary={bookingSummary}
      />

      <AICaseAssessorModal
        isOpen={isAiAssessorOpen}
        onClose={() => setIsAiAssessorOpen(false)}
        lang={lang}
        onConvertToBooking={(summaryText) => {
          setBookingSummary(summaryText);
          setIsBookingOpen(true);
        }}
      />

      <EmergencyModal
        isOpen={isEmergencyOpen}
        onClose={() => setIsEmergencyOpen(false)}
        lang={lang}
      />
    </div>
  );
}

export default App;
