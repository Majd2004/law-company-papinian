import React, { useState } from 'react';
import { Language } from '../types';
import { SITE_PLAN_MODULES } from '../data/mockData';
import {
  X,
  Layers,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
  Terminal
} from 'lucide-react';

interface PlanOverviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const PlanOverviewModal: React.FC<PlanOverviewModalProps> = ({
  isOpen,
  onClose,
  lang
}) => {
  const [selectedModule, setSelectedModule] = useState<number>(0);
  const isAr = lang === 'ar';

  if (!isOpen) return null;

  const currentModule = SITE_PLAN_MODULES[selectedModule];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-5xl bg-slate-900 border border-amber-500/30 rounded-3xl shadow-2xl overflow-hidden my-8">
        {/* Top Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-bold text-white">
                  {isAr ? 'خطة ومعمارية موقع شركة بابينيان للمحاماة' : 'Papinian Law Firm Architectural Blueprint'}
                </h2>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  v2.5 Modern
                </span>
              </div>
              <p className="text-xs text-slate-400">
                {isAr
                  ? 'خارطة طريق التطوير الرقمي والوحدات التفاعلية العصرية'
                  : 'Digital Transformation & Interactive Component Plan'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 grid lg:grid-cols-12 gap-6 max-h-[75vh] overflow-y-auto">
          {/* Steps Sidebar list */}
          <div className="lg:col-span-5 space-y-2.5">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3 px-2 flex items-center justify-between">
              <span>{isAr ? 'أقسام الخطة والمكونات (10 وحدات)' : 'Blueprint Modules (10 Units)'}</span>
              <span className="text-[10px] text-emerald-400 font-sans-en">100% Complete</span>
            </div>

            {SITE_PLAN_MODULES.map((mod, idx) => (
              <button
                key={mod.stepNumber}
                onClick={() => setSelectedModule(idx)}
                className={`w-full text-start p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                  selectedModule === idx
                    ? 'bg-gradient-to-r from-amber-500/20 to-slate-800 border-amber-500/60 shadow-lg'
                    : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 text-slate-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center font-sans-en ${
                      selectedModule === idx
                        ? 'bg-amber-500 text-slate-950'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {mod.stepNumber}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs font-bold text-white truncate">
                      {isAr ? mod.titleAr : mod.titleEn}
                    </h4>
                    <span className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5">
                      <CheckCircle2 className="w-3 h-3" />
                      {mod.status}
                    </span>
                  </div>
                </div>

                {isAr ? <ChevronLeft className="w-4 h-4 text-slate-500" /> : <ChevronRight className="w-4 h-4 text-slate-500" />}
              </button>
            ))}
          </div>

          {/* Module Detail Card */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-slate-950/80 border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl"></div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                  {isAr ? `الوحدة ${currentModule.stepNumber}` : `Module ${currentModule.stepNumber}`}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  {isAr ? 'معايير أمان عالية' : 'Enterprise Verified'}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {isAr ? currentModule.titleAr : currentModule.titleEn}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {isAr ? currentModule.descriptionAr : currentModule.descriptionEn}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  {isAr ? 'أبرز مميزات وتقنيات هذه الوحدة:' : 'Key Technical Capabilities:'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(isAr ? currentModule.featuresAr : currentModule.featuresEn).map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 flex items-center gap-2"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications Callout */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-amber-500/20 text-xs space-y-2">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="font-semibold flex items-center gap-1.5 text-amber-300">
                    <Terminal className="w-4 h-4" />
                    {isAr ? 'معمارية الأمان والسرية (Secured Tech Stack)' : 'Security Architecture'}
                  </span>
                  <span className="text-[11px] font-sans-en text-slate-400">AES-256 / SSL TLS 1.3</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-normal">
                  {isAr
                    ? 'تم بناء موقع بابينيان بنظام حماية مشفر للبيانات، مع التوافق التام مع ضوابط حماية البيانات الشخصية ورسائل الواتساب والبريد الإلكتروني المباشر.'
                    : 'Engineered with client privilege encryption, zero-log data retention for temporary calculations, and automated PDF exports.'}
                </p>
              </div>
            </div>

            {/* Navigation footer inside modal */}
            <div className="pt-6 border-t border-slate-800/80 mt-6 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  disabled={selectedModule === 0}
                  onClick={() => setSelectedModule((prev) => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 disabled:opacity-40 cursor-pointer"
                >
                  {isAr ? 'السابق' : 'Previous'}
                </button>
                <button
                  disabled={selectedModule === SITE_PLAN_MODULES.length - 1}
                  onClick={() => setSelectedModule((prev) => Math.min(SITE_PLAN_MODULES.length - 1, prev + 1))}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-500 hover:bg-amber-400 text-slate-950 disabled:opacity-40 cursor-pointer font-bold"
                >
                  {isAr ? 'التالي' : 'Next'}
                </button>
              </div>

              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors cursor-pointer"
              >
                {isAr ? 'إغلاق وتصفح الموقع الفعلي' : 'Close & Explore Site'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
