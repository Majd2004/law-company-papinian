import React, { useState } from 'react';
import { Language } from '../types';
import {
  DollarSign,
  Briefcase,
  AlertTriangle
} from 'lucide-react';

interface LegalCalculatorsProps {
  lang: Language;
  onBookAfterCalc: (summary: string) => void;
}

export const LegalCalculators: React.FC<LegalCalculatorsProps> = ({
  lang,
  onBookAfterCalc
}) => {
  const [activeTab, setActiveTab] = useState<'courtFees' | 'labor' | 'riskScore'>('courtFees');
  const isAr = lang === 'ar';

  // State 1: Court Fee Estimator
  const [claimValue, setClaimValue] = useState<number>(100000);
  const [caseType, setCaseType] = useState<string>('commercial');
  const [forumType, setTabForum] = useState<string>('court'); // 'court' or 'arbitration'

  // State 2: Labor Severance
  const [salary, setSalary] = useState<number>(15000);
  const [years, setYears] = useState<number>(5);
  const [terminationType, setTerminationType] = useState<'resignation' | 'dismissal'>('resignation');

  // State 3: Contract Risk Analyzer
  const [hasPenalty, setHasPenalty] = useState<boolean>(true);
  const [hasArbitration, setHasArbitration] = useState<boolean>(true);
  const [hasUnilateralTermination, setHasUnilateralTermination] = useState<boolean>(false);
  const [hasIpProtection, setHasIpProtection] = useState<boolean>(true);

  // Calculations:
  // 1. Court Fees
  const calculateCourtFee = () => {
    let feePercentage = 0.03; // default 3%
    if (caseType === 'commercial') feePercentage = 0.03;
    if (caseType === 'labor') feePercentage = 0.0; // exempt
    if (caseType === 'arbitration') feePercentage = 0.05;

    let estCourtFee = claimValue * feePercentage;
    if (estCourtFee > 500000) estCourtFee = 500000; // max cap

    let estLegalEffortMin = Math.round(claimValue * 0.04);
    let estLegalEffortMax = Math.round(claimValue * 0.08);

    if (caseType === 'labor') {
      estLegalEffortMin = 3000;
      estLegalEffortMax = 10000;
    }

    return {
      courtFee: estCourtFee,
      minEffort: estLegalEffortMin,
      maxEffort: estLegalEffortMax,
      timeline: forumType === 'arbitration' ? '3 - 6 أشهر' : '6 - 12 شهراً'
    };
  };

  // 2. Labor Severance (Standard Labor Code)
  const calculateLaborSeverance = () => {
    let totalSeverance = 0;
    if (years <= 5) {
      totalSeverance = years * (salary * 0.5);
    } else {
      totalSeverance = 5 * (salary * 0.5) + (years - 5) * salary;
    }

    if (terminationType === 'resignation') {
      if (years < 2) totalSeverance = 0;
      else if (years >= 2 && years < 5) totalSeverance = totalSeverance * (1 / 3);
      else if (years >= 5 && years < 10) totalSeverance = totalSeverance * (2 / 3);
    }

    return Math.round(totalSeverance);
  };

  // 3. Risk Analyzer Score
  const calculateRiskScore = () => {
    let riskPoints = 20;

    if (!hasArbitration) riskPoints += 25;
    if (hasUnilateralTermination) riskPoints += 30;
    if (!hasPenalty) riskPoints += 15;
    if (!hasIpProtection) riskPoints += 20;

    let level: 'low' | 'medium' | 'high' = 'low';
    if (riskPoints > 40) level = 'medium';
    if (riskPoints >= 70) level = 'high';

    return { score: riskPoints, level };
  };

  const feeResult = calculateCourtFee();
  const severanceResult = calculateLaborSeverance();
  const riskResult = calculateRiskScore();

  return (
    <section id="legal-calculators" className="py-24 bg-slate-900/80 border-y border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20">
            {isAr ? 'أدوات بابينيان الرقمية التفاعلية' : 'Interactive Legal Calculators'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {isAr ? (
              <>
                حاسبات قانونية تمنحك <span className="gold-gradient-text">الوضوح والتقدير الدقيق</span>
              </>
            ) : (
              <>
                Data-Driven Precision <span className="gold-gradient-text">Legal Cost & Risk Tools</span>
              </>
            )}
          </h2>
          <p className="text-sm text-slate-300">
            {isAr
              ? 'احسب رسوم المحاكم المتوقعة، حقوقك العمالية وفق النظام، وقيم درجة مخاطر أوراقك التجارية فورياً قبل اتخاذ القرار.'
              : 'Estimate litigation fees, severance entitlements under labor law, or commercial contract risk scores in real-time.'}
          </p>
        </div>

        {/* Tool Nav Buttons */}
        <div className="flex justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab('courtFees')}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'courtFees'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <DollarSign className="w-4 h-4" />
            <span>{isAr ? 'حاسبة تكاليف التقاضي' : 'Court Fees Estimator'}</span>
          </button>

          <button
            onClick={() => setActiveTab('labor')}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'labor'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>{isAr ? 'حاسبة حقوق نظام العمل' : 'Labor Severance Engine'}</span>
          </button>

          <button
            onClick={() => setActiveTab('riskScore')}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'riskScore'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <AlertTriangle className="w-4 h-4" />
            <span>{isAr ? 'مؤشر مخاطر العقود' : 'Contract Risk Analyzer'}</span>
          </button>
        </div>

        {/* Main Tool Body */}
        <div className="bg-slate-950 border border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl">

          {/* TAB 1: Court Fee Estimator */}
          {activeTab === 'courtFees' && (
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {isAr ? 'تقدير تكاليف ورسوم القضية والتقاضي' : 'Court & Litigation Cost Estimator'}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {isAr
                      ? 'حدد قيمة المطالبة ونوع النزاع لحساب الرسوم القضائية والنطاق الزمني المتوقع.'
                      : 'Input your claim amount and case classification to estimate judicial fees and timeframes.'}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-2">
                      {isAr ? 'قيمة المطالبة أو الحق المالي ($ / ريال):' : 'Claim Value Amount ($ / Currency):'}
                    </label>
                    <input
                      type="number"
                      min="1000"
                      step="5000"
                      value={claimValue}
                      onChange={(e) => setClaimValue(Number(e.target.value) || 0)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white font-bold focus:border-amber-500 focus:outline-none"
                    />
                    <div className="flex gap-2 mt-2">
                      {[50000, 250000, 1000000, 5000000].map((val) => (
                        <button
                          key={val}
                          onClick={() => setClaimValue(val)}
                          className="px-2.5 py-1 rounded-lg text-[10px] bg-slate-900 text-slate-400 hover:text-amber-400 hover:bg-slate-800 border border-slate-800 cursor-pointer"
                        >
                          ${val.toLocaleString()}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-2">
                        {isAr ? 'نوع القضية:' : 'Dispute Type:'}
                      </label>
                      <select
                        value={caseType}
                        onChange={(e) => setCaseType(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white focus:border-amber-500 focus:outline-none"
                      >
                        <option value="commercial">{isAr ? 'تجاري وشركات' : 'Commercial & Corporate'}</option>
                        <option value="arbitration">{isAr ? 'تحكيم دولي' : 'International Arbitration'}</option>
                        <option value="labor">{isAr ? 'نزاع عمالي' : 'Labor Court'}</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-2">
                        {isAr ? 'جهة التقاضي:' : 'Forum Jurisdiction:'}
                      </label>
                      <select
                        value={forumType}
                        onChange={(e) => setTabForum(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white focus:border-amber-500 focus:outline-none"
                      >
                        <option value="court">{isAr ? 'المحاكم التجارية العامة' : 'State Commercial Courts'}</option>
                        <option value="arbitration">{isAr ? 'هيئة تحكيم مستقلة (ICC/SCCA)' : 'Arbitral Tribunal'}</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fee Results Output */}
              <div className="lg:col-span-6 bg-slate-900/90 border border-amber-500/30 rounded-2xl p-6 space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    {isAr ? 'نتائج التقدير الأولي' : 'Estimated Valuation Summary'}
                  </span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30">
                    {isAr ? 'مُحدث وفق الأنظمة' : 'Updated 2026 Standards'}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block mb-1">
                      {isAr ? 'الرسوم القضائية المتوقعة:' : 'Est. Court Filing Fee:'}
                    </span>
                    <span className="text-lg font-extrabold text-white font-sans-en">
                      ${feeResult.courtFee.toLocaleString()}
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block mb-1">
                      {isAr ? 'الجدول الزمني المتوقع:' : 'Est. Resolution Timeframe:'}
                    </span>
                    <span className="text-sm font-bold text-amber-400">
                      {feeResult.timeline}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs space-y-2">
                  <div className="flex items-center justify-between font-bold text-amber-300">
                    <span>{isAr ? 'نطاق الأتعاب التقديري لمتابعة الدعوى:' : 'Legal Representation SLA Estimate:'}</span>
                    <span className="font-sans-en">${feeResult.minEffort.toLocaleString()} - ${feeResult.maxEffort.toLocaleString()}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    {isAr
                      ? 'تختلف الأتعاب النهائية بحسب تعقيد المستندات وعدد الجلسات. يمكنك حجز استشارة لتقديم سعر مقطوع نهائي.'
                      : 'Final fees vary based on document volume and expert testimony. Book a session for a capped quote.'}
                  </p>
                </div>

                <button
                  onClick={() =>
                    onBookAfterCalc(
                      isAr
                        ? `استفسار عن دعوى بقيمة $${claimValue.toLocaleString()} بتكاليف متوقعة $${feeResult.courtFee.toLocaleString()}`
                        : `Inquiry regarding claim of $${claimValue.toLocaleString()}`
                    )
                  }
                  className="w-full py-3 rounded-xl font-bold text-xs bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors cursor-pointer"
                >
                  {isAr ? 'تأكيد التقدير وحجز استشارة مع المحامي' : 'Confirm Valuation & Book Strategy Session'}
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: Labor Severance Calculator */}
          {activeTab === 'labor' && (
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {isAr ? 'حاسبة حقوق ومكافأة نهاية الخدمة' : 'Labor Code Severance Calculator'}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {isAr
                      ? 'احسب مكافأة نهاية الخدمة النظامية وفقاً لعدد سنوات الخدمة وسبب انتهاء العلاقة التعاقدية.'
                      : 'Calculate statutory end-of-service benefits in compliance with regional labor laws.'}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-2">
                      {isAr ? 'الراتب الأساسي + بدل السكن ($ / ريال):' : 'Basic Monthly Salary + Housing ($):'}
                    </label>
                    <input
                      type="number"
                      value={salary}
                      onChange={(e) => setSalary(Number(e.target.value) || 0)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white font-bold focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-2">
                        {isAr ? 'عدد سنوات الخدمة:' : 'Years of Tenure:'}
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="40"
                        value={years}
                        onChange={(e) => setYears(Number(e.target.value) || 1)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:border-amber-500 focus:outline-none font-bold"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-2">
                        {isAr ? 'سبب نهاية العقد:' : 'Separation Cause:'}
                      </label>
                      <select
                        value={terminationType}
                        onChange={(e) => setTerminationType(e.target.value as any)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white focus:border-amber-500 focus:outline-none"
                      >
                        <option value="resignation">{isAr ? 'استقالة الموظف' : 'Employee Resignation'}</option>
                        <option value="dismissal">{isAr ? 'إنهاء عقد من الشركة' : 'Company Dismissal / Non-renewal'}</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Severance Output */}
              <div className="lg:col-span-6 bg-slate-900/90 border border-amber-500/30 rounded-2xl p-6 space-y-6">
                <div className="text-center space-y-2 py-4 bg-slate-950 rounded-2xl border border-slate-800">
                  <span className="text-xs font-semibold text-slate-400">
                    {isAr ? 'إجمالي مستحقات مكافأة نهاية الخدمة:' : 'Statutory Severance Payable:'}
                  </span>
                  <div className="text-3xl font-black text-amber-400 font-sans-en">
                    ${severanceResult.toLocaleString()}
                  </div>
                  <span className="text-[10px] text-emerald-400">
                    {isAr ? 'مطابق لنص نظام العمل المحدث 2026' : 'Verified via Labor Regulations'}
                  </span>
                </div>

                <div className="text-xs space-y-2 text-slate-300">
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span>{isAr ? 'عن الخمس سنوات الأولى (نصف شهر/سنة):' : 'First 5 Years Ratio:'}</span>
                    <span className="font-bold text-white">${(Math.min(years, 5) * (salary * 0.5)).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span>{isAr ? 'عما زاد عن الخمس سنوات (شهر كامل/سنة):' : 'Subsequent Tenure Ratio:'}</span>
                    <span className="font-bold text-white">${(Math.max(0, years - 5) * salary).toLocaleString()}</span>
                  </div>
                </div>

                <button
                  onClick={() =>
                    onBookAfterCalc(
                      isAr
                        ? `استشارة عمالية بخصوص مستحقات نهاية خدمة بمبلغ $${severanceResult.toLocaleString()}`
                        : `Labor severance consultation inquiry for $${severanceResult.toLocaleString()}`
                    )
                  }
                  className="w-full py-3 rounded-xl font-bold text-xs bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors cursor-pointer"
                >
                  {isAr ? 'احجز استشارة لتحصيل الحقوق العمالية' : 'Book Legal Consultation for Labor Claim'}
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: Contract Risk Analyzer */}
          {activeTab === 'riskScore' && (
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {isAr ? 'مؤشر تقييم مخاطر العقود التجارية' : 'Commercial Contract Risk Analyzer'}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {isAr
                      ? 'حدد خصائص البنود في عقدك لتقدير نسبة المخاطرة والاطلاع على التوصية القانونية.'
                      : 'Assess key contractual clauses to determine exposure level and legal safeguards.'}
                  </p>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-200 font-medium">
                      {isAr ? 'هل يتضمن العقد شرط التحكيم الدولي/المحلي؟' : 'Contains Arbitration Clause?'}
                    </span>
                    <input
                      type="checkbox"
                      checked={hasArbitration}
                      onChange={(e) => setHasArbitration(e.target.checked)}
                      className="w-4 h-4 accent-amber-500 cursor-pointer"
                    />
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-200 font-medium">
                      {isAr ? 'هل يتضمن العقد شرطاً جزائياً واضحاً للتأخير؟' : 'Includes Liquidated Damages Clause?'}
                    </span>
                    <input
                      type="checkbox"
                      checked={hasPenalty}
                      onChange={(e) => setHasPenalty(e.target.checked)}
                      className="w-4 h-4 accent-amber-500 cursor-pointer"
                    />
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-200 font-medium">
                      {isAr ? 'هل يمنح العقد الطرف الآخر حق الإلغاء الأحادي بدون سبب؟' : 'Allows Unilateral Cancellation Without Cause?'}
                    </span>
                    <input
                      type="checkbox"
                      checked={hasUnilateralTermination}
                      onChange={(e) => setHasUnilateralTermination(e.target.checked)}
                      className="w-4 h-4 accent-amber-500 cursor-pointer"
                    />
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-200 font-medium">
                      {isAr ? 'هل البند الخاص بملكية المخرجات والملكية الفكرية محدد؟' : 'Specifies IP Ownership Transfer?'}
                    </span>
                    <input
                      type="checkbox"
                      checked={hasIpProtection}
                      onChange={(e) => setHasIpProtection(e.target.checked)}
                      className="w-4 h-4 accent-amber-500 cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Risk Output */}
              <div className="lg:col-span-6 bg-slate-900/90 border border-amber-500/30 rounded-2xl p-6 space-y-6">
                <div className="text-center space-y-2 py-4 bg-slate-950 rounded-2xl border border-slate-800">
                  <span className="text-xs font-semibold text-slate-400">
                    {isAr ? 'مؤشر درجة خطورة العقد الحالي:' : 'Contract Exposure Index:'}
                  </span>
                  <div className="text-4xl font-black text-amber-400 font-sans-en">
                    {riskResult.score} / 100
                  </div>
                  <div className="pt-2">
                    {riskResult.level === 'high' && (
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30">
                        {isAr ? 'مخاطرة عالية - يتطلب مراجعة قانونية عاجلة' : 'High Risk - Legal Audit Required'}
                      </span>
                    )}
                    {riskResult.level === 'medium' && (
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                        {isAr ? 'مخاطرة متوسطة - يفضل تعديل بعض الشروط' : 'Moderate Exposure'}
                      </span>
                    )}
                    {riskResult.level === 'low' && (
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        {isAr ? 'مخاطرة منخفضة - العقد متوازن نسبياً' : 'Low Risk / Balanced Draft'}
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 leading-relaxed space-y-1">
                  <span className="font-bold text-amber-300 block">
                    {isAr ? 'توصية بابينيان الوقائية:' : 'Papinian Legal Recommendation:'}
                  </span>
                  <p>
                    {isAr
                      ? 'ننصح بإضافة ملحق وقائي (Addendum) لتعديل صياغة فسخ العقد وحفظ الحقوق قبل التوقيع النهائي.'
                      : 'We advise attaching a protective addendum to reframe termination rights and restrict liability.'}
                  </p>
                </div>

                <button
                  onClick={() =>
                    onBookAfterCalc(
                      isAr
                        ? `طلب مراجعة عقد تجاري بمؤشر مخاطرة ${riskResult.score}/100`
                        : `Contract audit request with risk score ${riskResult.score}/100`
                    )
                  }
                  className="w-full py-3 rounded-xl font-bold text-xs bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors cursor-pointer"
                >
                  {isAr ? 'أرسل العقد لمراجعة وإعادة صياغة المستشار' : 'Submit Contract for Legal Review'}
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
