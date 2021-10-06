import React, { useState, useEffect } from "react";
import { Card } from "antd";
import AddPost from "./addPost";

export default function ListPost() {
  //   const router = useRouter();

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

{
  /* <div className="container">
        {lists?.map((list, index) => {
          return (
            <div
              style={{ display: "flex", justifyContent: "space-evenly" }}
              key={index}
            >
              <Card style={{ width: "18rem" }}>
                <Card.Img src={list.file} height="100px" width="10px" />
                <Card.Body>
                  <Card.Title>{list.title}</Card.Title>
                  <Card.Text>{list.content}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>{moment(list.date).fromNow()}</ListGroupItem>
                </ListGroup>

                <Card.Body>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <Button
                      variant="success"
                      onClick={() => router.push(`/post/${list.id}`)}
                    >
                      More
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div> */
}
