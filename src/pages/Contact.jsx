import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Contact() {
  const { t } = useApp();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    { icon: Phone, labelKey: 'contact_phone_label', value: '+251 990 344 747', href: 'tel:+251990344747', descKey: 'contact_phone_desc' },
    { icon: Mail, labelKey: 'contact_email_label', value: 'Tegabrdigitalsolution@gmail.com', href: 'mailto:Tegabrdigitalsolution@gmail.com', descKey: 'contact_email_desc' },
    { icon: MapPin, labelKey: 'contact_location_label', value: t('contact_city'), href: '#', descKey: 'contact_location_desc' },
  ];

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = t('err_name');
    if (!form.email.trim()) e.email = t('err_email');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = t('err_email_invalid');
    if (!form.subject.trim()) e.subject = t('err_subject');
    if (!form.message.trim()) e.message = t('err_message');
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); setForm({ name: '', email: '', subject: '', message: '' }); }, 1500);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#0D1925] py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#136088]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#008A5C]/15 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#136088]/20 border border-[#136088]/30 text-[#008A5C] text-sm font-semibold mb-5">{t('contact_badge')}</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-5">{t('contact_title')}</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t('contact_subtitle')}</p>
        </div>
      </section>

      {/* Main */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-black text-[#0D1925] mb-2">{t('contact_lets_talk')}</h2>
                <p className="text-gray-500 text-sm leading-relaxed">{t('contact_lets_talk_desc')}</p>
              </div>
              {contactInfo.map(({ icon: Icon, labelKey, value, href, descKey }) => (
                <a key={labelKey} href={href} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:border-[#136088]/30 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#136088] to-[#008A5C] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-md">
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium mb-0.5">{t(labelKey)}</p>
                    <p className="text-[#0D1925] font-semibold text-sm break-all">{value}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{t(descKey)}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
                      <CheckCircle2 size={32} className="text-[#008A5C]" />
                    </div>
                    <h3 className="text-xl font-black text-[#0D1925] mb-2">{t('form_success_title')}</h3>
                    <p className="text-gray-500 text-sm max-w-xs">{t('form_success_desc')}</p>
                    <button onClick={() => setSubmitted(false)} className="mt-6 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#136088] to-[#008A5C] text-white text-sm font-semibold hover:opacity-90 transition-opacity">
                      {t('form_send_another')}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <h2 className="text-xl font-black text-[#0D1925] mb-6">{t('form_title')}</h2>
                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block text-sm font-semibold text-[#0D1925] mb-1.5">{t('form_name')}</label>
                        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder={t('form_name_placeholder')}
                          className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors ${errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-[#136088]'}`} />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#0D1925] mb-1.5">{t('form_email')}</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder={t('form_email_placeholder')}
                          className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-[#136088]'}`} />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>
                    <div className="mb-5">
                      <label className="block text-sm font-semibold text-[#0D1925] mb-1.5">{t('form_subject')}</label>
                      <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder={t('form_subject_placeholder')}
                        className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors ${errors.subject ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-[#136088]'}`} />
                      {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                    </div>
                    <div className="mb-6">
                      <label className="block text-sm font-semibold text-[#0D1925] mb-1.5">{t('form_message')}</label>
                      <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder={t('form_message_placeholder')}
                        className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors resize-none ${errors.message ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-[#136088]'}`} />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>
                    <button type="submit" disabled={loading} className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#136088] to-[#008A5C] text-white font-bold text-sm hover:opacity-90 transition-opacity disabled:opacity-70 flex items-center justify-center gap-2">
                      {loading ? (<><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />{t('form_sending')}</>) : (<><Send size={16} />{t('form_send')}</>)}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden h-64 bg-gradient-to-br from-[#0D1925] to-[#136088] flex items-center justify-center border border-gray-100 shadow-sm">
            <div className="text-center text-white">
              <MapPin size={36} className="mx-auto mb-3 text-[#008A5C]" />
              <p className="font-bold text-lg">{t('contact_city')}</p>
              <p className="text-white/60 text-sm mt-1">{t('contact_city_sub')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
