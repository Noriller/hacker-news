import type { Post } from '../types';

export const makePostsMocks = (qty = 200) => {
  return Array.from(
    new Set(
      Array(qty).fill(0).map(() => Math.round(Math.random() * 100))
    )
  );
};

const randomBetween = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

export const makePostMock = (id: number): Post => ({
  id,
  by: `post by ${id}`,
  score: id,
  text: `text ${id}  `.repeat(randomBetween(0, 100)),
  time: id * 10000000000,
  title: `title ${id}`,
  type: id % 2 == 0 ? 'story' : 'job',
  url: `url/${id}`,
});