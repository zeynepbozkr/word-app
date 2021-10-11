import React, { useState, useEffect } from "react";
import { Card, Space, Button } from "antd";

export default function ListPost() {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [colorSelect, setColorSelect] = useState();

  useEffect(() => {
    fetcher().then(() => setLoading(false));
  }, []);

  const fetcher = async () => {
    let posts = localStorage.getItem("words");
    posts = JSON.parse(posts);

    setColorSelect(posts[posts.length - 1].color);
    setLists(posts);
  };

  return loading ? (
    <div>Loading</div>
  ) : (
    <Space>
      <div>
        <Card
          style={{
            fontSize: Math.floor(Math.random() * 90) - 0.1,
          }}
          title={lists[lists.length - 1]?.message}
          bordered={false}
        >
          <p
            style={{
              color: "#acb",
              fontSize: Math.floor(Math.random() * 90) - 0.1,
            }}
          >
            {lists.map((item, index) => {
              return (
                <div>
                  {item.word.map((item) => {
                    return (
                      <div
                        style={{
                          color:
                            colorSelect[
                              Math.floor(Math.random() * colorSelect.length)
                            ],

                          fontSize: Math.floor(Math.random() * 90) - 0.1,
                        }}
                      >
                        {item}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </p>
        </Card>
      </div>
    </Space>
  );
}
