import React, { useState } from 'react';
import { Language } from '../types';
import { FAQ_ITEMS } from '../data/mockData';
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Search
} from 'lucide-react';

interface FAQSectionProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ lang, onOpenBooking }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQ_ITEMS[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const isAr = lang === 'ar';

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const filteredFaqs = FAQ_ITEMS.filter((faq) => {
    const q = (isAr ? faq.questionAr : faq.questionEn).toLowerCase();
    const a = (isAr ? faq.answerAr : faq.answerEn).toLowerCase();
    const query = searchQuery.toLowerCase().trim();
    return !query || q.includes(query) || a.includes(query);
  });

  return (
    <section id="faq" className="py-24 bg-slate-900/60 border-t border-slate-800 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20">
            {isAr ? 'الأسئلة الشائعة والإرشادات' : 'Frequently Asked Questions'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {isAr ? (
              <>
                إجابات شاملة <span className="gold-gradient-text">لتساؤلاتك القانونية</span>
              </>
            ) : (
              <>
                Clear Answers to <span className="gold-gradient-text">Your Essential Legal Questions</span>
              </>
            )}
          </h2>
          <p className="text-sm text-slate-300">
            {isAr
              ? 'تجد هنا معلومات تفصيلية عن آليات الاستشارة والسرية وهيكلة الأتعاب وإجراءات التقاضي.'
              : 'Find transparent answers regarding retainer fees, attorney privilege, and representation timelines.'}
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 rtl:left-auto rtl:right-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isAr ? 'ابحث في الأسئلة الشائعة...' : 'Search questions...'}
            className="w-full bg-slate-950 border border-slate-700 focus:border-amber-500 rounded-2xl py-3 px-10 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((item) => {
            const isOpen = openFaqId === item.id;
            return (
              <div
                key={item.id}
                className="bg-slate-950/80 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full text-start p-5 flex items-center justify-between gap-4 font-bold text-sm text-white hover:text-amber-400 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{isAr ? item.questionAr : item.questionEn}</span>
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-amber-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-xs text-slate-300 leading-relaxed border-t border-slate-900 animate-fade-in font-cairo">
                    <p className="pt-3">{isAr ? item.answerAr : item.answerEn}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-start">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white">
              {isAr ? 'لم تجد إجابة لسؤالك الخاص؟' : 'Have a specialized legal question?'}
            </h4>
            <p className="text-xs text-slate-300">
              {isAr ? 'فريقنا الاستشاري جاهز للرد على كافة الاستفسارات المعقدة.' : 'Our legal team is ready to analyze your case details.'}
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 rounded-xl font-bold text-xs bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors cursor-pointer shrink-0"
          >
            {isAr ? 'تواصل مع المستشار مباشرة' : 'Contact Attorney Directly'}
          </button>
        </div>

      </div>
    </section>
  );
};
