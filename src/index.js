/**
 * twelve-axes-core
 * Core calculation engine and 12-axis political coordinate system for The 12 Axes.
 * Website: https://12axes.site/
 */

export const AXIS_COUNT = 12;

export const CATEGORIES = [
  { id: 'government', title: 'Government', blurb: 'Structure of the state, distribution of authority, and constitutional power.' },
  { id: 'foreign', title: 'Foreign Policy', blurb: 'International relations, military stance, and sovereignty.' },
  { id: 'economy', title: 'Economy', blurb: 'Ownership of production, market regulation, and wealth distribution.' },
  { id: 'society', title: 'Society & Culture', blurb: 'Cultural evolution, tradition, science, and individual identity.' }
];

export const AXES = [
  {
    index: 0,
    slug: 'federal-vs-unitary',
    category: 'government',
    title: 'Federal vs. Unitary',
    left: { id: 'Federalism', name: 'Federal', description: 'Power distributed to regional and local governments.' },
    right: { id: 'Unitary', name: 'Unitary', description: 'Centralized government with supreme national authority.' }
  },
  {
    index: 1,
    slug: 'democratic-vs-autocratic',
    category: 'government',
    title: 'Democratic vs. Autocratic',
    left: { id: 'Democracy', name: 'Democratic', description: 'Popular rule, elections, and civic participation.' },
    right: { id: 'Autocracy', name: 'Autocratic', description: 'Consolidated executive authority and direct rule.' }
  },
  {
    index: 2,
    slug: 'internationalist-vs-nationalist',
    category: 'foreign',
    title: 'Internationalist vs. Nationalist',
    left: { id: 'Internationalism', name: 'Internationalist', description: 'Global cooperation, open borders, and transnational institutions.' },
    right: { id: 'Nationalism', name: 'Nationalist', description: 'National sovereignty, border integrity, and patriotic priority.' }
  },
  {
    index: 3,
    slug: 'militarist-vs-pacifist',
    category: 'foreign',
    title: 'Militarist vs. Pacifist',
    left: { id: 'Militarism', name: 'Militarist', description: 'Preparedness, defense spending, and assertive deterrence.' },
    right: { id: 'Pacifism', name: 'Pacifist', description: 'Diplomacy, disarmament, and anti-war mediation.' }
  },
  {
    index: 4,
    slug: 'security-vs-freedom',
    category: 'government',
    title: 'Security vs. Freedom',
    left: { id: 'Security', name: 'Security', description: 'Public order, crime prevention, and systemic protection.' },
    right: { id: 'Freedom', name: 'Freedom', description: 'Civil liberties, privacy, and protection from surveillance.' }
  },
  {
    index: 5,
    slug: 'equality-vs-markets',
    category: 'economy',
    title: 'Equality vs. Markets',
    left: { id: 'Equality', name: 'Equality', description: 'Egalitarian wealth distribution and social safety nets.' },
    right: { id: 'Markets', name: 'Markets', description: 'Free-market capitalism, private capital, and supply-demand pricing.' }
  },
  {
    index: 6,
    slug: 'secular-vs-religious',
    category: 'society',
    title: 'Secular vs. Religious',
    left: { id: 'Secularism', name: 'Secular', description: 'Separation of church and state, scientific rationality.' },
    right: { id: 'Religion', name: 'Religious', description: 'Moral traditions, faith-based values, and religious heritage.' }
  },
  {
    index: 7,
    slug: 'progressive-vs-traditional',
    category: 'society',
    title: 'Progressive vs. Traditional',
    left: { id: 'Progressivism', name: 'Progressive', description: 'Social reform, modern values, and institutional progress.' },
    right: { id: 'Tradition', name: 'Traditional', description: 'Preservation of customs, historical norms, and heritage.' }
  },
  {
    index: 8,
    slug: 'assimilationist-vs-multiculturalist',
    category: 'society',
    title: 'Assimilationist vs. Multiculturalist',
    left: { id: 'Assimilationism', name: 'Assimilationist', description: 'Shared civic identity and unified national culture.' },
    right: { id: 'Multiculturalism', name: 'Multiculturalist', description: 'Pluralistic cultural diversity and ethnic preservation.' }
  },
  {
    index: 9,
    slug: 'planned-vs-laissez-faire',
    category: 'economy',
    title: 'Planned vs. Laissez-faire',
    left: { id: 'Planning', name: 'Planned Economy', description: 'State coordination, economic oversight, and strategic planning.' },
    right: { id: 'Laissez-faire', name: 'Laissez-faire', description: 'Deregulation, voluntary exchange, and minimal government intervention.' }
  },
  {
    index: 10,
    slug: 'protectionist-vs-globalist',
    category: 'foreign',
    title: 'Protectionist vs. Globalist',
    left: { id: 'Protectionism', name: 'Protectionist', description: 'Tariffs, domestic industrial protection, and trade quotas.' },
    right: { id: 'Free Trade', name: 'Free Trade / Globalist', description: 'Global supply chains, tariff reduction, and open commerce.' }
  },
  {
    index: 11,
    slug: 'technology-vs-bioconservative',
    category: 'society',
    title: 'Technology vs. Bioconservative',
    left: { id: 'Transhumanism / Tech', name: 'Technological Acceleration', description: 'Scientific experimentation, AI, biotechnology, and transhumanism.' },
    right: { id: 'Bioconservatism', name: 'Bioconservative', description: 'Precautionary principles, natural ecology, and bioethical constraints.' }
  }
];

export const ANSWER_VALUES = [2, 1, 0.5, 0, -0.5, -1, -2];

/**
 * Calculate 12-axis percentage scores (0 to 100 toward the left pole).
 * @param {Array<{axis: number, level: number}>} items 
 * @param {Array<number|undefined>} answers 
 * @returns {number[]} 12-element array of percentages (0-100)
 */
export function scoreQuiz(items, answers) {
  const sums = new Array(AXIS_COUNT).fill(0);
  const counts = new Array(AXIS_COUNT).fill(0);

  items.forEach((item, i) => {
    const answer = answers[i];
    if (answer === undefined || answer === null) return;
    sums[item.axis] += answer * (item.level < 4 ? 1 : -1);
    counts[item.axis] += 1;
  });

  return sums.map((sum, axis) =>
    counts[axis] ? Math.round(50 + (50 * sum) / (2 * counts[axis])) : 50
  );
}

/**
 * Encode scores into a 24-character base-36 string.
 * @param {number[]} scores 
 * @returns {string} 24-character code
 */
export function encodeScores(scores) {
  return scores
    .map((s) => Math.min(100, Math.max(0, Math.round(s))).toString(36).padStart(2, '0'))
    .join('');
}

/**
 * Decode a 24-character base-36 string back into 12 scores.
 * @param {string} code 
 * @returns {number[]|null}
 */
export function decodeScores(code) {
  if (!code || !/^[0-9a-z]{24}$/.test(code)) return null;
  const scores = [];
  for (let i = 0; i < 24; i += 2) {
    const value = parseInt(code.slice(i, i + 2), 36);
    if (value > 100) return null;
    scores.push(value);
  }
  return scores;
}

export const IDEOLOGIES = [
  { slug: 'anarcho-communism', name: 'Anarcho-Communism', stats: { econ: 90, dipl: 50, govt: 5, scty: 50 } },
  { slug: 'libertarian-socialism', name: 'Libertarian Socialism', stats: { econ: 80, dipl: 80, govt: 20, scty: 50 } },
  { slug: 'trotskyism', name: 'Trotskyism', stats: { econ: 100, dipl: 100, govt: 40, scty: 50 } },
  { slug: 'marxism', name: 'Marxism', stats: { econ: 100, dipl: 70, govt: 40, scty: 50 } },
  { slug: 'leninism', name: 'Leninism', stats: { econ: 100, dipl: 40, govt: 80, scty: 60 } },
  { slug: 'democratic-socialism', name: 'Democratic Socialism', stats: { econ: 80, dipl: 50, govt: 60, scty: 50 } },
  { slug: 'social-democracy', name: 'Social Democracy', stats: { econ: 60, dipl: 70, govt: 40, scty: 50 } },
  { slug: 'social-liberalism', name: 'Social Liberalism', stats: { econ: 60, dipl: 60, govt: 40, scty: 80 } },
  { slug: 'centrism', name: 'Centrism', stats: { econ: 50, dipl: 50, govt: 50, scty: 50 } },
  { slug: 'liberalism', name: 'Liberalism', stats: { econ: 50, dipl: 60, govt: 40, scty: 60 } },
  { slug: 'classical-liberalism', name: 'Classical Liberalism', stats: { econ: 30, dipl: 60, govt: 40, scty: 50 } },
  { slug: 'conservatism', name: 'Conservatism', stats: { econ: 30, dipl: 40, govt: 60, scty: 30 } },
  { slug: 'neoconservatism', name: 'Neoconservatism', stats: { econ: 20, dipl: 20, govt: 60, scty: 20 } },
  { slug: 'right-libertarianism', name: 'Right-Libertarianism', stats: { econ: 40, dipl: 60, govt: 20, scty: 50 } },
  { slug: 'anarcho-capitalism', name: 'Anarcho-Capitalism', stats: { econ: 10, dipl: 50, govt: 0, scty: 50 } },
  { slug: 'fascism', name: 'Fascism', stats: { econ: 40, dipl: 10, govt: 90, scty: 10 } }
];

/**
 * Match user 12-axis scores against ideologies using Euclidean distance on 4 benchmark axes.
 * Benchmark axes: Economy (axis 5), Government/Security (axis 4), Diplomacy (axis 2), Society/Culture (axis 7).
 * @param {number[]} scores 
 * @returns {Array<{ideology: object, match: number, dist: number}>}
 */
export function matchIdeologies(scores) {
  return IDEOLOGIES.map((ideology) => {
    const { econ, govt, dipl, scty } = ideology.stats;
    const dist =
      (econ - scores[5]) ** 2 +
      (govt - scores[4]) ** 2 +
      (dipl - scores[2]) ** 2 +
      (scty - scores[7]) ** 2;
    return {
      ideology,
      match: Math.max(0, Math.round(100 - Math.sqrt(dist / 4))),
      dist
    };
  }).sort((a, b) => a.dist - b.dist);
}
