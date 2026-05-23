// navData.js
export const navMenu = [
  { label: 'HOME', href: '/' },
  { label: 'INTERNSHIP', href: '/Internship' },
  {
    label: 'TRAINING & DEVELOPMENT',
    href: '#',
    submenu: [
      { label: 'Technologies', href: '/ModernTechnology' },
      { label: 'Digital Marketing', href: '/DigitalMarketing' },
      { label: 'SEO', href: '/Seo' },
    ],
  },
  {
    label: 'PAGES',
    href: '#',
    submenu: [
      { label: 'Service', href: '/Service' },
      { label: 'Portfolio', href: '/Portfolio' },
      { label: 'Pricing', href: '/Pricing' },
      { label: 'Team Member', href: '/MeetOurTeam' },
      { label: 'Reviews', href: '/Reviews' },
      { label: 'Clients', href: '/Client' },
      { label: 'Skills', href: '/Skill' },
    ],
  },
  { label: 'ABOUT', href: '/About' },
  { label: 'CONTACT', href: '/Contact' },
  { label: 'BLOG', href: '/Blog' },
  { label: 'PAY', href: '/Payment' },
]
