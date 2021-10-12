import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

import { Card, Layout, Row, Col } from "antd";
const { Header, Content, Footer, Sider } = Layout;

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
    console.log(posts, "PPPPPPP");
    setColorSelect(posts[posts.length - 1].color);
    setLists(posts);
  };

  return loading ? (
    <div>Loading</div>
  ) : (
    <div className={styles.ListColor}>
      <Col span={24} style={{ padding: "20px 100px 10px 100px " }}>
        <Card
          style={{
            marginBottom: "10px",
            backgroundColor: "#F0F2F0",
            textAlign: "center",
            border: "1px solid white",
            padding: "50px",
          }}
        >
          <div style={{ fontSize: "3rem" }}>
            {lists[lists.length - 1]?.message}
          </div>
        </Card>
      </Col>

      <Col span={24} style={{ padding: "40px 300px 150px 300px " }}>
        <Card
          style={{
            backgroundColor: "#F0F2F0",
            textAlign: "center",
            border: "1px solid white",
            borderRadius: "1px",
            height: "450px",
            overflow: "scroll",
          }}
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
                            colorSelect.length === 0
                              ? "red"
                              : colorSelect[
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
      </Col>
    </div>
  );
}
