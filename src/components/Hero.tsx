import React from 'react';
import { Language } from '../types';
import {
  ShieldCheck,
  Award,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  Lock,
  Building,
  Scale
} from 'lucide-react';

interface HeroProps {
  lang: Language;
  onOpenBooking: () => void;
  onOpenAiAssessor: () => void;
  onOpenSitePlan: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onOpenBooking,
  onOpenAiAssessor,
  onOpenSitePlan
}) => {
  const isAr = lang === 'ar';

  const stats = [
    {
      valueAr: '+1,450',
      valueEn: '+1,450',
      labelAr: 'قضية تجارية واستشارية ناجحة',
      labelEn: 'Successful Commercial Cases'
    },
    {
      valueAr: '98.7%',
      valueEn: '98.7%',
      labelAr: 'نسبة إنجاز وتسوية لصالح الموكلين',
      labelEn: 'Client Settlement & Success Rate'
    },
    {
      valueAr: '+$2.5B',
      valueEn: '+$2.5B',
      labelAr: 'إجمالي صفقات وتسويات مُحصلة',
      labelEn: 'Total Portfolio & Settlement Value'
    },
    {
      valueAr: '24/7',
      valueEn: '24/7',
      labelAr: 'استجابة قانونية وطوارئ فورية',
      labelEn: '24/7 Emergency Legal Response'
    }
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-950">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,119,6,0.15),rgba(255,255,255,0))] pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>
      <div className="absolute -top-40 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Grid line overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Main Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-start">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold backdrop-blur-md">
              <Award className="w-4 h-4 text-amber-400" />
              <span>
                {isAr
                  ? 'شركة بابينيان للمحاماة | النخبة القانونية المعتمدة 2026'
                  : 'Papinian Law Firm | Top Ranked Legal Counsel 2026'}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight">
              {isAr ? (
                <>
                  عدالة <span className="gold-gradient-text">راسخة..</span> ورؤية قانونية صلبة لتعزيز أعمالك ومستقبلك
                </>
              ) : (
                <>
                  Uncompromising Integrity. <span className="gold-gradient-text">Relentless Legal Advocacy.</span>
                </>
              )}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              {isAr
                ? 'نجمع بين إرث الفقه القانوني المستلهم من أعرق علماء المحاماة التاريخيين "بابينيان"، وبين أحدث الأدوات الرقمية وحلول الحوكمة والتحكيم الدولي لحماية استثماراتك وإنجاز أعقد القضايا.'
                : 'Named after the legendary Roman legal jurist Aemilius Papinianus, Papinian delivers elite corporate litigation, international arbitration, and tech compliance with absolute discretion and speed.'}
            </p>

            {/* Quick Bullet Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs font-medium text-slate-300">
              <div className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>{isAr ? 'حماية الاستثمار والشركات' : 'Corporate Asset Protection'}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
                <Lock className="w-4 h-4 text-amber-400" />
                <span>{isAr ? 'سرية وتشفير كامل للمستندات' : 'Encrypted Case Security'}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
                <Building className="w-4 h-4 text-amber-400" />
                <span>{isAr ? 'فروع بالرياض ودبي ولندن والكويت' : 'Riyadh, Dubai, London & Kuwait'}</span>
              </div>
            </div>

            {/* CTA Action Bar */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 transition-all duration-300 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 text-sm cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{isAr ? 'احجز استشارة قانونية مشفرة' : 'Book Encrypted Consultation'}</span>
                {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>

              <button
                onClick={onOpenAiAssessor}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-amber-500/50 transition-all text-sm cursor-pointer shadow-md hover:shadow-amber-500/10"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>{isAr ? 'التقييم الذكي المبدئي للقضية' : 'AI Preliminary Case Assessor'}</span>
              </button>

              <button
                onClick={onOpenSitePlan}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-all text-sm cursor-pointer"
              >
                <span>{isAr ? 'خطة الموقع' : 'Site Roadmap'}</span>
              </button>
            </div>
          </div>

          {/* Visual Showcase Side */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glowing Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-500 to-amber-700 opacity-30 blur-lg animate-pulse-slow"></div>

              {/* Glass Hero Card */}
              <div className="relative rounded-3xl bg-slate-900/90 border border-amber-500/30 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl"></div>

                <div className="flex items-center justify-between border-b border-slate-800 pb-5 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
                      <Scale className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">
                        {isAr ? 'بابينيان الرقمية 360°' : 'Papinian Legal Digital 360°'}
                      </h3>
                      <p className="text-xs text-amber-400/90 font-medium">
                        {isAr ? 'الحماية والتمثيل القضائي المتكامل' : 'Protected Legal Operations'}
                      </p>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    {isAr ? 'نشط الآن' : 'Active 24/7'}
                  </span>
                </div>

                {/* Floating Metric Highlights */}
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="w-5 h-5 text-amber-400" />
                      <span className="text-xs font-semibold text-slate-200">
                        {isAr ? 'معدل الحماية والامتثال القانوني' : 'Legal Security Index'}
                      </span>
                    </div>
                    <span className="text-sm font-extrabold text-amber-400 font-sans-en">99.4%</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
                      <span>{isAr ? 'سرعة الاستجابة وصياغة المذكرات' : 'Emergency Pleading Velocity'}</span>
                      <span className="text-amber-400 font-sans-en">&lt; 4 Hours</span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-amber-500 to-amber-300 w-[92%] rounded-full"></div>
                    </div>
                  </div>

                  {/* Attorney Profile Spotlight */}
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/10 to-slate-900 border border-amber-500/20 flex items-center gap-3">
                    <img
                      src="https://images.pexels.com/photos/8112110/pexels-photo-8112110.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                      alt="Dr Papinian"
                      className="w-12 h-12 rounded-xl object-cover border border-amber-400/50"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-white truncate">
                        {isAr ? 'د. بابينيان المنصور' : 'Dr. Papinian Al-Mansoor'}
                      </h4>
                      <p className="text-[11px] text-slate-300 truncate">
                        {isAr ? 'مستشار الاندماج والتحكيم الدولي' : 'Senior Arbitration Lead'}
                      </p>
                    </div>
                    <div className="text-[10px] px-2 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      {isAr ? 'متاح للطلب' : 'Available'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ticker / Live Counters Bar */}
        <div className="mt-16 pt-10 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm text-center lg:text-start hover:border-amber-500/30 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-black text-amber-400 font-sans-en mb-1">
                  {isAr ? stat.valueAr : stat.valueEn}
                </div>
                <div className="text-xs sm:text-sm text-slate-300 font-medium">
                  {isAr ? stat.labelAr : stat.labelEn}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
