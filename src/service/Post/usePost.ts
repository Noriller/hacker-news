import { useQuery } from '@tanstack/react-query';
import { getPost } from './getPost';

export function usePost(postId: number) {
  return useQuery(["getPost", postId], () => getPost(postId));
}
