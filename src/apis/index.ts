import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import type { QuizResult, QuizSet, StrpList, GetResponse } from '../types';
import ENVS from 'src/libs/envs';

const apiConfig = {
  baseURL: ENVS.NEXT_PUBLIC_API_URL ?? 'http://localhost:1337',
};

const api: AxiosInstance = axios.create(apiConfig);
const http = {
  get: <T>(url: string, config?: AxiosRequestConfig) =>
    api
      .get(url, {
        ...config,
      })
      .then(({ data }) => data as T),
  delete: (url: string, config?: AxiosRequestConfig) =>
    api.delete(url, {
      ...config,
    }),
  post: (url: string, body?: any, config?: AxiosRequestConfig) =>
    api.post(url, body, {
      ...config,
    }),
  put: (url: string, body?: any, config?: AxiosRequestConfig) =>
    api.put(url, body, {
      ...config,
    }),
  patch: (url: string, body?: any, config?: AxiosRequestConfig) =>
    api.patch(url, body, {
      ...config,
    }),
};

const apis = {
  quizSet: {
    get: (id: number | string): GetResponse<QuizSet> =>
      http.get(`/api/quiz-sets/${id}?populate=*`),
    all: () => http.get<StrpList<QuizSet>>(`/api/quiz-sets`),
  },
  result: {
    get: (id: number | string): GetResponse<QuizResult> =>
      http.get(`/api/results/${id}`),
    create: (data: Pick<QuizResult, 'quizId' | 'nickname' | 'score'>) =>
      http.post(`/api/results`, { data }),
  },
};

export default apis;
