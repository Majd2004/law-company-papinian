import React, { useState } from 'react';
import { Language, LegalArticle } from '../types';
import { LEGAL_ARTICLES } from '../data/mockData';
import {
  Clock,
  User,
  ArrowRight,
  ArrowLeft,
  X
} from 'lucide-react';

interface LegalInsightsProps {
  lang: Language;
}

export const LegalInsights: React.FC<LegalInsightsProps> = ({ lang }) => {
  const [activeArticleModal, setActiveArticleModal] = useState<LegalArticle | null>(null);
  const isAr = lang === 'ar';

  return (
    <section id="insights" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20">
            {isAr ? 'المركز المعرفي ومكتبة بابينيان' : 'Papinian Knowledge Hub'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {isAr ? (
              <>
                رؤى وأبحاث قانونية <span className="gold-gradient-text">تستشرف المستقبل التشريعي</span>
              </>
            ) : (
              <>
                Regulatory Analysis & <span className="gold-gradient-text">Forward-Looking Insights</span>
              </>
            )}
          </h2>
          <p className="text-sm text-slate-300">
            {isAr
              ? 'مكتبة متجددة تضم تحليلات متعمقة للتغيرات التنظيمية والبيئة التشريعية وحوكمة الذكاء الاصطناعي.'
              : 'In-depth analysis of emerging commercial codes, corporate governance shifts, and AI legal frameworks.'}
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LEGAL_ARTICLES.map((article) => (
            <div
              key={article.id}
              onClick={() => setActiveArticleModal(article)}
              className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between cursor-pointer group hover:border-amber-500/50"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={isAr ? article.titleAr : article.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                  <span className="absolute top-3 right-3 text-[10px] font-bold bg-slate-900/80 text-amber-300 px-2.5 py-1 rounded-full border border-amber-500/30 backdrop-blur-md">
                    {isAr ? article.categoryAr : article.categoryEn}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      {article.readTime}
                    </span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-2">
                    {isAr ? article.titleAr : article.titleEn}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                    {isAr ? article.summaryAr : article.summaryEn}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between text-xs font-bold text-amber-400 group-hover:text-amber-300">
                <span>{isAr ? 'قراءة التحليل الكامل' : 'Read Full Insight'}</span>
                {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Reader Modal */}
      {activeArticleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-xl animate-fade-in">
          <div className="relative w-full max-w-3xl bg-slate-900 border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
                  {isAr ? activeArticleModal.categoryAr : activeArticleModal.categoryEn}
                </span>
                <h3 className="text-xl font-bold text-white pt-1">
                  {isAr ? activeArticleModal.titleAr : activeArticleModal.titleEn}
                </h3>
              </div>

              <button
                onClick={() => setActiveArticleModal(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-xs text-slate-400 border-b border-slate-800/80 pb-3">
                <span className="flex items-center gap-1.5 text-white font-medium">
                  <User className="w-4 h-4 text-amber-400" />
                  {isAr ? activeArticleModal.authorAr : activeArticleModal.authorEn}
                </span>
                <span>•</span>
                <span>{activeArticleModal.date}</span>
                <span>•</span>
                <span>{activeArticleModal.readTime}</span>
              </div>

              <div className="rounded-2xl overflow-hidden h-56">
                <img
                  src={activeArticleModal.image}
                  alt={isAr ? activeArticleModal.titleAr : activeArticleModal.titleEn}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-sm text-slate-200 leading-relaxed space-y-3 font-cairo">
                <p>{isAr ? activeArticleModal.contentAr : activeArticleModal.contentEn}</p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  {(isAr ? activeArticleModal.tagsAr : activeArticleModal.tagsEn).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] bg-slate-950 text-slate-300 px-2.5 py-1 rounded-lg border border-slate-800"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setActiveArticleModal(null)}
                  className="px-5 py-2 rounded-xl text-xs font-bold bg-amber-500 text-slate-950 hover:bg-amber-400 transition-colors cursor-pointer"
                >
                  {isAr ? 'إغلاق المقال' : 'Close Reader'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
