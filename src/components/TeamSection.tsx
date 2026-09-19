import React, { useState } from 'react';
import { Language, TeamMember } from '../types';
import { TEAM_MEMBERS } from '../data/mockData';
import {
  GraduationCap,
  Award,
  Mail,
  X,
  Calendar
} from 'lucide-react';

interface TeamSectionProps {
  lang: Language;
  onOpenBookingWithMember: (memberId: string) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({
  lang,
  onOpenBookingWithMember
}) => {
  const [activeMemberModal, setActiveMemberModal] = useState<TeamMember | null>(null);
  const isAr = lang === 'ar';

  return (
    <section id="team" className="py-24 bg-slate-900/40 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20">
            {isAr ? 'فريق كبار المستشارين والشركاء' : 'Senior Partners & Elite Counsel'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {isAr ? (
              <>
                نخبة من <span className="gold-gradient-text">عقول المحاماة والتحكيم الدولي</span>
              </>
            ) : (
              <>
                Harvard & Oxford Minded <span className="gold-gradient-text">Legal Leadership</span>
              </>
            )}
          </h2>
          <p className="text-sm text-slate-300">
            {isAr
              ? 'تضم بابينيان شركاء يمتلكون مؤهلات علمية رفيعة من أعرق الجامعات العالمية وخبراء ترافَعوا في أضخم القضايا الإقليمية والدولية.'
              : 'Our partners hold advanced degrees from Harvard, Oxford, and Sorbonne, leading benchmark cases in arbitration and corporate law.'}
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              onClick={() => setActiveMemberModal(member)}
              className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between cursor-pointer group hover:border-amber-500/50 relative"
            >
              <div>
                {/* Member Photo */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={isAr ? member.nameAr : member.nameEn}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                  <span className="absolute top-3 right-3 text-[10px] font-bold bg-amber-500 text-slate-950 px-2.5 py-1 rounded-full shadow-md">
                    {isAr ? `${member.experienceYears} عاماً من الخبرة` : `${member.experienceYears} Yrs Exp.`}
                  </span>
                </div>

                {/* Member Info */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                      {isAr ? member.nameAr : member.nameEn}
                    </h3>
                    <p className="text-xs text-amber-400/90 font-medium line-clamp-1 mt-0.5">
                      {isAr ? member.roleAr : member.roleEn}
                    </p>
                  </div>

                  {/* Specialties Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {(isAr ? member.specialtiesAr : member.specialtiesEn).slice(0, 3).map((spec, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-slate-900 text-slate-300 px-2 py-0.5 rounded-md border border-slate-800"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-5 pt-0">
                <button className="w-full py-2.5 rounded-xl text-xs font-bold bg-slate-900 group-hover:bg-amber-500 group-hover:text-slate-950 text-amber-300 border border-slate-800 transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{isAr ? 'عرض السيرة وحجز جلسة' : 'View Bio & Book Session'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Member Full Bio Modal */}
      {activeMemberModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-xl animate-fade-in">
          <div className="relative w-full max-w-3xl bg-slate-900 border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-4">
                <img
                  src={activeMemberModal.image}
                  alt={isAr ? activeMemberModal.nameAr : activeMemberModal.nameEn}
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-amber-400/50"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {isAr ? activeMemberModal.nameAr : activeMemberModal.nameEn}
                  </h3>
                  <p className="text-xs font-semibold text-amber-400">
                    {isAr ? activeMemberModal.roleAr : activeMemberModal.roleEn}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setActiveMemberModal(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1.5">
                  {isAr ? 'نبذة استشارية:' : 'Executive Biography:'}
                </h4>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {isAr ? activeMemberModal.bioAr : activeMemberModal.bioEn}
                </p>
              </div>

              {/* Education */}
              <div>
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4" />
                  <span>{isAr ? 'المؤهلات الأكاديمية:' : 'Academic Degrees & Credentials:'}</span>
                </h4>
                <div className="space-y-1.5">
                  {(isAr ? activeMemberModal.educationAr : activeMemberModal.educationEn).map((edu, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-center gap-2"
                    >
                      <Award className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{edu}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Booking CTA */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span className="font-sans-en">{activeMemberModal.email}</span>
                </div>

                <button
                  onClick={() => {
                    const memberId = activeMemberModal.id;
                    setActiveMemberModal(null);
                    onOpenBookingWithMember(memberId);
                  }}
                  className="px-6 py-3 rounded-xl font-bold text-xs bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors cursor-pointer flex items-center gap-2 shadow-lg shadow-amber-500/20"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{isAr ? `حجز استشارة مخصصة مع ${activeMemberModal.nameAr}` : 'Book Direct Consultation'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
