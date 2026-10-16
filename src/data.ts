// Shared copy from the approved homepage design (design/homepage-reference.html).

export const services = [
  {
    id: 'ai-search',
    num: '01',
    title: 'AI search optimisation (GEO/AEO)',
    text: 'Get your brand cited in ChatGPT, Gemini, Perplexity and Google AI Overviews. I track where you show up, then fix the content and signals behind it.',
    packages: [
      {
        name: 'AI visibility audit',
        price: '[PRICE]',
        basis: 'Fixed price',
        items: [
          'Baseline of brand citations in ChatGPT, Gemini, Perplexity and AI Overviews',
          'Prompts and topics where competitors get cited and you don\'t',
          'Content, entity and schema gaps behind missing citations',
          'Prioritised fixes ranked by impact and effort',
        ],
      },
      {
        name: 'AI search optimisation',
        price: '[PRICE]',
        basis: 'Per month',
        items: [
          'Ongoing citation and sentiment tracking across AI assistants',
          'Content and signal improvements, shipped each month',
          'Reporting on where you show up and what changed',
        ],
      },
    ],
  },
  {
    id: 'technical-seo',
    num: '02',
    title: 'Technical SEO',
    text: 'Audits, site architecture, indexation, Core Web Vitals and schema, so Google and AI crawlers can find, read and trust your pages.',
    packages: [
      {
        name: 'Technical SEO audit',
        price: '[PRICE]',
        basis: 'Fixed price',
        items: [
          'Crawl, indexation and site architecture review',
          'Core Web Vitals and schema checks',
          'AI crawler access and rendering checks',
          'Prioritised roadmap ranked by impact and effort',
        ],
      },
      {
        name: 'Implementation support',
        price: '[PRICE]',
        basis: 'Per project',
        items: ['Fixes specified and handed to your developers', 'QA after each release', 'Migration and replatform support'],
      },
    ],
  },
  {
    id: 'seo-strategy',
    num: '03',
    title: 'SEO strategy & organic growth',
    text: 'Keyword strategy mapped to intent, content that answers real questions, and reporting that ties rankings back to leads.',
    packages: [
      {
        name: 'Keyword & content strategy',
        price: '[PRICE]',
        basis: 'Fixed price',
        items: ['Keyword research mapped to search intent', 'Content gaps against competitors', 'Page-by-page content plan and briefs'],
      },
      {
        name: 'Ongoing SEO',
        price: '[PRICE]',
        basis: 'Per month',
        items: [
          'Monthly priorities across technical, content and AI search',
          'Rank and AI-citation tracking',
          'Reporting tied to organic traffic and leads',
        ],
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
  { when: 'WEEKS 2–3', title: 'SEO & AI visibility audit', text: 'Technical SEO, content and AI citations, reviewed together.' },
  { when: 'WEEK 4', title: 'Prioritised roadmap', text: 'The fixes ranked by impact and effort, with clear owners.' },
  { when: 'ONGOING', title: 'Build, publish, report', text: 'Implementation, content and a live visibility dashboard you can check anytime.', accent: true },
];

export const skills = ['Screaming Frog', 'Ahrefs', 'DataForSEO', 'Schema markup', 'Python', 'LangGraph', 'Google ADK', 'BigQuery', 'Looker Studio', 'GA4'];

// Agency clients: always shown as "via AKQA & R/GA".
export const agencyBrands = ['KFC', 'Toyota', 'HESTA', 'Fonterra'];

export const goals = ['AI search visibility', 'Organic traffic & rankings', 'Technical SEO', 'Something else'];
export const budgets = ['[BUDGET RANGE 1]', '[BUDGET RANGE 2]', '[BUDGET RANGE 3]'];
