import React, { useState } from 'react';
import { Language } from '../types';
import { TEAM_MEMBERS, PRACTICE_AREAS } from '../data/mockData';
import {
  Calendar,
  CheckCircle,
  FileUp,
  X,
  Lock,
  Building,
  Video,
  MapPin
} from 'lucide-react';

interface ConsultationBookingProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  preselectedAreaId?: string;
  preselectedMemberId?: string;
  prefilledSummary?: string;
}

export const ConsultationBooking: React.FC<ConsultationBookingProps> = ({
  isOpen,
  onClose,
  lang,
  preselectedAreaId,
  preselectedMemberId,
  prefilledSummary = ''
}) => {
  const [step, setStep] = useState<number>(1);
  const [meetingType, setMeetingType] = useState<'video' | 'inPerson' | 'siteVisit'>('video');
  const [selectedArea, setSelectedArea] = useState<string>(preselectedAreaId || PRACTICE_AREAS[0].id);
  const [selectedCounselor, setSelectedCounselor] = useState<string>(preselectedMemberId || TEAM_MEMBERS[0].id);
  const [selectedDate, setSelectedDate] = useState<string>('2026-03-05');
  const [selectedTime, setSelectedTime] = useState<string>('10:00 AM');

  // Form Details
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [caseSummary, setCaseSummary] = useState<string>(prefilledSummary);
  const [fileName, setFileName] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [refNumber, setRefNumber] = useState<string>('');

  const isAr = lang === 'ar';

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = `PAP-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefNumber(generatedRef);
    setIsSubmitted(true);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-xl overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 my-8">

        {/* Modal Top */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {isAr ? 'حجز استشارة قانونية مشفرة' : 'Encrypted Legal Consultation Booking'}
              </h3>
              <span className="text-xs text-emerald-400 flex items-center gap-1">
                <Lock className="w-3.5 h-3.5" />
                {isAr ? 'اتصال وتشفير آمن AES-256' : 'AES-256 Privileged Channel'}
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

        {/* Success Screen */}
        {isSubmitted ? (
          <div className="text-center py-8 space-y-6 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">
                {isAr ? 'تم استلام طلب الاستشارة بنجاح!' : 'Consultation Booking Confirmed!'}
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                {isAr
                  ? 'سيتواصل معك المساعد التنفيذي للمستشار لتأكيد تفاصيل اللقاء وإرسال رابط الجلسة المشفر.'
                  : 'Our legal executive assistant will reach out shortly with meeting coordinates.'}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 inline-block text-xs font-mono">
              <span className="text-slate-400 block mb-1">{isAr ? 'رقم مرجع الاستشارة:' : 'Reference ID:'}</span>
              <span className="text-lg font-bold text-amber-400">{refNumber}</span>
            </div>

            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-8 py-3 rounded-xl font-bold text-xs bg-amber-500 text-slate-950 hover:bg-amber-400 transition-colors cursor-pointer"
              >
                {isAr ? 'عودة للواجهة الرئيسية' : 'Return to Home'}
              </button>
            </div>
          </div>
        ) : (
          /* Multi-step Form */
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Step Indicators */}
            <div className="grid grid-cols-3 gap-2 text-center text-xs font-semibold pb-2 border-b border-slate-800/80">
              <div
                onClick={() => setStep(1)}
                className={`py-2 rounded-xl cursor-pointer transition-colors ${
                  step === 1 ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30 font-bold' : 'text-slate-500'
                }`}
              >
                1. {isAr ? 'نوع الاستشارة والتخصص' : 'Type & Specialty'}
              </div>
              <div
                onClick={() => setStep(2)}
                className={`py-2 rounded-xl cursor-pointer transition-colors ${
                  step === 2 ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30 font-bold' : 'text-slate-500'
                }`}
              >
                2. {isAr ? 'الموعد والمستشار' : 'Counselor & Date'}
              </div>
              <div
                onClick={() => setStep(3)}
                className={`py-2 rounded-xl cursor-pointer transition-colors ${
                  step === 3 ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30 font-bold' : 'text-slate-500'
                }`}
              >
                3. {isAr ? 'بيانات التواصل' : 'Contact Info'}
              </div>
            </div>

            {/* Step 1: Type & Specialty */}
            {step === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <label className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-3">
                    {isAr ? 'اختر طريقة اللقاء:' : 'Meeting Preference:'}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => setMeetingType('video')}
                      className={`p-4 rounded-2xl border text-start transition-all cursor-pointer space-y-2 ${
                        meetingType === 'video'
                          ? 'bg-amber-500/20 border-amber-500 text-white font-bold'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <Video className="w-5 h-5 text-amber-400" />
                      <div className="text-xs font-bold">{isAr ? 'جلسة مرئية مشفرة (عن بُعد)' : 'Encrypted Video Call'}</div>
                      <div className="text-[10px] text-slate-400">{isAr ? 'عبر منصتنا الخاصة' : 'Private Video Link'}</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setMeetingType('inPerson')}
                      className={`p-4 rounded-2xl border text-start transition-all cursor-pointer space-y-2 ${
                        meetingType === 'inPerson'
                          ? 'bg-amber-500/20 border-amber-500 text-white font-bold'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <Building className="w-5 h-5 text-amber-400" />
                      <div className="text-xs font-bold">{isAr ? 'حضوري بمقر الشركة' : 'In-Person Office Visit'}</div>
                      <div className="text-[10px] text-slate-400">{isAr ? 'الرياض / دبي / لندن' : 'KAFD / DIFC Office'}</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setMeetingType('siteVisit')}
                      className={`p-4 rounded-2xl border text-start transition-all cursor-pointer space-y-2 ${
                        meetingType === 'siteVisit'
                          ? 'bg-amber-500/20 border-amber-500 text-white font-bold'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <MapPin className="w-5 h-5 text-amber-400" />
                      <div className="text-xs font-bold">{isAr ? 'زيارة موقع العمل / المقر' : 'Corporate Site Visit'}</div>
                      <div className="text-[10px] text-slate-400">{isAr ? 'لكبار المجموعات والشركات' : 'Enterprise On-Site'}</div>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">
                    {isAr ? 'تخصص القضية أو الاستشارة:' : 'Select Specialty Area:'}
                  </label>
                  <select
                    value={selectedArea}
                    onChange={(e) => setSelectedArea(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white focus:border-amber-500 focus:outline-none"
                  >
                    {PRACTICE_AREAS.map((a) => (
                      <option key={a.id} value={a.id}>
                        {isAr ? a.titleAr : a.titleEn}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-6 py-2.5 rounded-xl font-bold text-xs bg-amber-500 text-slate-950 hover:bg-amber-400 cursor-pointer"
                  >
                    {isAr ? 'المتابعة وااختيار الموعد' : 'Next Step'}
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Counselor & Date */}
            {step === 2 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <label className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-3">
                    {isAr ? 'اختر المستشار المباشر:' : 'Select Lead Attorney:'}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {TEAM_MEMBERS.map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setSelectedCounselor(m.id)}
                        className={`p-3.5 rounded-2xl border text-start transition-all cursor-pointer flex items-center gap-3 ${
                          selectedCounselor === m.id
                            ? 'bg-amber-500/20 border-amber-500 text-white font-bold'
                            : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <img
                          src={m.image}
                          alt={m.nameAr}
                          className="w-10 h-10 rounded-xl object-cover border border-amber-400/40"
                        />
                        <div className="min-w-0">
                          <div className="text-xs font-bold truncate">{isAr ? m.nameAr : m.nameEn}</div>
                          <div className="text-[10px] text-amber-400 truncate">{isAr ? m.roleAr : m.roleEn}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">
                      {isAr ? 'التاريخ المطلوب:' : 'Select Preferred Date:'}
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">
                      {isAr ? 'التوقيت المتاح:' : 'Select Available Slot:'}
                    </label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white focus:border-amber-500 focus:outline-none"
                    >
                      <option value="10:00 AM">10:00 AM (صباحاً)</option>
                      <option value="01:30 PM">01:30 PM (ظهراً)</option>
                      <option value="04:00 PM">04:00 PM (عصراً)</option>
                      <option value="07:00 PM">07:00 PM (مساءً)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-5 py-2.5 rounded-xl font-bold text-xs bg-slate-800 text-slate-300 hover:bg-slate-700 cursor-pointer"
                  >
                    {isAr ? 'السابق' : 'Back'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="px-6 py-2.5 rounded-xl font-bold text-xs bg-amber-500 text-slate-950 hover:bg-amber-400 cursor-pointer"
                  >
                    {isAr ? 'المتابعة وتعبئة البيانات' : 'Next Step'}
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Contact & Notes */}
            {step === 3 && (
              <div className="space-y-4 animate-fade-in">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      {isAr ? 'الاسم الكامل أو اسم الشركة:' : 'Full Name / Entity:'}
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder={isAr ? 'أدخل اسمك هنا' : 'Enter full name'}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      {isAr ? 'رقم الجوال (واتساب):' : 'Phone / WhatsApp:'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+966 50 000 0000"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-amber-500 focus:outline-none font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    {isAr ? 'البريد الإلكتروني:' : 'Email Address:'}
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="client@company.com"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-amber-500 focus:outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    {isAr ? 'ملخص الاستشارة أو القضية:' : 'Case Context / Notes:'}
                  </label>
                  <textarea
                    rows={3}
                    value={caseSummary}
                    onChange={(e) => setCaseSummary(e.target.value)}
                    placeholder={isAr ? 'اكتب تفاصيل موجزة عن القضية أو الاستفسار...' : 'Brief summary of your legal inquiry...'}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-xs text-white focus:border-amber-500 focus:outline-none"
                  ></textarea>
                </div>

                {/* File attachment simulation */}
                <div className="p-3 rounded-xl bg-slate-950 border border-dashed border-slate-700 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-400">
                    <FileUp className="w-4 h-4 text-amber-400" />
                    <span>{fileName ? fileName : isAr ? 'إرفاق المستندات المبدئية (PDF/Docx - مشفر)' : 'Attach Preliminary Files'}</span>
                  </div>
                  <label className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 cursor-pointer font-medium text-[11px]">
                    {isAr ? 'تصفح' : 'Browse'}
                    <input type="file" onChange={handleFileUpload} className="hidden" />
                  </label>
                </div>

                <div className="pt-2 flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-5 py-2.5 rounded-xl font-bold text-xs bg-slate-800 text-slate-300 hover:bg-slate-700 cursor-pointer"
                  >
                    {isAr ? 'السابق' : 'Back'}
                  </button>

                  <button
                    type="submit"
                    className="px-8 py-3 rounded-xl font-bold text-xs bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors cursor-pointer shadow-lg shadow-amber-500/20"
                  >
                    {isAr ? 'تأكيد الحجز والإرسال المشفر' : 'Confirm Encrypted Booking'}
                  </button>
                </div>
              </div>
            )}

          </form>
        )}

      </div>
    </div>
  );
};
