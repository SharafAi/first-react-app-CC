import { useReducer } from "react";
import { createContext } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList]

  }
  return newPostList;
  
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    PostListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, postReactions, postTags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: postReactions,
        userId: userId,
        tag: postTags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
      }}
    >
      {" "}
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: 1,
    title: "going fishing",
    body: "hey guys im going fishing tonight its gonna be fun",
    reactions: 3,
    userId: "user-10",
    tag: ["maldives", "fishing", "excited"],
  },
  {
    id: 6,
    title: "im changing my job role from yard supervisor to IT staff",
    body: "im gonna work as IT manager",
    reactions: 89,
    userId: "user-108",
    tag: ["InformationTechnology", "newjob", "excited"],
  },
];

export default PostListProvider;
