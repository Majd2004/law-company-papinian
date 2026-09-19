import React from 'react';
import { Language } from '../types';
import { ShieldAlert, PhoneCall, MessageCircle, X, Clock, Lock } from 'lucide-react';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({
  isOpen,
  onClose,
  lang
}) => {
  const isAr = lang === 'ar';

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-2xl animate-fade-in">
      <div className="relative w-full max-w-lg bg-slate-900 border-2 border-rose-500/50 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 text-center">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-16 h-16 rounded-full bg-rose-500/20 border border-rose-500/50 flex items-center justify-center text-rose-400 mx-auto animate-bounce">
          <ShieldAlert className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase bg-rose-500/20 text-rose-400 border border-rose-500/40 tracking-wider">
            {isAr ? 'غرفة الطوارئ والتدخل القضائي المستعجل' : '24/7 Emergency Legal Response'}
          </span>
          <h3 className="text-2xl font-black text-white">
            {isAr ? 'الخط المباشر للحالات الطارئة جداً' : 'Urgent Legal Emergency Hotline'}
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            {isAr
              ? 'مخصص لحالات الحجز التحفظي العاجل، الأوامر القضائية الفورية، القضايا التنفيذية الشديدة، والتحقيقات المستعجلة.'
              : 'Direct escalation line for urgent asset freezes, emergency injunctions, or immediate legal holds.'}
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
          <div className="text-xs font-semibold text-slate-400 flex items-center justify-center gap-1.5">
            <Clock className="w-4 h-4 text-rose-400 animate-spin" />
            <span>{isAr ? 'فريق الطوارئ متاح حالياً:' : 'Active Duty Partner On-Call:'}</span>
          </div>

          <a
            href="tel:+9668007274642"
            className="w-full py-3.5 rounded-xl font-black text-sm bg-gradient-to-r from-rose-500 to-amber-500 text-slate-950 flex items-center justify-center gap-2 shadow-lg shadow-rose-500/20 hover:scale-105 transition-transform"
          >
            <PhoneCall className="w-4 h-4" />
            <span className="font-mono text-base tracking-wider">+966 800 PAPINIAN (727-4642)</span>
          </a>

          <a
            href="https://wa.me/9668007274642?text=URGENT%20LEGAL%20EMERGENCY"
            target="_blank"
            rel="noreferrer"
            className="w-full py-3 rounded-xl font-bold text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center gap-2 hover:bg-emerald-500 hover:text-slate-950 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{isAr ? 'إرسال تنبيه عاجل عبر واتساب' : 'Dispatch Urgent WhatsApp Alert'}</span>
          </a>
        </div>

        <div className="text-[11px] text-slate-500 flex items-center justify-center gap-1">
          <Lock className="w-3.5 h-3.5 text-emerald-400" />
          <span>{isAr ? 'تواصل مشفر بضمانة السرية المهنية الكاملة' : 'Protected under Attorney-Client Privilege'}</span>
        </div>

      </div>
    </div>
  );
};
