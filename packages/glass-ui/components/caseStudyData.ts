import type { CaseStudyData } from './CaseStudyCard';

export const allCaseStudies: CaseStudyData[] = [
  // Marketing Arm
  {
    id: 'summit-mechanical',
    company: 'Summit Mechanical Services',
    location: 'Charlotte, NC',
    industry: 'HVAC',
    arm: 'Marketing Arm',
    beforeImage: '',
    afterImage: '',
    metrics: [
      { label: 'Monthly Leads', before: '0', after: '62', icon: '📈' },
      { label: 'Revenue Growth', after: '+$28K/mo', icon: '💰' },
      { label: 'Google Ranking', before: 'Not listed', after: 'Top 3', icon: '🏆' },
    ],
    testimonial: {
      quote: 'We went from hoping the phone would ring to having to hire two more techs. Borbi didn\'t just build us a website — they built us a pipeline.',
      author: 'Mike Henderson',
      role: 'Owner',
    },
  },
  {
    id: 'rosemarys-kitchen',
    company: "Rosemary's Kitchen",
    location: 'Austin, TX',
    industry: 'Restaurant',
    arm: 'Marketing Arm',
    beforeImage: '',
    afterImage: '',
    metrics: [
      { label: 'Monthly Revenue', before: '$42K', after: '+$40K/mo', icon: '💰' },
      { label: 'Foot Traffic', after: '+45%', icon: '🚶' },
      { label: 'Online Reservations', before: '0', after: '250+/mo', icon: '📅' },
    ],
    testimonial: {
      quote: 'Friday nights went from half-empty to waitlisted. The reservation system alone changed how we operate.',
      author: 'Aldo Moretti',
      role: 'Chef & Owner',
    },
  },
  // Website Services
  {
    id: 'thread-and-bone',
    company: 'Thread & Bone',
    location: 'Brooklyn, NY',
    industry: 'Shopify / E-commerce',
    arm: 'Website Services',
    beforeImage: '',
    afterImage: '',
    metrics: [
      { label: 'Conversion Rate', before: '1.2%', after: '+209%', icon: '📈' },
      { label: 'Bounce Rate', before: '78%', after: '32%', icon: '📉' },
      { label: 'Avg Order Value', before: '$45', after: '$78', icon: '💳' },
    ],
    testimonial: {
      quote: 'The new site pays for itself every single week. Our customers actually browse now instead of bouncing.',
      author: 'Jordan Lee',
      role: 'Founder, Thread & Bone',
    },
  },
  {
    id: 'clarityhq',
    company: 'ClarityHQ',
    location: 'Remote',
    industry: 'SaaS',
    arm: 'Website Services',
    beforeImage: '',
    afterImage: '',
    metrics: [
      { label: 'Signups', after: '+335%', icon: '📈' },
      { label: 'Conversion', before: '0.8%', after: '3.8%', icon: '🎯' },
      { label: 'Demo Requests', before: '3/mo', after: '45/mo', icon: '📊' },
    ],
    testimonial: {
      quote: 'Our landing page was actively losing us customers. Borbi rebuilt it and signups exploded.',
      author: 'Priya Sharma',
      role: 'CEO, ClarityHQ',
    },
  },
  // Automation Sales
  {
    id: 'packlane-fulfillment',
    company: 'Packlane Fulfillment',
    location: 'Denver, CO',
    industry: 'Logistics / Fulfillment',
    arm: 'Automation Sales',
    beforeImage: '',
    afterImage: '',
    metrics: [
      { label: 'Weekly Hours', before: '15 hrs', after: '1 hr', icon: '⏱️' },
      { label: 'Errors/Week', before: '3-5', after: '0', icon: '✅' },
      { label: 'Orders/Day', after: '147+', icon: '📦' },
    ],
    testimonial: {
      quote: 'We eliminated an entire spreadsheet workflow. 15 hours down to 1, zero errors. The ROI was immediate.',
      author: 'Carlos Mendez',
      role: 'Operations Manager',
    },
  },
  {
    id: 'signal-north',
    company: 'Signal North Media',
    location: 'Toronto, CA',
    industry: 'Media / Analytics',
    arm: 'Automation Sales',
    beforeImage: '',
    afterImage: '',
    metrics: [
      { label: 'Report Time', before: '20 hrs/wk', after: '2 hrs/wk', icon: '⏱️' },
      { label: 'Client Churn', after: '-64%', icon: '📉' },
      { label: 'Client Satisfaction', after: '96%', icon: '❤️' },
    ],
    testimonial: {
      quote: 'Our clients used to wait days for reports. Now they get real-time dashboards. Churn dropped immediately.',
      author: 'Maya Chen',
      role: 'CEO, Signal North Media',
    },
  },
  // Equity Research
  {
    id: 'ridgeline-capital',
    company: 'Ridgeline Capital',
    location: 'New York, NY',
    industry: 'Investment Management',
    arm: 'Equity Research',
    beforeImage: '',
    afterImage: '',
    metrics: [
      { label: 'Report Delivery', before: '4 weeks', after: '5 days', icon: '⚡' },
      { label: 'Scenario Toggle', before: 'None', after: 'Real-time', icon: '🔄' },
      { label: 'Team Adoption', after: '100%', icon: '👥' },
    ],
    testimonial: {
      quote: 'We used to wait a month for static PDFs. Now our analysts toggle scenarios in real-time. Game changer.',
      author: 'David Park',
      role: 'Managing Director',
    },
  },
  {
    id: 'archer-analytics',
    company: 'Archer Analytics',
    location: 'Chicago, IL',
    industry: 'Financial Data',
    arm: 'Equity Research',
    beforeImage: '',
    afterImage: '',
    metrics: [
      { label: 'Data Lag', before: '2 days', after: 'Real-time', icon: '⚡' },
      { label: 'Subscribers', after: '+73%', icon: '📈' },
      { label: 'Revenue', after: '+$180K ARR', icon: '💰' },
    ],
    testimonial: {
      quote: 'The interactive dashboards transformed our product. Subscribers grew 73% in the first quarter after launch.',
      author: 'Rachel Torres',
      role: 'Head of Product',
    },
  },
];

export const getCaseStudiesByArm = (arm: string) => allCaseStudies.filter(cs => cs.arm === arm);
