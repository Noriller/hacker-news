import { useQuery } from '@tanstack/react-query';
import { getPosts } from './getPosts';

export function usePosts() {
  return useQuery(["posts"], getPosts);
}