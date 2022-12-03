// import { makePostsMocks } from '../__mocks__/posts';

export async function getPosts(): Promise<number[]> {
  // return makePostsMocks(55);
  return fetch('https://hacker-news.firebaseio.com/v0/topstories.json').then(res => res.json());
}
