import AddPost from "../components/addPost";
import ListPost from "../components/listPost";
import styles from "../styles/Home.module.css";
import React, { Link } from "react";

export default function Home() {
  return (
    <div className={styles.container}>
      Add Post
      <AddPost></AddPost>
    </div>
  );
}
