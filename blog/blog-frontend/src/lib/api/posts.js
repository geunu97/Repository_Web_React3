import qs from 'qs';
import client from './client';

//게시물 작성
export const writePost = ({ title, body, tags }) =>
  client.post('/api/posts', { title, body, tags });

//게시물 읽기
export const readPost = (id) => client.get(`/api/posts/${id}`);

//게시물 데이터들 불러오기  //해당 page 또는 해당 username 또는 해당 tag값만 가져온다
export const listPosts = ({ page, username, tag }) => {
  const queryString = qs.stringify({
    page,
    username,
    tag,
  });
  return client.get(`/api/posts?${queryString}`); //쿼리 스트링 형태 //예시) api/posts?username=tester&page=2
};
