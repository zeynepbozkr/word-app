import React, { useState } from "react";
import "antd/dist/antd.css";

import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button, Select, Divider } from "antd";
import ListPage from "../pages/listPage";

const addPost = () => {
  const { Option } = Select;
  const { TextArea } = Input;

  const [add, setAdd] = useState([]);

  const [addItem, setAddItem] = useState(["word1", "word2", "word3"]);

  //   const AddItem = (e) => {
  //     setAddItem([...addItem], [word]);
  //     console.log("eklenen:", word);
  //   };

  //   const onChange = (e) => {
  //     setWord(e.target.value);
  //     console.log(":", word);
  //   };

  const onFinish = (e) => {
    console.log(e);
    setAdd({ url: e.url, email: e.email, message: e.message });
    console.log(add.message, "add");
  };

  const handlesubmit = () => {};

  return (
    <>
      <Form onFinish={onFinish}>
        <Form.Item
          label="URL"
          name="url"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              type: "email",
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Select"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Select node="multiple" style={{ width: 240 }} placeholder="color">
            {addItem.map((item, index) => {
              return (
                <Select.Option key={index} value={item}>
                  {item}
                </Select.Option>
              );
            })}
          </Select>
          <br /> <br />
          <Form.Item label="Message" name="message">
            <Input.TextArea />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Button">
          <Button htmlType="submit">Button</Button>
        </Form.Item>
      </Form>

      {/* <Button href="/listPage" onClick={handlesubmit}>
        GO
      </Button> */}

      {/* <ListPage email={add.email} message={add.message} url={add.url} /> */}
    </>
  );
};

export default addPost;
