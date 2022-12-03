import { makePostsMocks } from '../__mocks__/posts';

export async function getPosts() {
  return makePostsMocks(55);
}
