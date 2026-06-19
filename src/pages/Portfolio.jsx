import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Eye } from 'lucide-react';
import { useApp } from '../context/AppContext';

const categories_en = ['All', 'Web Development', 'Branding', 'Digital Marketing', 'Design'];
const categories_am = ['ሁሉም', 'ድረ-ገጽ ልማት', 'ብራንዲንግ', 'ዲጂታል ማርኬቲንግ', 'ዲዛይን'];

const projects = [
  { id:1, title:'Restaurant Website', category:'Web Development', tags:['React','Tailwind CSS','Responsive'], img:'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&q=80', description:'A modern website for a fine-dining restaurant featuring online reservations, menu showcase, and gallery section.', year:'2024' },
  { id:2, title:'Fashion Brand Website', category:'Web Development', tags:['E-commerce','Fashion','UI/UX'], img:'https://images.unsplash.com/photo-1445205170230-053b83016050?w=700&q=80', description:'A sleek fashion brand website with lookbook gallery, collection showcase, and integrated online store.', year:'2024' },
  { id:3, title:'Corporate Branding Project', category:'Branding', tags:['Logo Design','Brand Identity','Style Guide'], img:'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=700&q=80', description:'Complete brand identity for a corporate firm including logo design, color palette, typography, and brand guidelines.', year:'2023' },
  { id:4, title:'Social Media Campaign', category:'Digital Marketing', tags:['Social Media','Content','Growth'], img:'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=700&q=80', description:'A social media campaign concept featuring content strategy, audience engagement, and growth-focused creative assets.', year:'2023' },
  { id:5, title:'Tech Startup Landing Page', category:'Web Development', tags:['Landing Page','SaaS','Animations'], img:'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=700&q=80', description:'High-converting landing page for a SaaS startup with smooth animations and lead generation form.', year:'2024' },
  { id:6, title:'Healthcare Brand Identity', category:'Branding', tags:['Healthcare','Logo','Brand Colors'], img:'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=80', description:'Professional healthcare brand identity design with a focus on trust, clarity, and warmth for a medical clinic.', year:'2023' },
  { id:7, title:'E-commerce Food Store', category:'Web Development', tags:['E-commerce','Food','Payment Integration'], img:'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=700&q=80', description:'Full-featured online food store with product catalog, cart management, and secure payment gateway integration.', year:'2024' },
  { id:8, title:'NGO Digital Campaign', category:'Digital Marketing', tags:['NGO','Social Impact','Awareness'], img:'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=700&q=80', description:'A digital awareness campaign concept for a non-profit organization, designed to reach a wide audience.', year:'2023' },
];

export default function Portfolio() {
  const { t, lang } = useApp();
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState(null);

  const categories = lang === 'am' ? categories_am : categories_en;
  const catMap = { 'ሁሉም':'All','ድረ-ገጽ ልማት':'Web Development','ብራንዲንግ':'Branding','ዲጂታል ማርኬቲንግ':'Digital Marketing','ዲዛይን':'Design' };
  const activeCatEn = catMap[activeCategory] || activeCategory;
  const filtered = activeCatEn === 'All' ? projects : projects.filter((p) => p.category === activeCatEn);

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#0D1925] py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#136088]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#008A5C]/15 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#136088]/20 border border-[#136088]/30 text-[#008A5C] text-sm font-semibold mb-5">{t('port_badge')}</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-5">{t('port_title')}</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t('port_subtitle')}</p>
          <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-yellow-400/20 border border-yellow-400/30 text-yellow-300 text-sm font-medium">
            <Eye size={16} />{t('port_demo_note')}
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-white sticky top-20 z-40 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 py-4 overflow-x-auto">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${activeCategory === cat ? 'bg-gradient-to-r from-[#136088] to-[#008A5C] text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((project) => (
              <div key={project.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-transparent transition-all duration-300 hover:-translate-y-1"
                onMouseEnter={() => setHoveredId(project.id)} onMouseLeave={() => setHoveredId(null)}>
                <div className="relative overflow-hidden h-52">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className={`absolute inset-0 bg-gradient-to-t from-[#0D1925]/90 via-[#0D1925]/50 to-transparent transition-opacity duration-300 ${hoveredId === project.id ? 'opacity-100' : 'opacity-0'} flex flex-col justify-end p-4`}>
                    <p className="text-white/80 text-xs leading-relaxed mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1">{project.tags.map((tag) => (<span key={tag} className="px-2 py-0.5 rounded-md bg-[#136088]/80 text-white text-xs">{tag}</span>))}</div>
                  </div>
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-black/60 text-white text-xs font-medium backdrop-blur-sm">{t('sample_badge')}</div>
                  <div className="absolute top-3 left-3 px-2 py-1 rounded-md bg-gradient-to-r from-[#136088] to-[#008A5C] text-white text-xs font-medium">{project.category}</div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#0D1925] mb-1">{project.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">{project.year}</span>
                    <ExternalLink size={14} className="text-gray-300 group-hover:text-[#136088] transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && <div className="text-center py-20 text-gray-400"><p className="text-lg">{t('port_no_results')}</p></div>}
        </div>
      </section>

      {/* Walkthrough */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#136088] text-sm font-semibold mb-4">{t('port_example_badge')}</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0D1925]">{t('port_example_title')}</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">{t('port_example_note')}</p>
          </div>
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-72 lg:h-auto">
                <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80" alt="Restaurant Website" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/60 text-white text-xs font-medium backdrop-blur-sm">{t('sample_badge')}</div>
              </div>
              <div className="p-10 flex flex-col justify-center">
                <span className="text-[#136088] text-xs font-bold uppercase tracking-wider mb-3">{t('port_cs_category')}</span>
                <h3 className="text-2xl font-black text-[#0D1925] mb-4">{t('port_cs_title')}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{t('port_cs_desc')}</p>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[['port_modern','port_approach'],['port_friendly','port_experience'],['port_professional','port_process']].map(([v,l]) => (
                    <div key={l} className="text-center">
                      <div className="text-sm font-black text-[#136088] leading-tight">{t(v)}</div>
                      <div className="text-gray-400 text-xs mt-1">{t(l)}</div>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#136088] to-[#008A5C] text-white font-semibold text-sm hover:opacity-90 transition-opacity w-fit">
                  {t('start_similar')} <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#136088] to-[#008A5C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-5">{t('port_cta_title')}</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">{t('port_cta_desc')}</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-[#136088] font-bold hover:scale-105 transition-transform duration-200 shadow-lg">
            {t('start_your_project')} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
