import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const translations = {
  en: {
    // Navbar
    nav_home: 'Home',
    nav_about: 'About',
    nav_services: 'Services',
    nav_portfolio: 'Portfolio',
    nav_blog: 'Blog',
    nav_contact: 'Contact',

    // Home Hero
    hero_badge: 'Digital Agency in Ethiopia',
    hero_title_1: 'Empowering Your',
    hero_title_2: 'Digital Future',
    hero_desc: 'We build powerful digital solutions — from stunning websites to comprehensive marketing strategies — that transform your business and drive real results.',
    hero_btn_start: 'Get Started',
    hero_btn_contact: 'Contact Us',
    hero_badge_1: 'Professional Team',
    hero_badge_2: 'Digital Services',
    hero_badge_3: 'Local Expertise',
    scroll_down: 'Scroll down',

    // Why Choose Us
    why_badge: 'Why Choose Us',
    why_title: 'Your Trusted Digital Partner',
    why_desc: 'We combine technical expertise with creative thinking to deliver digital solutions that truly make a difference for your business.',
    why_1_title: 'Professional Solutions',
    why_1_desc: 'We deliver well-crafted digital solutions built to a high standard for every client we work with.',
    why_2_title: 'Client-Focused Approach',
    why_2_desc: 'Your goals drive our work. We listen carefully and tailor every solution to your specific needs.',
    why_3_title: 'Innovative Digital Services',
    why_3_desc: 'We apply current technologies and creative thinking to build digital products that stand out.',
    why_4_title: 'Reliable Support',
    why_4_desc: 'We are committed to being available and responsive throughout every stage of your project.',

    // Services Preview
    services_badge: 'Our Services',
    services_title: 'What We Offer',
    services_desc: 'From concept to launch, we provide end-to-end digital services to help your business thrive online.',
    services_btn: 'View All Services',
    learn_more: 'Learn More',

    // Portfolio Preview
    portfolio_badge: 'Sample Work',
    portfolio_title: 'Project Examples',
    portfolio_desc: 'A selection of sample projects that illustrate the types of digital work we are capable of delivering.',
    portfolio_btn: 'View All Projects',

    // CTA
    cta_badge: 'Ready to Get Started?',
    cta_title_1: "Let's Build Something",
    cta_title_2: 'Amazing Together',
    cta_desc: "Ready to transform your digital presence? Get in touch with our team and let's discuss how we can help your business grow.",
    cta_contact: 'Contact Us',
    cta_services: 'Explore Services',

    // Footer
    footer_desc: 'Empowering Your Digital Future. We build powerful digital solutions that transform your business and drive real results.',
    footer_quick: 'Quick Links',
    footer_services: 'Services',
    footer_contact: 'Contact Us',
    footer_copyright: 'Tegbar Digital Solution. All rights reserved.',
    footer_slogan: 'Empowering Your Digital Future — Addis Ababa, Ethiopia',
  },
  am: {
    // Navbar
    nav_home: 'መነሻ',
    nav_about: 'ስለ እኛ',
    nav_services: 'አገልግሎቶች',
    nav_portfolio: 'ፖርትፎሊዮ',
    nav_blog: 'ብሎግ',
    nav_contact: 'አግኙን',

    // Home Hero
    hero_badge: 'በኢትዮጵያ ዲጂታል ኤጄንሲ',
    hero_title_1: 'ዲጂታል ወደፊቱን',
    hero_title_2: 'ኃይለኛ ያድርጉ',
    hero_desc: 'ከድንቅ ድረ-ገጾች እስከ ሁሉን አቀፍ የግብይት ስልቶች — ንግድዎን የሚለውጡ ኃይለኛ ዲጂታል መፍትሄዎችን እንሰራለን።',
    hero_btn_start: 'ጀምር',
    hero_btn_contact: 'አግኙን',
    hero_badge_1: 'ሙያዊ ቡድን',
    hero_badge_2: 'ዲጂታል አገልግሎቶች',
    hero_badge_3: 'የሀገር ውስጥ ልምድ',
    scroll_down: 'ወደ ታች ሸብልሉ',

    // Why Choose Us
    why_badge: 'ለምን እኛን ይምረጡ',
    why_title: 'የሚታመን ዲጂታል አጋርዎ',
    why_desc: 'ለንግድዎ እውነተኛ ልዩነት የሚፈጥሩ ዲጂታል መፍትሄዎችን ለማቅረብ ቴክኒካዊ ችሎታን ከፈጠራ አስተሳሰብ ጋር እናጣምራለን።',
    why_1_title: 'ሙያዊ መፍትሄዎች',
    why_1_desc: 'ለእያንዳንዱ ደንበኛ ከፍተኛ ጥራት ያለው ዲጂታል መፍትሄ እናቀርባለን።',
    why_2_title: 'ደንበኛ ተኮር አቀራረብ',
    why_2_desc: 'ዓላማዎ ሥራችንን ይመራዋል። በጥንቃቄ እናደምጣለን እና እያንዳንዱን መፍትሄ ለፍላጎትዎ እናዘጋጃለን።',
    why_3_title: 'ፈጠራ ዲጂታል አገልግሎቶች',
    why_4_title: 'አስተማማኝ ድጋፍ',
    why_3_desc: 'የሚለዩ ዲጂታል ምርቶችን ለመገንባት የዘመናዊ ቴክኖሎጂ እና ፈጠራ አስተሳሰብ እንጠቀማለን።',
    why_4_desc: 'በፕሮጀክትዎ በሁሉም ደረጃ ሁልጊዜ ዝግጁ እና ምላሽ ሰጪ ለመሆን ቁርጠኛ ነን።',

    // Services Preview
    services_badge: 'አገልግሎቶቻችን',
    services_title: 'የምናቀርበው',
    services_desc: 'ከፅንሰ ሃሳብ እስከ ጅምር፣ ንግድዎ በኦንላይን ለማደግ ሁሉን አቀፍ ዲጂታል አገልግሎቶችን እናቀርባለን።',
    services_btn: 'ሁሉንም አገልግሎቶች ይመልከቱ',
    learn_more: 'ተጨማሪ ይወቁ',

    // Portfolio Preview
    portfolio_badge: 'ናሙና ሥራዎች',
    portfolio_title: 'የፕሮጀክት ምሳሌዎች',
    portfolio_desc: 'ማቅረብ የምንችለውን የዲጂታል ሥራ ዓይነቶች የሚያሳዩ ናሙና ፕሮጀክቶች።',
    portfolio_btn: 'ሁሉንም ፕሮጀክቶች ይመልከቱ',

    // CTA
    cta_badge: 'ለመጀመር ዝግጁ ነዎት?',
    cta_title_1: 'አስደናቂ ነገር',
    cta_title_2: 'አብረን እንስራ',
    cta_desc: 'ዲጂታል ተገኝነትዎን ለመቀየር ዝግጁ ነዎት? ቡድናችን ያግኙ።',
    cta_contact: 'አግኙን',
    cta_services: 'አገልግሎቶችን ያስሱ',

    // Footer
    footer_desc: 'ዲጂታል ወደፊቱን ኃይለኛ ያድርጉ። ንግድዎን የሚለውጡ ኃይለኛ ዲጂታል መፍትሄዎችን እንሰራለን።',
    footer_quick: 'ፈጣን አገናኞች',
    footer_services: 'አገልግሎቶች',
    footer_contact: 'አግኙን',
    footer_copyright: 'ቴግባር ዲጂታል ሶሉሽን። መብቱ በሕግ የተጠበቀ ነው።',
    footer_slogan: 'ዲጂታል ወደፊቱን ኃይለኛ ያድርጉ — አዲስ አበባ፣ ኢትዮጵያ',
  },
};

export function AppProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState('en');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const t = (key) => translations[lang][key] || key;

  return (
    <AppContext.Provider value={{ darkMode, setDarkMode, lang, setLang, t }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
