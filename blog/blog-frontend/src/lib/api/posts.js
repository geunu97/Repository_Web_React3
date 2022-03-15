import qs from 'qs';
import client from './client';

//게시물 작성
export const writePost = ({ title, body, tags }) =>
  client.post('/api/posts', { title, body, tags });

//게시물 읽기
export const readPost = (id) => client.get(`/api/posts/${id}`);

export const listPosts = ({ page, username, tag }) => {
  const queryString = qs.stringify({
    page,
    username,
    tag,
  });
  return client.get(`/api/posts?${queryString}`);
};
