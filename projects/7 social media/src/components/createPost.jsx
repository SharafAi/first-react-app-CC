import { useRef } from "react";
import styles from "./createPost.module.css";
import { useContext } from "react";
import { PostList } from "../store/PostListStore";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const postReactionsElement = useRef();
  const postTagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const postReactions = postReactionsElement.current.value;
    const postTags = postTagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    postReactionsElement.current.value = "";
    postTagsElement.current.value = "";

    addPost(userId, postTitle, postBody, postReactions, postTags);
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.heading}>Create a New Post</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* User ID */}
        <div className={styles.fieldGroup}>
          <label htmlFor="userId" className={styles.label}>
            User ID
          </label>
          <input
            type="text"
            ref={userIdElement}
            id="userId"
            className={styles.input}
            placeholder="Enter your user ID"
          />
        </div>

        {/* Caption */}
        <div className={styles.fieldGroup}>
          <label htmlFor="title" className={styles.label}>
            Caption
          </label>
          <input
            type="text"
            ref={postTitleElement}
            id="title"
            className={styles.input}
            placeholder="What’s on your mind?"
          />
        </div>

        {/* Content */}
        <div className={styles.fieldGroup}>
          <label htmlFor="body" className={styles.label}>
            Content
          </label>
          <textarea
            id="body"
            ref={postBodyElement}
            rows={4}
            className={styles.textarea}
            placeholder="Tell us more about it..."
          />
        </div>

        {/* Reactions */}
        <div className={styles.fieldGroup}>
          <label htmlFor="reactions" className={styles.label}>
            Number of Reactions
          </label>
          <input
            type="number"
            ref={postReactionsElement}
            id="reactions"
            className={styles.input}
            placeholder="Enter a number"
          />
        </div>

        {/* Tags */}
        <div className={styles.fieldGroup}>
          <label htmlFor="Tags" className={styles.label}>
            Tags
          </label>
          <input
            type="text"
            ref={postTagsElement}
            id="Tags"
            className={styles.input}
            placeholder="Please write tags using space"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className={styles.submitBtn}>
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
