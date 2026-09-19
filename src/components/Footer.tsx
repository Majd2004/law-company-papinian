import React from 'react';
import { Language } from '../types';
import { Scale, ShieldCheck } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onOpenSitePlan: () => void;
  onTriggerEmergency: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onOpenSitePlan,
  onTriggerEmergency
}) => {
  const isAr = lang === 'ar';

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">

          {/* Col 1: Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-700 p-0.5">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Scale className="w-5 h-5 text-amber-400" />
                </div>
              </div>
              <span className="text-xl font-black text-white font-sans-en tracking-tight">
                PAPINIAN
                <span className="text-amber-400 text-xs font-cairo mr-1 font-bold">
                  {isAr ? 'للمحاماة' : 'LAW'}
                </span>
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              {isAr
                ? 'شركة بابينيان للمحاماة والاستشارات القانونية - تأسست لتجسيد قيم الفقه والعدالة الأصيلة بأرقى وسائل التكنولوجيا الحديثة وحماية الاستثمارات العابرة للحدود.'
                : 'Papinian Law Firm & Legal Consultants - Championing high-stakes corporate advocacy, M&A due diligence, and international arbitration.'}
            </p>

            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
              <div className="text-[11px] font-bold text-amber-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{isAr ? 'التراخيص والاعتمادات الرسمية:' : 'Regulatory Registrations:'}</span>
              </div>
              <p className="text-[10px] text-slate-400 leading-normal">
                {isAr
                  ? 'شركة محاماة مهنية مرخصة من الهيئة السعودية للمحامين برقم (44/8900) وسلطة دبي الماليّة (DIFC Academy) وهيئة تنظيم المحامين ببريطانيا (SRA ID: 981204).'
                  : 'Licensed Professional Law Corporation (SBA Reg: 44/8900, DIFC Courts Registered, UK SRA ID: 981204).'}
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {isAr ? 'أقسام الموقع' : 'Navigation'}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  {isAr ? 'عن شركة بابينيان' : 'About Papinian'}
                </a>
              </li>
              <li>
                <a href="#practice-areas" className="hover:text-amber-400 transition-colors">
                  {isAr ? 'مجالات الممارسة' : 'Practice Areas'}
                </a>
              </li>
              <li>
                <a href="#legal-calculators" className="hover:text-amber-400 transition-colors">
                  {isAr ? 'الحاسبات التفاعلية' : 'Calculators Engine'}
                </a>
              </li>
              <li>
                <a href="#smart-contracts" className="hover:text-amber-400 transition-colors">
                  {isAr ? 'مولّد العقود الذكية' : 'Smart Contract Studio'}
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-amber-400 transition-colors">
                  {isAr ? 'كبار المستشارين' : 'Legal Partners'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {isAr ? 'التخصصات القضائية' : 'Core Practices'}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#practice-areas" className="hover:text-amber-400 transition-colors">
                  {isAr ? 'التحكيم التجاري الدولي' : 'International Arbitration'}
                </a>
              </li>
              <li>
                <a href="#practice-areas" className="hover:text-amber-400 transition-colors">
                  {isAr ? 'الاندماج والاستحواذ M&A' : 'M&A Advisory'}
                </a>
              </li>
              <li>
                <a href="#practice-areas" className="hover:text-amber-400 transition-colors">
                  {isAr ? 'حماية الملكية والذكاء الاصطناعي' : 'IP & AI Regulatory'}
                </a>
              </li>
              <li>
                <a href="#practice-areas" className="hover:text-amber-400 transition-colors">
                  {isAr ? 'عقود الهندسة والمقاولات FIDIC' : 'FIDIC Construction'}
                </a>
              </li>
              <li>
                <a href="#practice-areas" className="hover:text-amber-400 transition-colors">
                  {isAr ? 'قضايا الإفلاس والتنفيذ' : 'Insolvency & Execution'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Action */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {isAr ? 'أدوات الوصول السريع' : 'Emergency & Tools'}
            </h4>
            <div className="space-y-2.5">
              <button
                onClick={onOpenSitePlan}
                className="w-full py-2 px-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] font-bold hover:bg-amber-500/20 text-start cursor-pointer"
              >
                {isAr ? 'خطة ومعمارية الموقع الشاملة' : 'View Site Blueprint Roadmap'}
              </button>

              <button
                onClick={onTriggerEmergency}
                className="w-full py-2 px-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-[11px] font-bold hover:bg-rose-500/20 text-start cursor-pointer"
              >
                {isAr ? 'خلية الطوارئ القضائية 24/7' : '24/7 Emergency Taskforce'}
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px]">
          <p className="text-slate-500 text-center md:text-start">
            © 2026 {isAr ? 'شركة بابينيان للمحاماة والاستشارات القانونية. جميع الحقوق محفوظة.' : 'Papinian Law Firm & Legal Consultants. All rights reserved.'}
          </p>

          <div className="flex items-center gap-4 text-slate-500">
            <a href="#" className="hover:text-amber-400 transition-colors">
              {isAr ? 'سياسة الخصوصية والتشفير' : 'Privacy Policy'}
            </a>
            <span>•</span>
            <a href="#" className="hover:text-amber-400 transition-colors">
              {isAr ? 'شروط الاستخدام والخدمة' : 'Terms of Service'}
            </a>
            <span>•</span>
            <a href="#" className="hover:text-amber-400 transition-colors">
              {isAr ? 'إخلاء المسؤولية القانونية' : 'Legal Disclaimer'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
