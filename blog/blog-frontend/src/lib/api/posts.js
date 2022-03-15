import client from './client';

//게시물 작성
export const writePost = ({ title, body, tags }) =>
  client.post('/api/posts', { title, body, tags });
