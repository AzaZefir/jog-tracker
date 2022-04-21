import { useState } from "react";
import classes from "./MyPost.module.css";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ distance: "", time: "", date: "" });

  const addPost = (e) => {
    e.preventDefault();
    const newPost = { ...post, id: Date.now() };
    create(newPost);
    setPost({ distance: "", time: "", date: "" });
  };

  return (
    <form className={classes.post_container}>
      <div className={classes.modal_input}>
        <span>Distance</span>
        <input
          className={classes.textArea}
          onChange={(e) => setPost({ ...post, distance: e.target.value })}
          value={post.distance}
        ></input>
      </div>
      <div className={classes.modal_input}>
        <span>Time</span>
        <input
          className={classes.textArea}
          onChange={(e) => setPost({ ...post, time: e.target.value })}
          value={post.time}
        ></input>
      </div>
      <div className={classes.modal_input}>
        <span>Date</span>
        <input
          className={classes.textArea}
          onChange={(e) => setPost({ ...post, date: e.target.value })}
          value={post.date}
        ></input>
      </div>

      <div className={classes.item}>
        <button className={classes.btn} onClick={addPost}>
          Save
        </button>
      </div>
    </form>
  );
};
export default PostForm;
