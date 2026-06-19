import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Users, ArrowRight, CheckCircle2, Lightbulb, Handshake, Rocket, Star } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function About() {
  const { t } = useApp();

  const coreValues = [
    { icon: Heart, titleKey: 'val_1_title', descKey: 'val_1_desc' },
    { icon: Lightbulb, titleKey: 'val_2_title', descKey: 'val_2_desc' },
    { icon: Rocket, titleKey: 'val_3_title', descKey: 'val_3_desc' },
    { icon: Handshake, titleKey: 'val_4_title', descKey: 'val_4_desc' },
    { icon: Users, titleKey: 'val_5_title', descKey: 'val_5_desc' },
    { icon: Star, titleKey: 'val_6_title', descKey: 'val_6_desc' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#0D1925] py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#136088]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#008A5C]/15 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#136088]/20 border border-[#136088]/30 text-[#008A5C] text-sm font-semibold mb-5">{t('about_badge')}</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-5">{t('about_title')}</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t('about_subtitle')}</p>
        </div>
      </section>

      {/* Company Intro */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#136088] text-sm font-semibold mb-5">{t('about_who_badge')}</span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0D1925] mb-5">{t('about_who_title')}</h2>
              <p className="text-gray-500 leading-relaxed mb-4">{t('about_p1')}</p>
              <p className="text-gray-500 leading-relaxed mb-6">{t('about_p2')}</p>
              <div className="space-y-3">
                {['about_bullet1','about_bullet2','about_bullet3','about_bullet4'].map((key) => (
                  <div key={key} className="flex items-center gap-3 text-gray-600">
                    <CheckCircle2 size={18} className="text-[#008A5C] shrink-0" />
                    <span className="text-sm">{t(key)}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80" alt="Tegbar Digital Solution team" className="rounded-2xl shadow-2xl w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#136088] to-blue-600 flex items-center justify-center mb-6 shadow-lg">
                <Target size={26} className="text-white" />
              </div>
              <h3 className="text-2xl font-black text-[#0D1925] mb-3">{t('mission_title')}</h3>
              <p className="text-gray-500 leading-relaxed">{t('mission_text')}</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#008A5C] to-emerald-500 flex items-center justify-center mb-6 shadow-lg">
                <Eye size={26} className="text-white" />
              </div>
              <h3 className="text-2xl font-black text-[#0D1925] mb-3">{t('vision_title')}</h3>
              <p className="text-gray-500 leading-relaxed">{t('vision_text')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-50 text-[#008A5C] text-sm font-semibold mb-4">{t('values_badge')}</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0D1925] mb-4">{t('values_title')}</h2>
            <p className="text-gray-500 max-w-xl mx-auto">{t('values_desc')}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map(({ icon: Icon, titleKey, descKey }) => (
              <div key={titleKey} className="group p-7 rounded-2xl border border-gray-100 hover:border-[#136088]/30 hover:shadow-xl hover:shadow-blue-100/30 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#136088] to-[#008A5C] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="font-bold text-[#0D1925] text-lg mb-2">{t(titleKey)}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{t(descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#136088] text-sm font-semibold mb-4">{t('team_badge')}</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0D1925] mb-6">{t('team_title')}</h2>
          </div>
          <div className="bg-gradient-to-br from-[#0D1925] to-[#136088]/80 rounded-3xl p-10 sm:p-14 text-center shadow-xl">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#136088] to-[#008A5C] flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Users size={28} className="text-white" />
            </div>
            <p className="text-white/90 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto font-medium">{t('team_text')}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#136088] to-[#008A5C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-5">{t('about_cta_title')}</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">{t('about_cta_desc')}</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-[#136088] font-bold hover:scale-105 transition-transform duration-200 shadow-lg">
            {t('get_in_touch')} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
