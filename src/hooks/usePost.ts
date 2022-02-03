import { useQuery } from "react-query";
import axios from "axios";

interface IPostResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const getPosts = async () => {
  const { data } = await axios.get<Array<IPostResponse>>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
};

export const usePosts = () =>
  useQuery<Array<IPostResponse>, Error>("posts", getPosts);
