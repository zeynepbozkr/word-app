import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Formik } from "formik";
import { Form, Input, Button, Select, Divider } from "antd";
import { generate, presetDarkPalettes } from "@ant-design/colors";
import { SwatchesPicker } from "react-color";
import { PlusOutlined } from "@ant-design/icons";
import listPost from "./listPost";

function addPost() {
  const [color, setColor] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const { Option } = Select;
  const [allWord, setAllWord] = useState([]);
  const [word, setWord] = useState();

  // const onclickButton = () => {
  //   let arr2 = JSON.parse(localStorage.getItem("words"));
  //   setLocalColor(arr2);
  //   //localcolor a renk değerleri eklenecek random olarak çekilecek ve girilen kelimelere style olarak bu renk değerleir verilecek
  // };

  const addItemFunction = () => {
    const newArr = [...allWord];
    newArr.push(word);
    setAllWord(newArr);
    setWord("");
  };

  const onNameChange = (event) => {
    setWord(event.target.value);
  };

  return (
    <>
      <Formik
        initialValues={{
          words: "",
          email: "",
          url: "",
          message: "",
          id: "",
          color: "",
          uzanti: "",
        }}
        onSubmit={(values, { resetForm }) => {
          let postArr = localStorage.getItem("words");
          values.color = color;

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
          setShowPicker("");
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
          <Form
            style={{
              backgroundColor: color,
            }}
          >
            <Form.Item label="Word">
              <Select
                mode="multiple"
                style={{ width: "50%" }}
                dropdownRender={(menu) => (
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
                )}
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

            {/* <Form.Item label="Color">
              <Button
                onClick={() => setShowPicker((showPicker) => !showPicker)}
              >
                {showPicker ? "close" : "Show"}
              </Button>
              {showPicker && (
                <SwatchesPicker
                  name="color"
                  value={values.color}
                  onChange={(updateColor) => setColor(updateColor.hex)}
                />
              )}
            </Form.Item> */}

            <Form.Item>
              {allWord.map((item, index) => {
                console.log(item, "IIII");
                return (
                  <>
                    {item}
                    <SwatchesPicker
                      name="color"
                      value={values.color}
                      onChange={(updateColor) => setColor(updateColor.hex)}
                    />
                  </>
                );
              })}
            </Form.Item>

            <Form.Item label="Uzantı" rules={[{ required: true }]}>
              <Input
                value={values.uzanti}
                onChange={handleChange}
                name="uzanti"
              />
            </Form.Item>
            <Form.Item label="Button">
              <Button
                onClick={handleSubmit}
                disabled={!(values.email && values.message && values.url)}
              >
                Button
              </Button>
            </Form.Item>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default addPost;
