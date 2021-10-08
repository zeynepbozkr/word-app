import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Formik } from "formik";
import { Form, Input, Button, Select, Divider, List, Link } from "antd";
import { SwatchesPicker } from "react-color";
import { PlusOutlined, CheckOutlined } from "@ant-design/icons";
import { blue } from "@ant-design/colors";

function addPost() {
  const [color, setColor] = useState([]);
  const { Option } = Select;
  const [allWord, setAllWord] = useState([]);
  const [word, setWord] = useState();
  const [urlSize, setUrlSize] = useState("");
  const [allUrl, setAllUrl] = useState([]);
  const [colorPalet, setColorPalet] = useState([
    "#B98B73 ",
    "#CB997E",
    "#DDBEA9",
    "#FFE8D6",
    "#D4C7B0 ",
    "#B7B7A4",
    "#A5A58D",
    "#6B705C",
    "#3F4238",
  ]);

  const addUrl = () => {
    for (let i = 0; i <= 9; i += 0.1) {
      const arr6 = [];
      arr.push(i);
    }
    setUrlSize(arr6);
  };

  const addItemFunction = () => {
    const newArr = [...allWord];
    newArr.push(word);
    setAllWord(newArr);
    setWord("");
  };

  const colorSelect = (item) => {
    const newarr2 = [...color];

    const index = newarr2.indexOf(item);
    console.log(index);

    if (index !== -1) {
      newarr2.splice(index, 1);
    } else {
      newarr2.push(item);
    }
    setColor(newarr2);
  };

  const onNameChange = (event) => {
    setWord(event.target.value);
    console.log("word", word);
  };

  return (
    <>
      <Formik
        initialValues={{
          words: [],
          email: "",
          url: "",
          message: "",
          id: "",
          selectedColor: "",
        }}
        onSubmit={(values, { resetForm }) => {
          let postArr = localStorage.getItem("words");
          values.selectedColor = color;

          postArr = JSON.parse(postArr);
          if (postArr) {
            let arr = [...postArr];
            values.id = Math.floor(Math.random() * 100);
            values.words = allWord;
            arr.push(values);
            arr = JSON.stringify(arr);
            localStorage.setItem("words", arr);
          } else {
            let arr = [];
            values.id = Math.floor(Math.random() * 100);
            values.words = allWord;
            arr.push(values);
            arr = JSON.stringify(arr);
            localStorage.setItem("words", arr);
            values.id = Math.floor(Math.random() * 100);
          }
          resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form>
            <Form.Item label="Word">
              <Select
                mode="multiple"
                style={{ width: "50%" }}
                dropdownRender={(menu) => {
                  return (
                    <div>
                      {menu}
                      <Divider style={{ margin: "4px 0" }}></Divider>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "nowrap",
                          padding: 8,
                        }}
                      ></div>
                      <Input
                        style={{ flex: "auto" }}
                        name="word"
                        value={word}
                        onChange={onNameChange}
                      ></Input>
                      <a
                        style={{
                          flex: "none",
                          padding: "8px",
                          display: "block",
                          cursor: "pointer",
                        }}
                        onClick={addItemFunction}
                      >
                        <PlusOutlined /> Add item
                      </a>
                    </div>
                  );
                }}
              >
                {allWord.map((item) => (
                  <Option key={item}>{item}</Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label="URL"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input value={values.url} onChange={handleChange} name="url" />
            </Form.Item>
            <Form.Item
              label="Email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input
                value={values.email}
                onChange={handleChange}
                name="email"
              />
            </Form.Item>
            <Form.Item label="Message">
              <Input.TextArea
                name="message"
                value={values.message}
                onChange={handleChange}
              />
            </Form.Item>

            <List
              size="small"
              dataSource={colorPalet}
              renderItem={(item) => {
                const control = color.includes(item);

                return (
                  <a href="#" onClick={() => colorSelect(item)}>
                    <List.Item style={{ backgroundColor: item }}>
                      {control && <CheckOutlined />}
                      {item}
                    </List.Item>
                  </a>
                );
              }}
            />

            <Form.Item label="Button">
              <Button
                onClick={handleSubmit}
                disabled={!(values.email && values.message && values.url)}
              >
                Button
              </Button>
            </Form.Item>
            <Form.Item>
              <a href="/listPage">List Page</a>
            </Form.Item>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default addPost;
