export const competitors = {
  coLivingPlatform: {
    name: 'Premium Co-Living Platform',
    slug: 'co-living-platform',
    tagline: 'Modern co-living management platform',
    pricing: '₹1,499 – ₹2,999 per property/month',
    setupFee: '₹5,000+ one-time onboarding',
    freeTrial: '14 days (credit card required)',
    target: 'Premium co-living chains and large PG operators',
    summary:
      'Some premium co-living platforms offer polished interfaces aimed at upscale operators. While they work well for premium properties, their higher pricing and generic property-management workflow make them less practical for everyday Indian PG owners who need affordable, PG-specific automation.',
    rows: [
      { feature: 'Monthly pricing', mypg: '₹499/property (or ₹3,999/year)', competitor: '₹1,499 – ₹2,999/property' },
      { feature: 'Free trial', mypg: '7 days, no credit card', competitor: '14 days, card required' },
      { feature: 'WhatsApp rent reminders', mypg: 'Yes – automated', competitor: 'Limited / email only' },
      { feature: 'UPI / GPay / PhonePe', mypg: 'Built-in', competitor: 'Third-party integrations' },
      { feature: 'Digital KYC & documents', mypg: 'Yes – Aadhaar, PAN, photos', competitor: 'Yes' },
      { feature: 'Multi-property dashboard', mypg: 'Unlimited properties', competitor: 'Yes, on higher plans' },
      { feature: 'PG-specific features', mypg: 'Built for PG/hostel workflow', competitor: 'Generic co-living focus' },
      { feature: 'Customer support', mypg: 'Phone, WhatsApp, email', competitor: 'Email & chat only' },
      { feature: 'Setup time', mypg: 'Under 30 minutes', competitor: '2–5 days' },
      { feature: 'Language support', mypg: 'English, Hindi, Tamil, Telugu, Kannada, Marathi', competitor: 'English only' },
    ],
    cons: [
      'Expensive for small PGs',
      'Not optimized for Indian PG laws/KYC',
      'Long onboarding process',
      'Limited Indian language support',
    ],
    faqs: [
      {
        q: 'Are premium co-living platforms better than MY PG for Indian PG owners?',
        a: 'Premium co-living platforms are polished, but MY PG is purpose-built for Indian PG owners with lower pricing (₹499/month), faster onboarding, WhatsApp reminders, Indian language support, and PG-specific KYC flows.',
      },
      {
        q: 'Which is more affordable, MY PG or premium co-living platforms?',
        a: 'MY PG starts at ₹499/month with a 7-day free trial and no setup fee. Premium co-living platforms typically cost ₹1,499–₹2,999 per property per month plus onboarding fees.',
      },
      {
        q: 'Do premium platforms support WhatsApp rent reminders?',
        a: 'Most premium platforms rely on email and in-app notifications. MY PG provides automated WhatsApp rent reminders with payment links, which is critical for Indian tenants.',
      },
    ],
  },
  basicRentTracker: {
    name: 'Basic Rent Tracker',
    slug: 'basic-rent-tracker',
    tagline: 'Basic PG rent tracking tool',
    pricing: '₹999 – ₹1,999 per property/month',
    setupFee: '₹2,000 one-time',
    freeTrial: 'No free trial',
    target: 'Small PGs with basic tracking needs',
    summary:
      'Basic rent trackers focus on simple rent logging for small PGs. They lack the automation, mobile experience, and multi-property capabilities that growing PG owners need.',
    rows: [
      { feature: 'Monthly pricing', mypg: '₹499/property (or ₹3,999/year)', competitor: '₹999 – ₹1,999/property' },
      { feature: 'Free trial', mypg: '7 days, no credit card', competitor: 'No free trial' },
      { feature: 'Automated WhatsApp reminders', mypg: 'Yes', competitor: 'SMS only' },
      { feature: 'Mobile app', mypg: 'Android + web dashboard', competitor: 'Android only' },
      { feature: 'Online rent collection', mypg: 'Integrated UPI/link payments', competitor: 'Manual entry only' },
      { feature: 'Digital receipts', mypg: 'Auto-generated PDF receipts', competitor: 'Basic receipt notes' },
      { feature: 'Multi-property support', mypg: 'Unlimited properties & beds', competitor: 'Single property focus' },
      { feature: 'Tenant KYC storage', mypg: 'Aadhaar/PAN/photo upload', competitor: 'Limited document storage' },
      { feature: 'Expense tracking', mypg: 'Categorized P&L reports', competitor: 'Not available' },
      { feature: 'Customer support', mypg: 'Phone, WhatsApp, email', competitor: 'Phone only' },
    ],
    cons: ['No automation', 'No free trial', 'Limited to Android', 'No multi-property scale', 'Manual rent collection'],
    faqs: [
      {
        q: 'Basic rent tracker vs MY PG: which is better for automation?',
        a: 'MY PG automates rent reminders, receipt generation, payment tracking, and late-payment follow-ups. Basic rent trackers are mostly manual logging tools.',
      },
      {
        q: 'Can I collect rent online with a basic rent tracker?',
        a: 'Basic rent trackers typically rely on manual rent entry. MY PG includes integrated online payments via UPI, Google Pay, PhonePe, and net banking.',
      },
      {
        q: 'Are basic rent trackers cheaper than MY PG?',
        a: 'No. Basic rent trackers often start around ₹999/property/month with no trial, while MY PG is ₹499/month with a 7-day free trial.',
      },
    ],
  },
  newWebTool: {
    name: 'New Web-Only Tool',
    slug: 'new-web-tool',
    tagline: 'Newer PG management entrant',
    pricing: '₹799 – ₹1,499 per property/month',
    setupFee: '₹1,500 one-time',
    freeTrial: '7 days',
    target: 'Individual PG owners just starting out',
    summary:
      'Newer web-only tools cover basic PG management but lack the depth of automation, reporting, and support that established operators need.',
    rows: [
      { feature: 'Monthly pricing', mypg: '₹499/property (or ₹3,999/year)', competitor: '₹799 – ₹1,499/property' },
      { feature: 'Free trial', mypg: '7 days, no credit card', competitor: '7 days' },
      { feature: 'WhatsApp reminders', mypg: 'Yes – automated with links', competitor: 'Not available' },
      { feature: 'Mobile app', mypg: 'Android + responsive web', competitor: 'Web only' },
      { feature: 'Multi-property dashboard', mypg: 'Unlimited', competitor: 'Limited / single property' },
      { feature: 'CCTV integration', mypg: 'Yes', competitor: 'No' },
      { feature: 'Food / mess management', mypg: 'Yes', competitor: 'No' },
      { feature: 'Maintenance ticketing', mypg: 'Complaint & maintenance module', competitor: 'Basic notes' },
      { feature: 'Digital rent receipts', mypg: 'GST-ready PDF receipts', competitor: 'Basic' },
      { feature: 'Customer support', mypg: 'Phone, WhatsApp, email', competitor: 'Email only' },
    ],
    cons: [
      'Fewer automation features',
      'No mobile app',
      'Limited customer support',
      'Shorter track record',
      'No WhatsApp integration',
    ],
    faqs: [
      {
        q: 'New web-only PG tools vs MY PG: which has more features?',
        a: 'MY PG offers deeper automation including WhatsApp reminders, CCTV integration, food management, maintenance ticketing, and multi-property dashboards. Newer web-only tools are generally lighter and more basic.',
      },
      {
        q: 'Do new web-only PG tools have a mobile app?',
        a: 'Many newer web-only tools do not offer a mobile app. MY PG provides both an Android app and a full web dashboard.',
      },
      {
        q: 'Are new web-only tools suitable for multiple PG properties?',
        a: 'Newer tools often focus on single or limited properties. MY PG scales to unlimited properties with consolidated reporting.',
      },
    ],
  },
}
