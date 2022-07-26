export type GetResponse<T> = Promise<{
  data: StrpItem<T>;
}>;

export interface StrpMeta {
  pagination: {
    page: number;
    pageCount: number;
    pageSize: number;
    total: number;
  };
}

export interface StrpItem<T> {
  attributes: T;
  id: number;
}

export interface StrpList<T> {
  data: StrpItem<T>[];
  meta: StrpMeta;
}

export interface StrpInnerList<T> {
  data: StrpItem<T>[];
}

export interface Quiz {
  answer: string;
  syllables: string;
  hint: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  weight: number;
}

export interface QuizSet {
  title: string;
  ogTitle: string;
  ogDescription: string;
  description: string;
  ogImage: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  quizzes: StrpInnerList<Quiz>;
  gameMode: GameMode;
}

export interface QuizResult {
  quizId: number;
  nickname: string;
  score: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export type GameMode = '일반' | '우당탕탕' | '권모술수';
