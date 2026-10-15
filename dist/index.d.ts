export type CategoryId = 'government' | 'foreign' | 'economy' | 'society';

export interface Category {
  id: CategoryId;
  title: string;
  blurb: string;
}

export interface Pole {
  id: string;
  name: string;
  description: string;
}

export interface Axis {
  index: number;
  slug: string;
  category: CategoryId;
  title: string;
  left: Pole;
  right: Pole;
}

export interface QuizItem {
  axis: number;
  level: number;
}

export interface IdeologyStats {
  econ: number;
  govt: number;
  dipl: number;
  scty: number;
}

export interface Ideology {
  slug: string;
  name: string;
  stats: IdeologyStats;
}

export interface IdeologyMatch {
  ideology: Ideology;
  match: number;
  dist: number;
}

export declare const AXIS_COUNT: number;
export declare const CATEGORIES: readonly Category[];
export declare const AXES: readonly Axis[];
export declare const ANSWER_VALUES: readonly number[];
export declare const IDEOLOGIES: readonly Ideology[];

export declare function scoreQuiz(items: readonly QuizItem[], answers: readonly (number | undefined | null)[]): number[];
export declare function encodeScores(scores: readonly number[]): string;
export declare function decodeScores(code: string | undefined | null): number[] | null;
export declare function matchIdeologies(scores: readonly number[]): IdeologyMatch[];
