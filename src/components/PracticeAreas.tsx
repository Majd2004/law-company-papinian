import React, { useState } from 'react';
import { Language, PracticeArea } from '../types';
import { PRACTICE_AREAS } from '../data/mockData';
import {
  Building2,
  Scale,
  Cpu,
  Gavel,
  Building,
  ShieldAlert,
  Search,
  ArrowRight,
  ArrowLeft,
  X,
  CheckCircle,
  UserCheck
} from 'lucide-react';

interface PracticeAreasProps {
  lang: Language;
  onOpenBookingWithArea: (areaId: string) => void;
}

export const PracticeAreas: React.FC<PracticeAreasProps> = ({
  lang,
  onOpenBookingWithArea
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalArea, setActiveModalArea] = useState<PracticeArea | null>(null);

  const isAr = lang === 'ar';

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return Building2;
      case 'Scale': return Scale;
      case 'Cpu': return Cpu;
      case 'Gavel': return Gavel;
      case 'Building': return Building;
      case 'ShieldAlert': return ShieldAlert;
      default: return Scale;
    }
  };

  const filteredAreas = PRACTICE_AREAS.filter((area) => {
    const matchesCategory = selectedCategory === 'all' || area.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const title = (isAr ? area.titleAr : area.titleEn).toLowerCase();
    const desc = (isAr ? area.shortDescAr : area.shortDescEn).toLowerCase();
    const matchesSearch = !query || title.includes(query) || desc.includes(query);
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="practice-areas" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20">
            {isAr ? 'التخصصات والخدمات القضائية' : 'Practice Areas & Specializations'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {isAr ? (
              <>
                خدمات قانونية متكاملة <span className="gold-gradient-text">لأعقد القضايا والقطاعات</span>
              </>
            ) : (
              <>
                Tailored Solutions for <span className="gold-gradient-text">High-Stakes Legal Matters</span>
              </>
            )}
          </h2>
          <p className="text-sm text-slate-300">
            {isAr
              ? 'تغطي كفاءات فريق بابينيان حزمة شمولية من التخصصات الاستشارية والقضائية وفق أحدث الأنظمة والقواعد المعمول بها عالمياً.'
              : 'Our specialized practice teams handle complex commercial litigations, M&As, IP protections, and cross-border arbitrations.'}
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-slate-900/80 p-4 rounded-2xl border border-slate-800 backdrop-blur-md">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', labelAr: 'الكل', labelEn: 'All Services' },
              { id: 'corporate', labelAr: 'حوكمة والشركات', labelEn: 'Corporate & M&A' },
              { id: 'international', labelAr: 'التحكيم الدولي', labelEn: 'International Arbitration' },
              { id: 'litigation', labelAr: 'التقاضي والدفاع', labelEn: 'Litigation' },
              { id: 'digital', labelAr: 'الملكية والتقنية', labelEn: 'IP & Tech Law' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                    : 'bg-slate-950 text-slate-300 hover:bg-slate-800'
                }`}
              >
                {isAr ? tab.labelAr : tab.labelEn}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 rtl:left-auto rtl:right-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isAr ? 'ابحث في الخدمات والتخصصات...' : 'Search practice areas...'}
              className="w-full bg-slate-950 border border-slate-700 focus:border-amber-500 rounded-xl py-2 px-9 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Practice Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAreas.map((area) => {
            const IconComponent = getIcon(area.iconName);
            return (
              <div
                key={area.id}
                onClick={() => setActiveModalArea(area)}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between cursor-pointer group hover:border-amber-500/40 relative overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-bold text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                      {isAr ? area.leadCounselAr : area.leadCounselEn}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                      {isAr ? area.titleAr : area.titleEn}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                      {isAr ? area.shortDescAr : area.shortDescEn}
                    </p>
                  </div>

                  {/* Highlights Bullet summary */}
                  <div className="pt-2 space-y-1.5">
                    {(isAr ? area.featuresAr : area.featuresEn).slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-[11px] text-slate-400">
                        <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-amber-400 group-hover:text-amber-300">
                  <span>{isAr ? 'عرض التفاصيل ونطاق العمل' : 'View Scope & Details'}</span>
                  {isAr ? (
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  ) : (
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Area Detail Modal */}
      {activeModalArea && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl animate-fade-in">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  {React.createElement(getIcon(activeModalArea.iconName), { className: 'w-5 h-5' })}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {isAr ? activeModalArea.titleAr : activeModalArea.titleEn}
                  </h3>
                  <span className="text-xs text-amber-400">
                    {isAr ? 'تخصص قانوني معتمد لدى بابينيان' : 'Certified Practice Department'}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setActiveModalArea(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-slate-200 leading-relaxed">
                {isAr ? activeModalArea.fullDescAr : activeModalArea.fullDescEn}
              </p>

              <div>
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                  {isAr ? 'نطاق الخدمات والمهام التي نغطيها:' : 'Included Scope of Services:'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {(isAr ? activeModalArea.featuresAr : activeModalArea.featuresEn).map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <UserCheck className="w-5 h-5 text-amber-400" />
                  <div>
                    <span className="text-[11px] text-slate-400 block">
                      {isAr ? 'المستشار المسؤول عن القسم:' : 'Lead Senior Counsel:'}
                    </span>
                    <span className="text-sm font-bold text-white">
                      {isAr ? activeModalArea.leadCounselAr : activeModalArea.leadCounselEn}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    const areaId = activeModalArea.id;
                    setActiveModalArea(null);
                    onOpenBookingWithArea(areaId);
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 text-slate-950 hover:bg-amber-400 transition-colors cursor-pointer"
                >
                  {isAr ? 'طلب استشارة بهذا التخصص' : 'Consult in this Area'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
