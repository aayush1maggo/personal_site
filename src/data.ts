// Shared copy from the approved homepage design (design/homepage-reference.html).

export const services = [
  {
    id: 'technical-seo',
    num: '01',
    title: 'Technical SEO & organic growth',
    text: 'Audits, site architecture, indexation, Core Web Vitals, schema, and keyword strategy mapped to intent.',
    packages: [
      {
        name: 'Technical SEO audit',
        price: '[PRICE]',
        basis: 'Fixed price',
        items: [
          'Crawl, indexation and site architecture review',
          'Core Web Vitals and schema checks',
          'Keyword strategy mapped to search intent',
          'Prioritised roadmap ranked by impact and effort',
        ],
      },
      {
        name: 'Ongoing organic growth',
        price: '[PRICE]',
        basis: 'Per month',
        items: ['Implementation support for the roadmap', 'Keyword and content planning', 'Monthly reporting tied to traffic and leads'],
      },
    ],
  },
  {
    id: 'ai-search',
    num: '02',
    title: 'AI search visibility (AEO/GEO)',
    text: 'Track how ChatGPT, Gemini and Perplexity cite your brand, then improve the content and signals behind it.',
    packages: [
      {
        name: 'AI visibility audit',
        price: '[PRICE]',
        basis: 'Fixed price',
        items: [
          'Baseline of brand citations in ChatGPT, Gemini and Perplexity',
          'Content and signal gaps behind missing citations',
          'Prioritised fixes',
        ],
      },
      {
        name: 'AI visibility monitoring',
        price: '[PRICE]',
        basis: 'Per month',
        items: ['Ongoing citation and sentiment tracking', 'Content and signal improvements', 'Regular reporting on where you show up'],
      },
    ],
  },
  {
    id: 'analytics',
    num: '03',
    title: 'Analytics & tracking',
    text: 'GA4 and GTM setup, BigQuery pipelines and Looker Studio dashboards your team will actually use.',
    packages: [
      {
        name: 'Tracking audit & setup',
        price: '[PRICE]',
        basis: 'Fixed price',
        items: ['GA4 and GTM accuracy review', 'Conversion tracking from click to lead', 'Fixes implemented and documented'],
      },
      {
        name: 'Reporting & data pipelines',
        price: '[PRICE]',
        basis: 'Per project',
        items: ['BigQuery pipelines', 'Looker Studio dashboards built for your team', 'Handover so your team can run it'],
      },
    ],
  },
  {
    id: 'cro',
    num: '04',
    title: 'CRO & experimentation',
    text: 'Journey analysis to find drop-offs, then A/B and multivariate tests to fix them.',
    packages: [
      {
        name: 'Journey & drop-off analysis',
        price: '[PRICE]',
        basis: 'Fixed price',
        items: ['Funnel and journey analysis', 'Drop-off points ranked by opportunity', 'Test hypotheses ready to run'],
      },
      {
        name: 'Experimentation programme',
        price: '[PRICE]',
        basis: 'Per month',
        items: ['A/B and multivariate test design and analysis', 'Results reporting', 'Rollout recommendations'],
      },
    ],
  },
];

export const tools = [
  {
    stack: 'DataForSEO · BigQuery',
    title: 'Rank tracker',
    text: 'A proprietary rank-tracking system with full history, replacing third-party subscriptions.',
  },
  {
    stack: 'ChatGPT · Gemini · Perplexity',
    title: 'AEO monitor',
    text: 'Tracks brand citations and sentiment across AI assistants, so you can see where you show up.',
  },
  {
    stack: 'Python · LangGraph · Google ADK',
    title: 'AI research agents',
    text: 'Automated keyword research, content-gap analysis and briefs that scale optimisation work.',
  },
];

export const steps = [
  { when: 'WEEK 1', title: 'Discovery call', text: "Your goals, your data, and whether I'm the right fit." },
  { when: 'WEEKS 2–3', title: 'Audit & tracking check', text: 'Technical SEO, AI visibility and analytics accuracy, reviewed together.' },
  { when: 'WEEK 4', title: 'Prioritised roadmap', text: 'The fixes ranked by impact and effort, with clear owners.' },
  { when: 'ONGOING', title: 'Build, test, report', text: 'Implementation, experiments and a live dashboard you can check anytime.', accent: true },
];

export const skills = ['GA4', 'GTM', 'BigQuery', 'SQL', 'Python', 'Looker Studio', 'Adobe Analytics', 'Screaming Frog', 'Ahrefs', 'LangGraph'];

// Agency clients: always shown as "via AKQA & R/GA".
export const agencyBrands = ['KFC', 'Toyota', 'HESTA', 'Fonterra'];

export const goals = ['Organic traffic & rankings', 'AI search visibility', 'Analytics & tracking', 'Conversion rate'];
export const budgets = ['[BUDGET RANGE 1]', '[BUDGET RANGE 2]', '[BUDGET RANGE 3]'];
