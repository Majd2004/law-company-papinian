import React, { useState } from 'react';
import { Language } from '../types';
import {
  Shield,
  Zap,
  Lock,
  Compass,
  Check,
  X as XIcon
} from 'lucide-react';

interface AboutPapinianProps {
  lang: Language;
}

export const AboutPapinian: React.FC<AboutPapinianProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'story' | 'matrix'>('story');
  const isAr = lang === 'ar';

  const pillars = [
    {
      icon: Shield,
      titleAr: 'النزاهة والصلابة القانونية',
      titleEn: 'Absolute Integrity',
      descAr: 'استلهاماً من موقف بابينيان التاريخي؛ لا نساوم أبداً على مبادئ الحق وحماية المركز القانوني لموكلينا.',
      descEn: 'Inspired by Papinianus’ historic legacy, we maintain unyielding ethical rigor and legal defense.'
    },
    {
      icon: Compass,
      titleAr: 'التحليل الاستشرافي الوقائي',
      titleEn: 'Strategic Foresight',
      descAr: 'لا ننتظر وقوع النزاع؛ بل نصيغ العقود والأنظمة بآليات تسد الثغرات وتمنع المخاطر المستقبلية.',
      descEn: 'We anticipate regulatory hurdles before they emerge, engineering bulletproof contracts.'
    },
    {
      icon: Zap,
      titleAr: 'الاستجابة والسرعة الفائقة',
      titleEn: 'Agile & Rapid Response',
      descAr: 'خلية طوارئ واستجابة سريعة للأحكام والقرارات العاجلة والاستحواذات العابرة للحدود.',
      descEn: '24/7 dedicated legal taskforce ready to deploy emergency injunctions and M&A execution.'
    },
    {
      icon: Lock,
      titleAr: 'السرية والتشفير التام',
      titleEn: 'Encrypted Confidentiality',
      descAr: 'أنظمة حفظ وتواصل مشفرة لحماية البيانات الحساسة وفق أعلى المعايير الدولية المعيارية.',
      descEn: 'Enterprise-grade encryption protecting all client documents, notes, and privileged strategy.'
    }
  ];

  const comparisonRows = [
    {
      featureAr: 'حساب أتعاب التقاضي والعقود',
      featureEn: 'Fee Transparency & Estimators',
      traditional: isAr ? 'أتعاب غير واضحة وتكاليف خفية' : 'Unclear hourly rates & hidden add-ons',
      papinian: isAr ? 'حاسبة تفاعلية وشفافية كاملة بأسعار مقطوعة' : 'Live interactive calculators & fixed SLAs'
    },
    {
      featureAr: 'زمن إعداد المذكرات المبدئية',
      featureEn: 'Initial Pleading Turnaround',
      traditional: isAr ? 'من 5 إلى 10 أيام عمل' : '5 to 10 business days',
      papinian: isAr ? 'أقل من 24 ساعة للخطط المستعجلة' : 'Under 24 hours for urgent filings'
    },
    {
      featureAr: 'التحول التقني ومراجعة العقود',
      featureEn: 'Smart AI & Digital Contract Generation',
      traditional: isAr ? 'نماذج ورقية وخطوات يدوية بطيئة' : 'Manual paper-based drafts',
      papinian: isAr ? 'استوديو عقود ذكية وتوليد فوري للنماذج' : 'Instant smart contract studio & live preview'
    },
    {
      featureAr: 'الوصول للطوارئ والقضايا المستعجلة',
      featureEn: 'Emergency Legal Response',
      traditional: isAr ? 'ساعات دوام محدودة فقط' : 'Standard business hours only',
      papinian: isAr ? 'خط ساخن 24/7 مع حجز استشارات مرئية' : '24/7 Hotline & encrypted video booking'
    },
    {
      featureAr: 'مؤهلات الفريق والمستشارين',
      featureEn: 'Attorney Credentials & Track Record',
      traditional: isAr ? 'خبرات محلية محدودة' : 'Generalist local experience',
      papinian: isAr ? 'دكتوراه من هارفارد/أكسفورد وسجل بمليارات الدولارات' : 'Harvard & Oxford PhDs with $2.5B+ track record'
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-900/60 border-y border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20">
            {isAr ? 'عن شركة بابينيان للمحاماة' : 'About Papinian Law Firm'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {isAr ? (
              <>
                إرث القانون العريق.. <span className="gold-gradient-text">بأداء رقمي عصري متقدم</span>
              </>
            ) : (
              <>
                Historic Legal Wisdom. <span className="gold-gradient-text">Next-Gen Legal Performance.</span>
              </>
            )}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {isAr
              ? 'تسمت شريكتنا باسم "بابينيان" (Aemilius Papinianus)؛ أعظم حكماء القانون في التاريخ الروماني، والذي عُرف بصلابة النزاهة والفكر الاستباقي. نحن نجسد هذه الروح اليوم برؤية حديثة تفوق التوقعات.'
              : 'Our firm is named after Aemilius Papinianus, revered as the prince of legal jurists. We carry forward his legacy of unyielding legal principle combined with modern legal technology.'}
          </p>

          {/* Toggle buttons */}
          <div className="pt-4 flex justify-center gap-2">
            <button
              onClick={() => setActiveTab('story')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'story'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {isAr ? 'قصة الإرث والمبادئ الأربعة' : 'Heritage & 4 Core Pillars'}
            </button>
            <button
              onClick={() => setActiveTab('matrix')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'matrix'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {isAr ? 'لماذا بابينيان؟ (مقارنة تفاعلية)' : 'Why Papinian? (Comparison Matrix)'}
            </button>
          </div>
        </div>

        {/* Tab 1: Story & Pillars */}
        {activeTab === 'story' && (
          <div className="space-y-12 animate-fade-in">
            {/* Story Grid */}
            <div className="grid lg:grid-cols-12 gap-8 items-center bg-slate-950/80 rounded-3xl p-8 border border-slate-800 shadow-xl">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <span>{isAr ? 'من هو "بابينيان"؟ ولماذا اخترنا هذا الاسم؟' : 'Who Was Papinian?'}</span>
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {isAr
                    ? 'كان إميليوس بابينيانوس (Aemilius Papinianus) المرجع القانوني الأول في الإمبراطورية، واشتهر بمقولته الخالدة التي رفض فيها تبرير أي خرق للنظام أو العدالة. حفر اسمه كرمز للمصداقية المطلقة والتحليل القانوني العميق.'
                    : 'Aemilius Papinianus was ancient Rome’s greatest jurist, revered for his master commentaries and uncompromising refusal to endorse unlawful acts. He stands as an enduring symbol of supreme legal ethics.'}
                </p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {isAr
                    ? 'في شركة بابينيان للمحاماة، مزجنا هذه الحكمة التاريخية الصارمة بأرقى معايير المحاماة الدولية المعاصرة؛ لنقدم لعملائنا حماية قانونية استثنائية في قضايا الاندماج والتحكيم والترافع التجاري والتقنية الناشئة.'
                    : 'Today, Papinian Law Firm integrates that classical rigor with AI-driven intelligence, cross-border arbitration mastery, and enterprise-wide governance.'}
                </p>

                <div className="pt-2 flex items-center gap-4 text-xs font-medium text-amber-400">
                  <div className="px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20">
                    {isAr ? 'رخصة محاماة معتمدة' : 'Licensed & Certified'}
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20">
                    {isAr ? 'عضوية الاتحادات المحامين الدولية' : 'International Bar Member'}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/8112154/pexels-photo-8112154.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                    alt="Papinian Consultations"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-xs text-amber-200 font-semibold text-center bg-slate-950/80 p-2.5 rounded-xl border border-amber-500/30 backdrop-blur-md">
                    {isAr
                      ? 'مقر استشارات بابينيان - مركز الملك عبدالله المالي KAFD'
                      : 'Papinian Executive Legal Suite - KAFD Financial District'}
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Core Pillars Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar, pIdx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pIdx}
                    className="glass-card p-6 rounded-2xl space-y-3 relative group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-white">
                      {isAr ? pillar.titleAr : pillar.titleEn}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {isAr ? pillar.descAr : pillar.descEn}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 2: Comparison Matrix */}
        {activeTab === 'matrix' && (
          <div className="bg-slate-950/90 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl animate-fade-in overflow-x-auto">
            <div className="min-w-[600px]">
              <div className="grid grid-cols-12 gap-4 pb-4 border-b border-slate-800 text-xs font-bold uppercase tracking-wider text-slate-400">
                <div className="col-span-4 text-white">
                  {isAr ? 'المعيار / الخدمة القانونية' : 'Feature / Legal Standard'}
                </div>
                <div className="col-span-4 text-slate-400">
                  {isAr ? 'المكاتب التقليدية' : 'Traditional Firms'}
                </div>
                <div className="col-span-4 text-amber-400 flex items-center gap-1.5">
                  <Shield className="w-4 h-4" />
                  <span>{isAr ? 'نموذج بابينيان الرقمي الحديث' : 'Papinian Modern Standard'}</span>
                </div>
              </div>

              <div className="divide-y divide-slate-800/80">
                {comparisonRows.map((row, rIdx) => (
                  <div key={rIdx} className="grid grid-cols-12 gap-4 py-4 items-center text-xs">
                    <div className="col-span-4 font-bold text-slate-200">
                      {isAr ? row.featureAr : row.featureEn}
                    </div>
                    <div className="col-span-4 text-slate-400 flex items-center gap-2">
                      <XIcon className="w-4 h-4 text-rose-500 shrink-0" />
                      <span>{row.traditional}</span>
                    </div>
                    <div className="col-span-4 text-amber-300 font-medium flex items-center gap-2 bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/20">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 font-bold" />
                      <span>{row.papinian}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
