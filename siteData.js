// ─────────────────────────────────────────
//  GLOBAL EXCELLENCE — Site Data / Constants
// ─────────────────────────────────────────

export const NAV_LINKS = [
  { label: 'Home',       href: '#hero' },
  { label: 'Services',   href: '#services' },
  { label: 'Portfolio',  href: '#portfolio' },
  { label: 'About',      href: '#about' },
  { label: 'Contact',    href: '#contact' },
]

export const SERVICES = [
  {
    num: '01',
    title: 'Website Design',
    desc: 'Stunning, award-worthy designs that reflect your brand's premium positioning and convert visitors into clients.',
    icon: 'monitor',
  },
  {
    num: '02',
    title: 'Website Development',
    desc: 'Clean, performant code built with modern frameworks for blazing-fast, rock-solid digital experiences.',
    icon: 'code',
  },
  {
    num: '03',
    title: 'UI/UX Design',
    desc: 'User-centered design that balances beauty and usability, crafting journeys that feel intuitive and effortless.',
    icon: 'layers',
  },
  {
    num: '04',
    title: 'E-Commerce Websites',
    desc: 'Revenue-generating online stores with seamless checkout flows, designed to maximize every conversion.',
    icon: 'shopping-bag',
  },
  {
    num: '05',
    title: 'SEO Optimization',
    desc: 'Data-driven strategies that propel your brand to the top of search results and keep it there long-term.',
    icon: 'search',
  },
  {
    num: '06',
    title: 'Branding',
    desc: 'Complete visual identity systems — logos, guidelines, and assets — that establish instant recognition and trust.',
    icon: 'star',
  },
  {
    num: '07',
    title: 'Website Maintenance',
    desc: 'Ongoing care, updates, and performance optimization to ensure your site stays fast, secure, and cutting-edge.',
    icon: 'tool',
  },
]

export const PORTFOLIO_ITEMS = [
  {
    title: 'Apex Capital Partners',
    industry: 'Finance',
    desc: 'Premium investment platform with real-time data visualization and institutional-grade UX.',
    gradient: 'linear-gradient(135deg,#0D1B3E,#1E3A8A,#164E63)',
    accentColor: '#2563EB',
    wordmark: { text: 'APEX', sub: 'CAPITAL' },
  },
  {
    title: 'Flux Analytics Platform',
    industry: 'SaaS',
    desc: 'Modern SaaS dashboard with advanced data analytics and team collaboration features.',
    gradient: 'linear-gradient(135deg,#0F2027,#203A43,#2C5364)',
    accentColor: '#06B6D4',
    wordmark: { text: 'flux', dot: true },
  },
  {
    title: 'Lumière Luxury Brand',
    industry: 'E-Commerce',
    desc: 'High-end fashion e-commerce with immersive product experiences and editorial storytelling.',
    gradient: 'linear-gradient(135deg,#1A0533,#2D1B69,#7C3AED)',
    accentColor: '#7C3AED',
    wordmark: { text: 'LUMIÈRE' },
  },
  {
    title: 'Vitae Health Network',
    industry: 'Healthcare',
    desc: 'Patient-centered healthcare portal with appointment booking, records management, and telemedicine.',
    gradient: 'linear-gradient(135deg,#052016,#064E3B,#059669)',
    accentColor: '#10B981',
    wordmark: { text: 'VITAE', plus: true },
  },
  {
    title: 'Terra Fine Dining',
    industry: 'Restaurant',
    desc: 'Atmospheric restaurant website with online reservations, menu showcase, and seasonal storytelling.',
    gradient: 'linear-gradient(135deg,#1C0A00,#4A1503,#C2410C)',
    accentColor: '#C2410C',
    wordmark: { text: 'TERRA' },
  },
  {
    title: 'NeoAI Platform',
    industry: 'Tech Startup',
    desc: 'AI startup landing page with interactive demos, waitlist conversion, and investor-ready presentation.',
    gradient: 'linear-gradient(135deg,#0C0C1D,#1E1B4B,#4338CA)',
    accentColor: '#818CF8',
    wordmark: { text: 'NEO', suffix: 'AI', suffixColor: '#818CF8' },
  },
]

export const TESTIMONIALS = [
  {
    text: '"Global Excellence completely transformed our online presence. The new site is breathtaking, and our conversion rate has tripled. Absolutely world-class work."',
    name: 'James Mitchell',
    role: 'CEO, Apex Capital',
    initials: 'JM',
    rating: 5,
  },
  {
    text: '"The team delivered beyond every expectation. Our brand went from forgettable to unforgettable overnight. The attention to detail is unmatched in the industry."',
    name: 'Sofia Reyes',
    role: 'Founder, Lumière',
    initials: 'SR',
    rating: 5,
  },
  {
    text: '"Working with Global Excellence was an incredible experience. They understood our vision perfectly and created something we could have never imagined on our own."',
    name: 'Alex Kim',
    role: 'CTO, Flux Analytics',
    initials: 'AK',
    rating: 5,
  },
  {
    text: '"The ROI from our new website has been extraordinary. Within three months we saw a 180% increase in qualified leads. This agency is in a different league entirely."',
    name: 'Maya Benali',
    role: 'Marketing Director, NeoAI',
    initials: 'MB',
    rating: 5,
  },
  {
    text: '"They didn't just build us a website — they built us a business asset. The professionalism, creativity, and communication throughout the project were exemplary."',
    name: 'Thomas Park',
    role: 'Owner, Terra Dining',
    initials: 'TP',
    rating: 5,
  },
  {
    text: '"Our patients now consistently compliment our website — something that never happened before. Global Excellence turned a liability into our greatest sales tool."',
    name: 'Dr. Laura Chen',
    role: 'Director, Vitae Health',
    initials: 'LC',
    rating: 5,
  },
]

export const STATS = [
  { value: 120, suffix: '+', label: 'Projects Delivered' },
  { value: 80,  suffix: '+', label: 'Happy Clients' },
  { value: 99,  suffix: '%', label: 'Client Satisfaction' },
  { value: 10,  suffix: '+', label: 'Team Members' },
]

export const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'Deep-dive into your brand, goals, audience, and competitive landscape to lay the perfect foundation.',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Crafting pixel-perfect visual concepts, wireframes, and design systems that capture your vision.',
  },
  {
    num: '03',
    title: 'Prototype',
    desc: 'Interactive prototypes that let you experience the product before a single line of code is written.',
  },
  {
    num: '04',
    title: 'Development',
    desc: 'High-performance code built on modern stacks, optimized for speed, SEO, and scalability.',
  },
  {
    num: '05',
    title: 'Launch',
    desc: 'Careful deployment, post-launch monitoring, and ongoing support to ensure lasting success.',
  },
]

export const TRUSTED_LOGOS = [
  'Microsoft', 'Tesla', 'Spotify', 'Adobe', 'Apple', 'Airbnb', 'Stripe', 'Figma',
]

export const TECH_STACK = [
  'React', 'Next.js', 'Webflow', 'Framer', 'Three.js', 'GSAP', 'Figma', 'TypeScript',
]

export const FOOTER_LINKS = {
  Services: [
    { label: 'Website Design',   href: '#services' },
    { label: 'Development',      href: '#services' },
    { label: 'UI/UX Design',     href: '#services' },
    { label: 'E-Commerce',       href: '#services' },
    { label: 'SEO',              href: '#services' },
  ],
  Company: [
    { label: 'About Us',   href: '#about' },
    { label: 'Portfolio',  href: '#portfolio' },
    { label: 'Process',    href: '#process' },
    { label: 'Reviews',    href: '#testimonials' },
    { label: 'Contact',    href: '#contact' },
  ],
  Legal: [
    { label: 'Privacy Policy',  href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy',   href: '#' },
  ],
}
