import type { Post } from '../types';
// import { makePostMock } from '../__mocks__/posts';

export const getPost = async (id: number): Promise<Post> => {
  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve(makePostMock(id));
  //   }, Math.random() * 1000);
  // });
  return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(res => res.json());
};
