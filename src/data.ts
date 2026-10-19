export type CaseSection = { title: string; points: string[] };
type SkillGroup = { title: string; description: string; items: string[]; examples?: Record<string, string>; footnote?: string };
export type Project = {
  id: string; title: string; category: string; summary: string; tags: string[];
  visual: 'financing' | 'valuation' | 'analytics'; status: string;
  notice: string; takeaway?: string;
  sections: CaseSection[]; images: { src: string; alt: string; caption: string }[];
  links: { label: string; url: string }[];
};
// Personal facts are limited to those supplied. Empty values deliberately render as placeholders.
export const profile = {
  name: 'Hiren Vasavishetti', initials: 'HV', degree: 'Accounting & Finance',
  university: 'University of Leicester',
  introduction: 'Exploring how businesses create value, how transactions take shape, and how technology is changing finance.',
  about: 'I’m an Accounting and Finance student at the University of Leicester with an interest in investment banking, mergers and acquisitions, financial modelling, financial markets and financial technology.',
  motivation: 'I’m interested in the questions behind the numbers: what drives a business, how it is valued, and how financial decisions shape its future.',
  educationDates: '', email: 'hirenvasavishetti@gmail.com', github: 'https://github.com/hirenvasavishetti', linkedin: 'https://www.linkedin.com/in/hiren-raj-vasavishetti-3b5b9a371',
  interests: ['Investment banking', 'Mergers & acquisitions', 'Financial modelling', 'Financial markets', 'Financial technology'],
  skillGroups: [
    { title: 'Finance', description: 'Areas of interest', items: ['Business valuation', 'Acquisition financing', 'Financial modelling', 'Financial markets'], footnote: 'Interests, not a proficiency claim' },
    {
      title: 'Technical', description: 'Tools & practical application',
      items: ['Microsoft Excel', 'Python', 'SQLite', 'Power BI', 'React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    },
    { title: 'Analytical', description: 'Applied across independent finance projects', items: ['Financial statement analysis', 'Company and transaction research', 'Scenario and sensitivity analysis', 'Liquidity and credit risk analysis', 'Critical evaluation of assumptions', 'Interpreting and presenting financial findings'] },
  ] as SkillGroup[],
  experience: [{ title: 'Spring Week Work Experience', organisation: 'Almacantar', dates: 'Upcoming', description: '' }] as { title: string; organisation: string; dates: string; description: string }[],
  certifications: [] as { title: string; issuer: string; date: string; url?: string }[],
  achievements: [] as string[],
};
const section = (title: string, points: string[]): CaseSection => ({ title, points });
export const projects: Project[] = [
  {
    id: 'acquisition-financing', title: 'Acquisition Financing Simulator', category: 'Corporate finance & credit',
    summary: 'Comparing acquisition funding, debt capacity and liquidity risk through a five-year DICK’S Sporting Goods / Foot Locker case study.',
    tags: ['Python & SQLite', 'Debt capacity', 'Credit stress testing'], visual: 'financing', status: 'Interactive project',
    notice: 'Independent educational analysis. Historical information cutoff: 15 May 2025. Public-company forecasts are conditional; the strict actual-company recommendation remains blocked by incomplete evidence. Artwork is conceptual.',
    takeaway: 'An acquisition can meet a leverage target and still run out of cash. In the conditional public case, a two-percentage-point annual growth reduction causes a year-four cash breach even with unchanged initial borrowing.',
    sections: [
      section('Objective', [
        "Explore how acquisition funding choices affect debt service, liquidity and resilience.",
        "The simulator compares cash-first, liquidity-first and mixed-consideration structures, using a fictional Atlas / Beacon demonstration alongside a conditional DICK’S Sporting Goods / Foot Locker public-information case.",
      ]),
      section('Methodology', [
        "Connect sources and uses, projected closing balances, five-year operating forecasts, taxes, investment, working capital and instrument-level debt schedules.",
        "Evaluate annual and quarterly cash timing, then search for debt capacity and use reverse stress tests to identify binding constraints.",
      ]),
      section('Technical implementation', [
        "Python calculation engine powering a responsive browser dashboard.",
        "SQLite records for inputs, evidence and model runs.",
        "Live model recalculation and JSON exports in the browser.",
        "CLI workflows generating Excel, PDF and SQLite outputs.",
        "Excel exports using XlsxWriter; PDF exports using ReportLab.",
      ]),
      section('Financial analysis', [
        "Compare funding costs, ownership dilution, cash reserves, leverage, interest coverage and refinancing shortfalls.",
        "The engine includes cash sweeps, debt maturities, assumed refinancing, operating and working-capital shocks, and 27 combined margin/rate stress cases.",
        "The public-case screens use a $750m cash floor, a maximum 3.0× net leverage ratio and minimum 4.0× interest coverage.",
        "These are analytical thresholds, not contractual covenants.",
      ]),
      section('Results', [
        "In the fictional case, cash-first capacity is $948m on an annual basis versus $928m quarterly; using $948m borrowing in the quarterly model leaves cash $24.3m below the reserve.",
        "In the public worked example, initial annual capex budgets of $900m for DICK’S and $240m for Foot Locker, suspended discretionary dividends and mixed consideration require $1,136.6m of new borrowing.",
        "The structure passes the stated screens with no growth penalty or a one-percentage-point penalty.",
        "A two-percentage-point reduction in both companies’ annual growth across years 1–5 produces minimum cash of $389.7m and a first breach in year four.",
      ]),
      section('Limitations', [
        "The growth penalties are sensitivities, not estimates of the consequences of cutting investment.",
        "Cash accessibility, cost behaviour, seasonality and refinancing remain assumptions; lease-consent payments, award withholding and exceptional commitments are incompletely bounded.",
        "Source integrity and passing software tests do not establish historical completeness, lender commitments or executable financing.",
        "Negative balances after a breach describe an unfunded path.",
        "Saved outputs should be regenerated against the current code version before being relied on.",
      ]),
    ], images: [], links: [
      { label: 'Try the live simulator', url: 'https://acquisition-financing-simulator.onrender.com/' },
      { label: 'View code on GitHub', url: 'https://github.com/hirenvasavishetti/acquisition-financing-simulator' },
      { label: 'Read the worked example', url: 'https://github.com/hirenvasavishetti/acquisition-financing-simulator#worked-example-less-borrowing-does-not-remove-the-cash-constraint' },
    ],
  },
  {
    id: 'ma-valuation', title: 'PepsiCo / Celsius M&A Valuation', category: 'Independent M&A analysis',
    summary: 'An integrated valuation and transaction model asking whether a hypothetical PepsiCo acquisition of Celsius creates value beyond EPS accretion.',
    tags: ['Three-statement model', 'DCF & comparables', 'Accretion / dilution'], visual: 'valuation', status: 'Completed case study',
    notice: 'Independent educational project completed 21 September 2026. Valuation and information cutoff: 31 August 2026; hypothetical closing: 1 January 2027. Neither company commissioned or endorsed the work. Figures are illustrative model outputs, not actual transaction results.',
    takeaway: 'EPS accretion is not the same as value creation. The illustrative $39.31 offer produces 1.44% FY2028 EPS accretion but a negative $1.63bn acquisition NPV; the model’s economic price ceiling is $32.85 per share.',
    sections: [
      section('Objective', [
        "Assess Celsius Holdings’ standalone value and whether a negotiated acquisition by PepsiCo could create incremental shareholder value.",
        "Bring the operating forecast, valuation, financing, synergies and execution risks into a single transaction recommendation.",
      ]),
      section('Methodology', [
        "Build an integrated three-statement model and forecast through FY2030, using FY2023–25 historicals and H1 2026 observations.",
        "Evaluate base, upside, downside and zero-gross-synergy cases.",
        "Combine a DCF with trading comparables and a review of relevant precedent transactions.",
        "The precedent sample is too sparse to support a reliable valuation range, so it is used as context rather than a fabricated statistical benchmark.",
      ]),
      section('Technical implementation', [
        "17-sheet, formula-driven Excel workbook with linked financial schedules.",
        "Editable 18-slide PowerPoint pitch book and matching PDF presentation.",
        "Linked operations, working-capital, financing and valuation schedules.",
        "Integrated sources and uses, purchase price allocation, synergies and accretion analysis.",
      ]),
      section('Financial analysis', [
        "Discount unlevered cash flow at the model’s 10.4329% WACC, with a four-month stub and 2.5% terminal growth.",
        "Trading comparables use a judgement range of 18–24× normalised LTM EBITDA, anchored to Monster with Coca-Cola and PepsiCo as contextual peers.",
        "Model a 20% cash / 60% debt / 20% stock funding mix, incremental synergies beyond existing distribution benefits, integration costs and illustrative purchase price allocation.",
        "Solve EPS-neutral and NPV-zero offer prices separately, with existing preferred holdings treated explicitly.",
      ]),
      section('Results', [
        "The model rejects an illustrative $39.31 offer, representing a 25% premium to the model’s $31.45 unaffected price.",
        "Base-case acquisition NPV is –$1,626.8m despite 1.44% FY2028 EPS accretion.",
        "The economic price ceiling is $32.85, below the $54.02 EPS-neutral ceiling.",
        "The educational recommendation is to retain the partnership unless diligence supports stronger incremental cash flows; the model’s below-market discussion range is not presented as an executable control bid.",
      ]),
      section('Limitations', [
        "Preferred-security valuation uses a simplified liquidation-equivalent allocation rather than a full option and contractual analysis.",
        "Forecast growth, margins, synergies, funding costs and purchase price allocation are assumptions.",
        "The model assumes net-neutral distribution-contract settlement and optimistic terminal cash-flow persistence.",
        "Interim capitalisation and award settlement require updating.",
      ]),
    ], images: [], links: [
      { label: 'View the pitch book (PDF)', url: './projects/pepsico-celsius/pitchbook.pdf' },
      { label: 'Download the Excel model', url: './projects/pepsico-celsius/model.xlsx' },
    ],
  },
];
