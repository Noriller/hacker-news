export type Post = {
  id: number;
  type: 'job' | 'story' | 'comment' | 'poll' | 'pollopt';
  by: string;
  time: number;
  text: string;
  title: string;
  score: number;
  url: string;
};

export type PostList = number[];

export type Posts = Post[];