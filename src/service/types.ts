export type PostType = 'job' | 'story' | 'comment' | 'poll' | 'pollopt';

export type Post = {
  id: number;
  type: PostType;
  by: string;
  time: number;
  text: string;
  title: string;
  score: number;
  url: string;
};

export type PostList = number[];

export type Posts = Post[];