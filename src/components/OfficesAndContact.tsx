import React, { useState } from 'react';
import { Language, OfficeLocation } from '../types';
import { OFFICE_LOCATIONS } from '../data/mockData';
import {
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Building,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface OfficesAndContactProps {
  lang: Language;
  onTriggerEmergency: () => void;
}

export const OfficesAndContact: React.FC<OfficesAndContactProps> = ({
  lang,
  onTriggerEmergency
}) => {
  const [selectedOffice, setSelectedOffice] = useState<OfficeLocation>(OFFICE_LOCATIONS[0]);
  const [formSent, setFormSent] = useState<boolean>(false);

  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const isAr = lang === 'ar';

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <section id="offices" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20">
            {isAr ? 'الفروع العالمية وقنوات التواصل' : 'Global Offices & Direct Contact'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {isAr ? (
              <>
                تواجد عابر للحدود <span className="gold-gradient-text">في أبرز المراكز المالية</span>
              </>
            ) : (
              <>
                Global Legal Presence in <span className="gold-gradient-text">Key Financial Capitals</span>
              </>
            )}
          </h2>
          <p className="text-sm text-slate-300">
            {isAr
              ? 'مقراتنا الاستشارية مجهزة لاستقبال كبار الموكلين ورجال الأعمال بالرياض، دبي، لندن، والكويت.'
              : 'Our executive legal suites are positioned in KAFD, DIFC, Mayfair London, and Kuwait City.'}
          </p>
        </div>

        {/* Offices Showcase Tabs */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          {/* City Selector Buttons */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">
              {isAr ? 'اختر الفرع:' : 'Select City Location:'}
            </span>

            {OFFICE_LOCATIONS.map((office) => (
              <button
                key={office.cityEn}
                onClick={() => setSelectedOffice(office)}
                className={`w-full text-start p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                  selectedOffice.cityEn === office.cityEn
                    ? 'bg-amber-500/20 border-amber-500 text-white font-bold shadow-lg'
                    : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Building className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <div className="text-sm font-bold flex items-center gap-2">
                      <span>{isAr ? office.cityAr : office.cityEn}</span>
                      {office.isHeadquarters && (
                        <span className="text-[10px] bg-amber-500 text-slate-950 font-bold px-1.5 py-0.5 rounded">
                          {isAr ? 'المقر الرئيسي' : 'HQ'}
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-slate-400">{isAr ? office.countryAr : office.countryEn}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Office Detail Card */}
          <div className="lg:col-span-8 bg-slate-900/90 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    <MapPin className="w-6 h-6 text-amber-400" />
                    <span>{isAr ? `فرع ${selectedOffice.cityAr}` : `${selectedOffice.cityEn} Office`}</span>
                  </h3>
                  <p className="text-xs text-amber-400/90 mt-1">{isAr ? selectedOffice.countryAr : selectedOffice.countryEn}</p>
                </div>

                <a
                  href={`https://wa.me/9668007274642?text=Inquiry%20from%20${selectedOffice.cityEn}%20Branch`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold hover:bg-emerald-500 hover:text-slate-950 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{isAr ? 'واتساب الفرع' : 'WhatsApp'}</span>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-slate-400 font-semibold block">{isAr ? 'العنوان التفصيلي:' : 'Address Location:'}</span>
                  <p className="text-slate-200 font-medium leading-relaxed">
                    {isAr ? selectedOffice.addressAr : selectedOffice.addressEn}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-slate-400 font-semibold block">{isAr ? 'أوقات العمل:' : 'Working Hours:'}</span>
                  <p className="text-slate-200 font-medium flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>{isAr ? selectedOffice.workingHoursAr : selectedOffice.workingHoursEn}</span>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-slate-400 font-semibold block">{isAr ? 'الهاتف المباشر:' : 'Direct Telephone:'}</span>
                  <p className="text-amber-400 font-bold font-mono text-sm">{selectedOffice.phone}</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-slate-400 font-semibold block">{isAr ? 'البريد الإلكتروني المباشر:' : 'Direct Email:'}</span>
                  <p className="text-amber-400 font-bold font-mono text-sm">{selectedOffice.email}</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                {isAr ? 'مقرات مجهزة بقاعات اجتماعات محميّة' : 'Privileged Conference Facilities'}
              </span>

              <button
                onClick={onTriggerEmergency}
                className="text-xs font-bold text-rose-400 hover:text-rose-300 underline cursor-pointer"
              >
                {isAr ? 'الاتصال بخط الطوارئ 24/7' : 'Trigger 24/7 Emergency Line'}
              </button>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl max-w-4xl mx-auto">
          <div className="text-center mb-6 space-y-1">
            <h3 className="text-xl font-bold text-white">
              {isAr ? 'أرسل استفسارك القانوني مباشرة للإدارة' : 'Direct Executive Inquiry Form'}
            </h3>
            <p className="text-xs text-slate-400">
              {isAr ? 'سيتم تحويل المراسلة فوراً للمستشار المختص بقطاع قضيّتك.' : 'Your message is securely routed to the senior partner in your legal domain.'}
            </p>
          </div>

          {formSent ? (
            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
              <h4 className="text-base font-bold text-white">
                {isAr ? 'تم إرسال الرسالة بنجاح!' : 'Inquiry Submitted Successfully'}
              </h4>
              <p className="text-xs text-slate-300">
                {isAr ? 'شكراً لتواصلك، سيتواصل معك فريق الاستشارات القانونية خلال ساعات.' : 'Thank you. Our legal team will respond shortly.'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSendMessage} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    {isAr ? 'الاسم الكريم:' : 'Full Name:'}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={isAr ? 'أدخل اسمك هنا' : 'Your name'}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    {isAr ? 'رقم الهاتف / الواتساب:' : 'Phone / WhatsApp:'}
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
                  {isAr ? 'موضوع الاستفسار:' : 'Inquiry Subject:'}
                </label>
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder={isAr ? 'مثال: استفسار عن صفقة استحواذ تجاري' : 'e.g., M&A Advisory Query'}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  {isAr ? 'تفاصيل الاستفسار أو القضية:' : 'Inquiry Details:'}
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={isAr ? 'اكتب تفاصيل الاستفسار هنا...' : 'State your question or legal situation...'}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-xs text-white focus:border-amber-500 focus:outline-none"
                ></textarea>
              </div>

              <div className="pt-2 text-center">
                <button
                  type="submit"
                  className="px-8 py-3 rounded-xl font-bold text-xs bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors cursor-pointer inline-flex items-center gap-2 shadow-lg shadow-amber-500/20"
                >
                  <Send className="w-4 h-4" />
                  <span>{isAr ? 'إرسال الرسالة للمستشار' : 'Send Confidential Message'}</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
