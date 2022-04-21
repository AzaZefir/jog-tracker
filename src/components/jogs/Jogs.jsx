import React, { useState } from "react";
import classes from "./Jogs.module.css";
import JogsImg from "./../../assets/img/icon.png";
import JosgAdd from "./../../assets/img/add.png";
import { Modal } from "../common/modal/Modal";
import PostForm from "../common/myPost/MyPost";
import { jogs } from "../../data/Data";

export const Jogs = () => {
  const [modal, setModal] = useState(false);
  const [posts, setPosts] = useState(jogs);

  const createPost = (newPost) => {
    setPosts([newPost, ...posts]);
    setModal(false);
  };
  return (
    <div className={classes.jogs_container}>
      {posts.map((jog) => (
        <div className={classes.jogs_wrapper} key={jog.date}>
          <div>
            <img style={{ margin: "10px" }} src={JogsImg} alt="" />
          </div>
          <div className={classes.jogs_info}>
            <div style={{ margin: "0 0 0 10px", color: "#a9a9c5" }}>
              {jog.date}
            </div>
            <div
              style={{ margin: "10px", fontWeigh: "bold", color: "#6f6f6f" }}
            >
              Speed: 15
            </div>
            <div
              style={{ margin: "10px", fontWeigh: "bold", color: "#6f6f6f" }}
            >
              Distance: {jog.distance} km/h
            </div>
            <div
              style={{ margin: "10px", fontWeigh: "bold", color: "#6f6f6f" }}
            >
              Time: {jog.time} min
            </div>
          </div>
        </div>
      ))}

      <Modal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </Modal>
      
      <div className={classes.jogs_add}>
        <img onClick={() => setModal(true)} src={JosgAdd} alt="" />
      </div>
    </div>
  );
};
