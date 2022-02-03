import { usePosts } from "hooks/usePost";

export const Post = () => {
  const { data, error, isFetching } = usePosts();

  if (error) {
    return <p>${error.message}</p>;
  }

  if (isFetching) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {data?.map((post) => (
        <li key={post.id}>
          <div>
            <h1>{post.title}</h1>
          </div>
          <div>{post.body}</div>
        </li>
      ))}
    </ul>
  );
};
