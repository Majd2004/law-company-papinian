import React, { useState } from 'react';
import { Language, CaseStudy } from '../types';
import { CASE_STUDIES } from '../data/mockData';
import {
  Trophy,
  CheckCircle2,
  Star,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Building,
  ShieldCheck
} from 'lucide-react';

interface CaseStudiesProps {
  lang: Language;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ lang }) => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy>(CASE_STUDIES[0]);
  const [testimonialIndex, setTestimonialIndex] = useState<number>(0);

  const isAr = lang === 'ar';

  const testimonials = [
    {
      quoteAr: 'إدارة شركة بابينيان لملف التحكيم الدولي الخاص بنا كانت نموذجاً مباهياً للدقة الشديدة والتخطيط الاستراتيجي الصارم. استرددنا كافة مستحقاتنا وتكاليف القضية.',
      quoteEn: 'Papinian Law Firm’s management of our multi-million international arbitration was a masterclass in forensic strategy. Every claim was fully vindicated.',
      authorAr: 'م. خالد السعدون',
      authorEn: 'Eng. Khalid Al-Saadoun',
      titleAr: 'رئيس مجلس إدارة مجموعة الأعمال اللوجستية',
      titleEn: 'Chairman, Global Logistics & Infrastructure Group'
    },
    {
      quoteAr: 'في صفقة الاستحواذ البالغة 180 مليون دولار، قدم الفريق حلولاً مبتكرة لتجاوز التحديات التنظيمية في 4 دول بوقت قياسي دون أدنى تعقيد.',
      quoteEn: 'During our $180M cross-border acquisition, Papinian navigated complex multi-jurisdictional clearances flawlessly ahead of schedule.',
      authorAr: 'فهد آل منصور',
      authorEn: 'Fahad Al-Mansoor',
      titleAr: 'الرئيس التنفيذي - صندوق الأفق للتقنية المالية',
      titleEn: 'CEO, Horizon FinTech Venture Fund'
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20">
            {isAr ? 'سجل النجاح والقضايا الكبرى' : 'Proven Track Record & Case Studies'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {isAr ? (
              <>
                نتائج يتحدث عنها <span className="gold-gradient-text">الواقع والسجل القضائي</span>
              </>
            ) : (
              <>
                Benchmark Victories & <span className="gold-gradient-text">Multi-Million Dollar Settlements</span>
              </>
            )}
          </h2>
          <p className="text-sm text-slate-300">
            {isAr
              ? 'تراصف خبراتنا لحماية المصالح المالية والاستراتيجية لكبار العملاء في أوقات الحسم والنزاعات المعقدة.'
              : 'Empowering enterprise leaders through rigorous defense, strategic negotiations, and arbitral victories.'}
          </p>
        </div>

        {/* Case Studies Interactive Showcase */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          {/* Case Picker Sidebar */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">
              {isAr ? 'اختر القضية أو الصفقة:' : 'Select Milestone Case:'}
            </span>

            {CASE_STUDIES.map((cs) => (
              <button
                key={cs.id}
                onClick={() => setSelectedCase(cs)}
                className={`w-full text-start p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                  selectedCase.id === cs.id
                    ? 'bg-gradient-to-r from-amber-500/20 to-slate-900 border-amber-500 text-white font-bold shadow-lg'
                    : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <div>
                  <span className="text-[10px] text-amber-400 font-bold block mb-1">
                    {isAr ? cs.categoryAr : cs.categoryEn} • {cs.year}
                  </span>
                  <h4 className="text-xs font-bold line-clamp-2">
                    {isAr ? cs.titleAr : cs.titleEn}
                  </h4>
                </div>
                <Trophy className="w-5 h-5 text-amber-400 shrink-0 ml-2 rtl:ml-0 rtl:mr-2" />
              </button>
            ))}
          </div>

          {/* Case Detail Display */}
          <div className="lg:col-span-8 bg-slate-900/90 border border-amber-500/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  {isAr ? selectedCase.categoryAr : selectedCase.categoryEn}
                </span>
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  {isAr ? selectedCase.outcomeValueAr : selectedCase.outcomeValueEn}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {isAr ? selectedCase.titleAr : selectedCase.titleEn}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {isAr ? selectedCase.summaryAr : selectedCase.summaryEn}
                </p>
              </div>

              {/* Legal Strategy Breakdown */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4" />
                  <span>{isAr ? 'المنهجية والاستراتيجية القانونية المتبعة:' : 'Applied Legal Strategy:'}</span>
                </h4>
                <div className="space-y-2">
                  {(isAr ? selectedCase.strategyAr : selectedCase.strategyEn).map((strat, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 flex items-center gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{strat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Building className="w-4 h-4 text-amber-400" />
                {isAr ? `القطاع: ${selectedCase.clientSectorAr}` : `Sector: ${selectedCase.clientSectorEn}`}
              </span>
              <span className="font-bold text-amber-400">{selectedCase.year}</span>
            </div>
          </div>
        </div>

        {/* Testimonials Banner Carousel */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-500/10 via-slate-900 to-slate-950 border border-amber-500/30 relative overflow-hidden shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>

              <blockquote className="text-base sm:text-lg font-medium text-white italic leading-relaxed">
                "{isAr ? testimonials[testimonialIndex].quoteAr : testimonials[testimonialIndex].quoteEn}"
              </blockquote>

              <div>
                <div className="text-sm font-bold text-amber-300">
                  {isAr ? testimonials[testimonialIndex].authorAr : testimonials[testimonialIndex].authorEn}
                </div>
                <div className="text-xs text-slate-400">
                  {isAr ? testimonials[testimonialIndex].titleAr : testimonials[testimonialIndex].titleEn}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() =>
                  setTestimonialIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
                }
                className="p-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer border border-slate-700"
              >
                {isAr ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
              </button>
              <button
                onClick={() =>
                  setTestimonialIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
                }
                className="p-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors cursor-pointer font-bold"
              >
                {isAr ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
