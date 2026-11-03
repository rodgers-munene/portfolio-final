// Product images: Gemba's public workflow docs, TARA's public product site assets,
// and a current capture of the public EkShop storefront.
import gemba from '../assets/projects/gemba-activities.png';
import tara from '../assets/projects/tara-inventory.webp';
import ekshop from '../assets/projects/ekshop-storefront.png';

export const featuredProjects = [
  {
    number: '01',
    name: 'Gemba EMS',
    type: 'PROFESSIONAL WORK · COMPANY SYSTEMS',
    description: "Company tools need to keep each organization's people and workflows separate. At Gemba, I built configurable employee imports and contributed to tenant-aware workflows.",
    engineering: 'Company-scoped access in a shared database, backed by tenant-isolation tests. Reusable module shells and guided tours keep complex workflows consistent.',
    image: gemba,
    imageAlt: 'Gemba activity management interface with activity imports, recurring processes, and task workflows',
    tags: ['Next.js', 'NestJS', 'PostgreSQL', 'Docker'],
    links: [{ label: 'View code', href: 'https://github.com/Gemba901/ems' }],
  },
  {
    number: '02',
    name: 'TARA POS',
    type: 'PRODUCT · RETAIL & OFFLINE',
    description: 'Small shops need to keep selling when connectivity drops. I built a point-of-sale PWA with inventory, receipts, and offline sales.',
    engineering: "Queue offline writes with a service worker and sync on reconnection. Keep daily totals network-only so cached figures don't look current.",
    image: tara,
    imageAlt: 'TARA POS inventory showing products, stock levels, prices, and profit margins',
    tags: ['Next.js', 'FastAPI', 'PWA', 'AWS'],
    links: [
      { label: 'View code', href: 'https://github.com/rodgers-munene/tara' },
      { label: 'Visit product', href: 'https://tara-lyart-alpha.vercel.app/' },
    ],
  },
  {
    number: '03',
    name: 'EkShop',
    type: 'CO-FOUNDED · MARKETPLACE',
    description: 'Buying from several local sellers should feel like one order. I co-founded EkShop and built its marketplace, delivery workflows, and cloud infrastructure.',
    engineering: 'Split checkout across vendors, price delivery by location and weight, and deploy on Terraform-managed AWS infrastructure. Paystack is integrated; M-Pesa checkout integration is pending.',
    image: ekshop,
    imageAlt: 'Current EkShop storefront with product discovery and seller registration',
    tags: ['Next.js', 'FastAPI', 'PostgreSQL', 'Terraform'],
    links: [
      { label: 'View code', href: 'https://github.com/rodgers-munene/ekshop' },
      { label: 'Visit product', href: 'https://ekshop.vercel.app/' },
    ],
  },
];

export const additionalProjects = [
  {
    name: 'Agrotrack',
    description: 'Mobile farm management, agricultural AI, and crop disease detection.',
    href: 'https://github.com/rodgers-munene/Agrotrack',
  },
];
