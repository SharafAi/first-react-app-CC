import { useContext, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/PostListStore";
import WelcomeMsg from "./WelcomeMsg";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [dataFetched, setDatafetched] = useState(false);

  if (!dataFetched) {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
    setDatafetched(true);
  }

  return (
    <>
      {postList.length === 0 && <WelcomeMsg />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
