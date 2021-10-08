import React, { useState, useEffect } from "react";
import { Card, Space } from "antd";
import AddPost from "./addPost";
import { List } from "rc-field-form";

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
    <Space>
      <div>
        {lists?.map((list) => {
          return (
            <div>
              <Card title={list.message} bordered={false}>
                <p>{list.words}</p>
              </Card>
            </div>
          );
        })}
      </div>
    </Space>
  );
}
