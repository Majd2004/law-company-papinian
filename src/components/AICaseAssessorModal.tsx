import React, { useState } from 'react';
import { Language } from '../types';
import {
  Sparkles,
  X,
  Loader2,
  Calendar
} from 'lucide-react';

interface AICaseAssessorModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onConvertToBooking: (summaryText: string) => void;
}

export const AICaseAssessorModal: React.FC<AICaseAssessorModalProps> = ({
  isOpen,
  onClose,
  lang,
  onConvertToBooking
}) => {
  const [category, setCategory] = useState<string>('commercial');
  const [hasWrittenContract, setHasWrittenContract] = useState<boolean>(true);
  const [hasNotices, setHasNotices] = useState<boolean>(true);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [hasResult, setHasResult] = useState<boolean>(false);

  const isAr = lang === 'ar';

  if (!isOpen) return null;

  const handleStartAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setHasResult(true);
    }, 1200);
  };

  const getAssessmentReport = () => {
    let strengthScore = 85;
    if (!hasWrittenContract) strengthScore -= 30;
    if (!hasNotices) strengthScore -= 15;

    let recommendationAr = 'الموقف القانوني قوي مبدئياً. يوصى باستصدار إخطار رسمي قبل القيد وتوثيق الإثباتات المتبادلة.';
    let recommendationEn = 'Strong legal standing. We recommend issuing a formal legal notice before filing for injunction.';

    if (strengthScore < 60) {
      recommendationAr = 'الموقف يتطلب تعزيز أدلة الإثبات والشهادات أو الاعتماد على المراسلات الرقمية والواتساب المؤرخة.';
      recommendationEn = 'Position requires evidentiary enhancement via digital logs, emails, or expert affidavits.';
    }

    return {
      strengthScore,
      recommendationAr,
      recommendationEn
    };
  };

  const report = getAssessmentReport();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                {isAr ? 'المساعد الذكي لشركة بابينيان (AI Case Assessor)' : 'Papinian AI Preliminary Case Assessor'}
              </h3>
              <span className="text-xs text-amber-400">
                {isAr ? 'تقييم مبدئي وسريع لموقف القضية' : 'Algorithmic Feasibility Preview'}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Loading Spinner */}
        {isAnalyzing ? (
          <div className="py-16 text-center space-y-4">
            <Loader2 className="w-10 h-10 text-amber-400 animate-spin mx-auto" />
            <p className="text-sm font-bold text-white">
              {isAr ? 'جاري تحليل الأسانيد والمراسلات وحساب مؤشر القوة القانونية...' : 'Analyzing case elements against legal precedent...'}
            </p>
          </div>
        ) : hasResult ? (
          /* Report Screen */
          <div className="space-y-6 animate-fade-in">
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-3">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                {isAr ? 'مؤشر قوة الموقف القانوني المقدر:' : 'Estimated Legal Standing Score:'}
              </span>

              <div className="text-4xl font-black text-amber-400 font-sans-en">
                {report.strengthScore}%
              </div>

              <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden max-w-md mx-auto">
                <div
                  className="bg-gradient-to-r from-amber-500 to-emerald-400 h-full rounded-full transition-all duration-1000"
                  style={{ width: `${report.strengthScore}%` }}
                ></div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-2 text-xs">
              <span className="font-bold text-amber-300 block">
                {isAr ? 'توصية الخوارزمية المبدئية:' : 'AI Strategic Recommendation:'}
              </span>
              <p className="text-slate-200 leading-relaxed">
                {isAr ? report.recommendationAr : report.recommendationEn}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs text-slate-300">
              <span className="font-bold text-white block">
                {isAr ? 'الإجراءات المستحسنة قادماً:' : 'Next Immediate Steps:'}
              </span>
              <ul className="list-disc list-inside space-y-1 text-slate-400">
                <li>{isAr ? 'مراجعة المراسلات والعقود بواسطة المستشار المختص' : 'Review contracts with designated senior attorney'}</li>
                <li>{isAr ? 'حصر أضرار وتكاليف النزاع والفرص الضائعة' : 'Quantify exact damages and loss of profit claims'}</li>
              </ul>
            </div>

            <div className="pt-2 flex justify-between gap-3">
              <button
                onClick={() => setHasResult(false)}
                className="px-4 py-2.5 rounded-xl font-bold text-xs bg-slate-800 text-slate-300 hover:bg-slate-700 cursor-pointer"
              >
                {isAr ? 'إعادة التقييم' : 'Reset Analysis'}
              </button>

              <button
                onClick={() => {
                  const summaryText = isAr
                    ? `تقييم ذكي لقضية (${category}) بمؤشر قوة ${report.strengthScore}%`
                    : `AI case assessment for ${category} with strength score ${report.strengthScore}%`;
                  onClose();
                  onConvertToBooking(summaryText);
                }}
                className="px-6 py-2.5 rounded-xl font-bold text-xs bg-amber-500 text-slate-950 hover:bg-amber-400 transition-colors cursor-pointer flex items-center gap-1.5 shadow-lg shadow-amber-500/20"
              >
                <Calendar className="w-4 h-4" />
                <span>{isAr ? 'تحويل التقرير لاستشارة مع المحامي' : 'Book Attorney Strategy Session'}</span>
              </button>
            </div>
          </div>
        ) : (
          /* Questionnaire wizard */
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">
                  {isAr ? '1. مجال وحقل القضية أو النزاع:' : '1. Legal Domain:'}
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-amber-500 focus:outline-none"
                >
                  <option value="commercial">{isAr ? 'نزاع تجاري / عقود شركاء' : 'Commercial / Shareholders Dispute'}</option>
                  <option value="arbitration">{isAr ? 'تحكيم ومقاولات كبرى' : 'International Arbitration & Construction'}</option>
                  <option value="ip">{isAr ? 'ملكية فكرية وحماية علامات' : 'IP & Trademark Infringement'}</option>
                  <option value="labor">{isAr ? 'نزاع عمالي / كبار التنفيذيين' : 'Executive Labor Dispute'}</option>
                </select>
              </div>

              <div className="space-y-3 text-xs">
                <label className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer">
                  <span className="text-slate-200">{isAr ? 'هل يوجد عقد مكتوب وموقع بين الأطراف؟' : 'Is there a written signed contract?'}</span>
                  <input
                    type="checkbox"
                    checked={hasWrittenContract}
                    onChange={(e) => setHasWrittenContract(e.target.checked)}
                    className="w-4 h-4 accent-amber-500 cursor-pointer"
                  />
                </label>

                <label className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer">
                  <span className="text-slate-200">{isAr ? 'هل تمت مخاطبات أو إخطارات رسمية متبادلة؟' : 'Were formal legal notices exchanged?'}</span>
                  <input
                    type="checkbox"
                    checked={hasNotices}
                    onChange={(e) => setHasNotices(e.target.checked)}
                    className="w-4 h-4 accent-amber-500 cursor-pointer"
                  />
                </label>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={handleStartAnalysis}
                className="px-7 py-3 rounded-xl font-bold text-xs bg-amber-500 text-slate-950 hover:bg-amber-400 transition-colors cursor-pointer flex items-center gap-2 shadow-lg shadow-amber-500/20"
              >
                <Sparkles className="w-4 h-4" />
                <span>{isAr ? 'بدء التحليل الفوري بالقواعد الذكية' : 'Run Instant AI Case Evaluation'}</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
