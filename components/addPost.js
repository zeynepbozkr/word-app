import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Select, Divider, Row, Col } from "antd";

const { Option } = Select;

const colorPalet = [
  ["#D4ECDD", "#345B63", "#152D35", "#112031"],
  ["#261C2C", "#3E2C41", "#5C527F", "#6E85B2"],
  ["#E2C2B9", "#BFD8B8", "#E7EAB5", "#F1F7E7"],
  ["#FCF0C8", "#FACE7F", "#911F27", "#630A10"],
  ["#420516", "#7D1935", "#B42B51", "#E63E6D"],
];

function addPost() {
  const onFinish = (values, resetForm) => {
    let postArr = localStorage.getItem("words");
    postArr = JSON.parse(postArr);

    if (postArr) {
      let arr = [...postArr];
      values.id = Math.floor(Math.random() * 100);
      arr.push(values);
      arr = JSON.stringify(arr);
      localStorage.setItem("words", arr);
      console.log(values);
    } else {
      let arr = [];
      values.id = Math.floor(Math.random() * 100);
      arr.push(values);
      arr = JSON.stringify(arr);
      localStorage.setItem("words", arr);
      values.id = Math.floor(Math.random() * 100);
    }
    let val = JSON.parse(localStorage.getItem("words")).message;
    console.log(val, "val");
  };

  return (
    <>
      <Form
        initialValues={{
          word: [],
          email: "",
          url: "",
          message: "",
          id: "",
          color: "",
        }}
        onFinish={onFinish}
      >
        <Form.Item label="Word" name="word">
          <Select mode="tags" style={{ width: "50%" }}></Select>
        </Form.Item>

        <Form.Item
          label="URL"
          name="url"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
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

        <Form.Item label="Message" name="message">
          <Input.TextArea />
        </Form.Item>

        <Form.Item label="Color" name="color">
          <Select>
            {colorPalet.map((palete, index) => {
              return (
                <Option value={palete}>
                  {palete.map((item) => {
                    return (
                      <>
                        <Row gutter={[8, 16]}>
                          <Col span={24} style={{ backgroundColor: item }}>
                            {item}
                          </Col>
                        </Row>
                      </>
                    );
                  })}
                </Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

        <Form.Item>
          <a href="/listPage">List Page</a>
        </Form.Item>
      </Form>
    </>
  );
}
export default addPost;
