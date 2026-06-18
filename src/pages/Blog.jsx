import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, User, Tag, ChevronRight, Search } from 'lucide-react';

const posts = [
  {
    id: 1,
    slug: 'why-every-business-needs-a-website',
    title: 'Why Every Business Needs a Website in 2024',
    excerpt:
      'In today\'s digital-first world, not having a website is like not having a phone number. We explore why a professional website is the single most important digital asset your business can have.',
    content: `In an era where over 4.9 billion people use the internet daily, your business's online presence is no longer optional — it's essential. Whether you run a small café in Addis Ababa or a growing consulting firm, a professional website is the cornerstone of your digital strategy.

**Your 24/7 Sales Representative**
Unlike a physical store that closes at night, your website never sleeps. It works around the clock, showcasing your products or services to potential customers at any hour, from any location in the world.

**Credibility and Trust**
Studies show that 75% of consumers judge a company's credibility based on its website design. A professional, well-designed website signals that you are serious about your business and that customers can trust you.

**Cost-Effective Marketing**
Compared to traditional advertising, a website is one of the most cost-effective marketing tools available. With proper SEO, you can attract organic traffic without paying for every click.

**Competitive Advantage**
If your competitors have websites and you don't, you're already at a disadvantage. A well-optimized website can help you outrank competitors in search results and capture their potential customers.

**Data and Insights**
A website gives you access to valuable data about your customers — where they come from, what they look for, and how they behave. This data is gold for making informed business decisions.

The bottom line: a website is not a luxury. It is a fundamental business tool in the digital age. If you don't have one, now is the time to invest.`,
    category: 'Business',
    author: 'Tegbar Digital Solution',
    date: 'December 10, 2024',
    readTime: '5 min read',
    img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
    tags: ['Website', 'Business', 'Digital Presence'],
    featured: true,
  },
  {
    id: 2,
    slug: 'digital-marketing-trends-ethiopia',
    title: 'Digital Marketing Trends in Ethiopia: What to Watch in 2025',
    excerpt:
      'Ethiopia\'s digital landscape is evolving rapidly. From the surge in mobile internet usage to the rise of influencer marketing, we break down the trends every business should know.',
    content: `Ethiopia's digital ecosystem is undergoing a rapid transformation. With over 25 million internet users and mobile penetration growing every year, the opportunity for digital marketing in the country has never been greater.

**Mobile-First Marketing**
With most Ethiopians accessing the internet via smartphones, mobile-first strategies are non-negotiable. This means fast-loading mobile websites, vertical video content, and mobile-optimized ads.

**The Rise of Social Media**
Platforms like Facebook, TikTok, Telegram, and Instagram have seen explosive growth in Ethiopia. Brands that create culturally relevant, engaging content on these platforms are winning big.

**Influencer Marketing**
Ethiopian content creators and influencers are becoming powerful marketing channels. Collaborating with the right influencers can drive massive brand awareness in a highly authentic way.

**Video Content Dominance**
Video content generates significantly more engagement than static posts. Ethiopian brands are increasingly investing in short-form videos (Reels, TikTok) and YouTube content.

**WhatsApp Business**
Many Ethiopian businesses are leveraging WhatsApp Business for customer service, product catalogs, and direct sales — making it a unique and highly effective local marketing channel.

**Local Language Content**
Amharic and other local language content is seeing higher engagement rates than English-only content, proving that localization is key to connecting with Ethiopian audiences.

The businesses that embrace these trends and adapt their digital strategies accordingly will position themselves for significant growth in 2025 and beyond.`,
    category: 'Digital Marketing',
    author: 'Tegbar Digital Solution',
    date: 'November 28, 2024',
    readTime: '7 min read',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    tags: ['Digital Marketing', 'Ethiopia', 'Trends', 'Social Media'],
    featured: false,
  },
  {
    id: 3,
    slug: 'building-your-brand-online',
    title: 'Building Your Brand Online: A Complete Guide for Startups',
    excerpt:
      'Your brand is more than a logo. It\'s the total experience people have with your business. Learn how to build a powerful, consistent, and memorable online brand from scratch.',
    content: `Building a strong online brand is one of the most important investments you can make in your business. It differentiates you from competitors, builds trust with your audience, and creates long-term loyalty.

**Start with Your Brand Strategy**
Before designing a logo or launching a website, define your brand's core identity:
- What is your mission? Why does your business exist?
- Who is your target audience?
- What makes you different from competitors?
- What values guide your business?

**Create a Memorable Visual Identity**
Your visual identity includes your logo, color palette, typography, and imagery style. These elements should be consistent across all platforms and materials. Invest in professional design — it pays for itself many times over.

**Develop Your Brand Voice**
How does your brand communicate? Are you formal and authoritative, or casual and friendly? Your brand voice should be consistent in all written and spoken content — from website copy to social media posts.

**Build a Professional Website**
Your website is your brand's digital headquarters. It should reflect your brand identity perfectly, provide a great user experience, and clearly communicate your value proposition.

**Be Consistent on Social Media**
Choose 2-3 social media platforms where your target audience is most active. Post consistently, use your brand colors and style in all graphics, and engage authentically with your followers.

**Collect and Showcase Social Proof**
Testimonials, case studies, and client logos are powerful tools for building brand credibility. As soon as you have happy clients, ask for reviews and showcase them prominently.

Building a brand is a marathon, not a sprint. Stay consistent, be patient, and focus on delivering genuine value to your audience.`,
    category: 'Branding',
    author: 'Tegbar Digital Solution',
    date: 'November 15, 2024',
    readTime: '8 min read',
    img: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800&q=80',
    tags: ['Branding', 'Startups', 'Online Presence', 'Strategy'],
    featured: false,
  },
];

function PostCard({ post, featured = false }) {
  const [expanded, setExpanded] = useState(false);

  if (featured) {
    return (
      <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 mb-14 hover:shadow-2xl transition-shadow duration-300">
        <div className="grid lg:grid-cols-2">
          <div className="relative h-72 lg:h-auto">
            <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#136088] to-[#008A5C] text-white text-xs font-bold">
              Featured
            </div>
          </div>
          <div className="p-10 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-blue-50 text-[#136088] text-xs font-semibold">{post.category}</span>
              <span className="text-gray-400 text-xs flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
            </div>
            <h2 className="text-2xl font-black text-[#0D1925] mb-4">{post.title}</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">{post.excerpt}</p>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <User size={13} />{post.author}
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <Clock size={13} />{post.date}
              </div>
            </div>
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#136088] to-[#008A5C] text-white font-semibold text-sm hover:opacity-90 transition-opacity w-fit"
            >
              {expanded ? 'Show Less' : 'Read Full Article'} <ChevronRight size={16} className={`transition-transform ${expanded ? 'rotate-90' : ''}`} />
            </button>
          </div>
        </div>
        {expanded && (
          <div className="px-10 pb-10 border-t border-gray-100 pt-8">
            <div className="prose max-w-none text-gray-600 text-sm leading-relaxed whitespace-pre-line">
              {post.content}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-transparent hover:-translate-y-1 transition-all duration-300">
      <div className="relative h-52 overflow-hidden">
        <img src={post.img} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur text-[#136088] text-xs font-semibold">
          {post.category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-gray-400 text-xs flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
          <span className="text-gray-400 text-xs">{post.date}</span>
        </div>
        <h3 className="font-black text-[#0D1925] text-lg mb-3 leading-snug">{post.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {post.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gray-100 text-gray-500 text-xs">
              <Tag size={10} />{tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-400 text-xs">
            <User size={13} />{post.author}
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-1 text-[#136088] text-sm font-semibold hover:gap-2 transition-all duration-200"
          >
            {expanded ? 'Show Less' : 'Read More'} <ChevronRight size={15} />
          </button>
        </div>
        {expanded && (
          <div className="mt-6 pt-6 border-t border-gray-100 text-gray-600 text-sm leading-relaxed whitespace-pre-line">
            {post.content}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Blog() {
  const [search, setSearch] = useState('');
  const featuredPost = posts.find((p) => p.featured);
  const regularPosts = posts.filter((p) => !p.featured).filter((p) =>
    search === '' || p.title.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#0D1925] py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#136088]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#008A5C]/15 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#136088]/20 border border-[#136088]/30 text-[#008A5C] text-sm font-semibold mb-5">
            Knowledge Hub
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-5">Blog & Insights</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Expert articles on digital marketing, branding, web development, and growing your business online.
          </p>
          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#136088] transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured */}
          {featuredPost && search === '' && (
            <>
              <div className="mb-6">
                <h2 className="text-2xl font-black text-[#0D1925]">Featured Article</h2>
                <p className="text-gray-400 text-sm mt-1">
                  These articles are sample content created for demonstration purposes.
                </p>
              </div>
              <PostCard post={featuredPost} featured />
            </>
          )}

          {/* Regular Posts */}
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-black text-[#0D1925]">
                {search ? `Search results for "${search}"` : 'More Articles'}
              </h2>
              {!search && (
                <p className="text-gray-400 text-sm mt-1">
                  These articles are sample content created for demonstration purposes.
                </p>
              )}
            </div>
            {regularPosts.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {regularPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 text-gray-400">
                <p className="text-lg">No articles found for your search.</p>
              </div>
            )}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 bg-gradient-to-r from-[#0D1925] to-[#136088] rounded-3xl p-10 text-center">
            <h3 className="text-2xl font-black text-white mb-3">Stay in the Loop</h3>
            <p className="text-gray-300 mb-6">Get the latest digital tips and insights delivered to your inbox.</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#008A5C] to-emerald-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
