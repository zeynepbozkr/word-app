import React, { useState, useEffect } from "react";
import { Card } from "antd";
import AddPost from "./addPost";

export default function ListPost() {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetcher().then(() => setLoading(false));
  }, []);

  const fetcher = async () => {
    let posts = localStorage.getItem("words");
    posts = JSON.parse(posts);
    setLists(posts);
  };
  console.log(lists);
  return (
    <div>
      {lists?.map((list) => {
        return (
          <div>
            <Card style={{ width: 300 }}>
              <p>{list.email}</p>
              <p> {list.message}</p>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
