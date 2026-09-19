import React, { useState } from 'react';
import { Language, SmartContractTemplate } from '../types';
import { SMART_CONTRACT_TEMPLATES } from '../data/mockData';
import {
  FileText,
  Printer,
  CheckCircle2,
  Lock,
  Download,
  SlidersHorizontal
} from 'lucide-react';

interface SmartContractsHubProps {
  lang: Language;
}

export const SmartContractsHub: React.FC<SmartContractsHubProps> = ({ lang }) => {
  const [selectedTemplate, setSelectedTemplate] = useState<SmartContractTemplate>(
    SMART_CONTRACT_TEMPLATES[0]
  );
  const [partyA, setPartyA] = useState<string>(SMART_CONTRACT_TEMPLATES[0].defaultPartyA);
  const [partyB, setPartyB] = useState<string>(SMART_CONTRACT_TEMPLATES[0].defaultPartyB);
  const [selectedClauses, setSelectedClauses] = useState<string[]>([]);

  const isAr = lang === 'ar';

  const handleSelectTemplate = (tpl: SmartContractTemplate) => {
    setSelectedTemplate(tpl);
    setPartyA(tpl.defaultPartyA);
    setPartyB(tpl.defaultPartyB);
    setSelectedClauses([]);
  };

  const toggleClause = (clauseId: string) => {
    if (selectedClauses.includes(clauseId)) {
      setSelectedClauses(selectedClauses.filter((c) => c !== clauseId));
    } else {
      setSelectedClauses([...selectedClauses, clauseId]);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="smart-contracts" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20">
            {isAr ? 'مركز النماذج والعقود الذكية' : 'Smart Contract Studio'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {isAr ? (
              <>
                مولّد العقود النموذجية <span className="gold-gradient-text">بمعاينة فورية وطباعة مباشرة</span>
              </>
            ) : (
              <>
                Customizable Smart Contracts <span className="gold-gradient-text">& Instant Draft Export</span>
              </>
            )}
          </h2>
          <p className="text-sm text-slate-300">
            {isAr
              ? 'قم بتعيين أطراف العقد وإضافة البنود الجزائية والتحكيمية واستخراج مسودة عقد احترافية جاهزة للاستخدام أو المراجعة.'
              : 'Customize parties, add arbitration & liquidated damage clauses, and export professional legal drafts.'}
          </p>
        </div>

        {/* Contract Studio Workspace */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Controls */}
          <div className="lg:col-span-5 space-y-6">
            {/* Template Picker */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                {isAr ? '1. اختر نموذج العقد المطلوبة:' : '1. Select Contract Template:'}
              </label>
              <div className="space-y-2">
                {SMART_CONTRACT_TEMPLATES.map((tpl) => (
                  <button
                    key={tpl.id}
                    onClick={() => handleSelectTemplate(tpl)}
                    className={`w-full text-start p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                      selectedTemplate.id === tpl.id
                        ? 'bg-amber-500/20 border-amber-500 text-white font-bold shadow-md'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-amber-400 shrink-0" />
                      <div>
                        <div className="text-xs font-bold">{isAr ? tpl.titleAr : tpl.titleEn}</div>
                        <div className="text-[10px] text-slate-400">{isAr ? tpl.categoryAr : tpl.categoryEn}</div>
                      </div>
                    </div>
                    {selectedTemplate.id === tpl.id && (
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Parties Setup */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 text-xs">
              <label className="font-bold text-amber-400 uppercase tracking-wider block">
                {isAr ? '2. بيانات وأسماء الأطراف:' : '2. Contract Parties Setup:'}
              </label>

              <div>
                <span className="text-slate-400 block mb-1">{isAr ? 'اسم الطرف الأول:' : 'Party A (First Party):'}</span>
                <input
                  type="text"
                  value={partyA}
                  onChange={(e) => setPartyA(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white font-semibold focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <span className="text-slate-400 block mb-1">{isAr ? 'اسم الطرف الثاني:' : 'Party B (Second Party):'}</span>
                <input
                  type="text"
                  value={partyB}
                  onChange={(e) => setPartyB(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white font-semibold focus:border-amber-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Optional Clause Toggles */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 text-xs">
              <label className="font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <SlidersHorizontal className="w-4 h-4" />
                <span>{isAr ? '3. تفعيل الشروط الوقائية الإضافية:' : '3. Add Protective Clauses:'}</span>
              </label>

              {selectedTemplate.clauseOptions.map((clause) => (
                <label
                  key={clause.id}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer hover:border-slate-700 transition-colors"
                >
                  <span className="text-slate-200 font-medium">
                    {isAr ? clause.labelAr : clause.labelEn}
                  </span>
                  <input
                    type="checkbox"
                    checked={selectedClauses.includes(clause.id)}
                    onChange={() => toggleClause(clause.id)}
                    className="w-4 h-4 accent-amber-500 cursor-pointer"
                  />
                </label>
              ))}
            </div>
          </div>

          {/* Right Live Preview Box */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-amber-500/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <span className="text-xs font-bold text-slate-300 ml-2">
                    {isAr ? 'المعاينة المباشرة للعقد' : 'Live Document Preview'}
                  </span>
                </div>

                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold hover:bg-amber-500 hover:text-slate-950 transition-all cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>{isAr ? 'طباعة / حفظ كـ PDF' : 'Print Draft'}</span>
                </button>
              </div>

              {/* Document Sheet Simulation */}
              <div id="printable-contract" className="p-6 rounded-2xl bg-slate-950 border border-slate-800 text-slate-200 text-xs space-y-4 font-cairo shadow-inner min-h-[350px]">
                <div className="text-center pb-4 border-b border-slate-800">
                  <h4 className="text-base font-extrabold text-white">
                    {isAr ? selectedTemplate.titleAr : selectedTemplate.titleEn}
                  </h4>
                  <p className="text-[10px] text-amber-400 mt-1">
                    {isAr ? 'نموذج عقد معتمد قانونياً لدى شركة بابينيان للمحاماة' : 'Papinian Certified Contract Specification'}
                  </p>
                </div>

                {/* Parties Header */}
                <div className="grid grid-cols-2 gap-4 p-3 bg-slate-900 rounded-xl border border-slate-800 text-[11px]">
                  <div>
                    <span className="text-slate-400 block font-semibold">{isAr ? 'الطرف الأول:' : 'Party A:'}</span>
                    <span className="font-bold text-amber-300">{partyA}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-semibold">{isAr ? 'الطرف الثاني:' : 'Party B:'}</span>
                    <span className="font-bold text-amber-300">{partyB}</span>
                  </div>
                </div>

                {/* Standard Terms */}
                <div className="space-y-2">
                  <span className="font-bold text-amber-400 block">
                    {isAr ? 'البنود والأحكام الأساسية:' : 'Standard Articles:'}
                  </span>
                  <ul className="list-disc list-inside space-y-1.5 text-slate-300 text-[11px] leading-relaxed">
                    {(isAr ? selectedTemplate.defaultTermsAr : selectedTemplate.defaultTermsEn).map(
                      (term, idx) => (
                        <li key={idx}>{term}</li>
                      )
                    )}
                  </ul>
                </div>

                {/* Optional Selected Clauses */}
                {selectedClauses.length > 0 && (
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <span className="font-bold text-amber-400 block">
                      {isAr ? 'الشروط التكميلية المضافة:' : 'Protective Addendums:'}
                    </span>
                    {selectedTemplate.clauseOptions
                      .filter((c) => selectedClauses.includes(c.id))
                      .map((c) => (
                        <div
                          key={c.id}
                          className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-200"
                        >
                          {isAr ? c.textAr : c.textEn}
                        </div>
                      ))}
                  </div>
                )}

                <div className="pt-4 border-t border-slate-800 flex justify-between text-[10px] text-slate-500">
                  <span>{isAr ? 'تاريخ المسودة: 2026' : 'Draft Date: 2026'}</span>
                  <span>{isAr ? 'مشفر ومحمي برمز بابينيان' : 'Encrypted Papinian Hash'}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-slate-400 flex items-center gap-1 text-[11px]">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                {isAr ? 'العقد متاح للتعديل والمراجعة المجانية' : 'Free Customizable Legal Draft'}
              </span>

              <button
                onClick={handlePrint}
                className="px-5 py-2.5 rounded-xl font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <Download className="w-4 h-4" />
                <span>{isAr ? 'تصدير العقد النهائي' : 'Export Legal Contract'}</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
