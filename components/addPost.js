import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Formik } from "formik";
import { Form, Input, Button, Select, Divider } from "antd";
import { generate, presetDarkPalettes } from "@ant-design/colors";
import { SwatchesPicker } from "react-color";

function addPost() {
  const [color, setColor] = useState("#fff");
  const [showPicker, setShowPicker] = useState(false);
  const { option } = Select;
  console.log(color);

  function onSelectChange(value) {}

  return (
    <>
      <Formik
        initialValues={{ email: "", url: "", message: "", id: "", color: "" }}
        onSubmit={(values, { resetForm }) => {
          let postArr = localStorage.getItem("words");
          values.color = color;

          postArr = JSON.parse(postArr);
          if (postArr) {
            let arr = [...postArr];
            values.id = Math.floor(Math.random() * 100);
            arr.push(values);
            arr = JSON.stringify(arr);
            localStorage.setItem("words", arr);
          } else {
            let arr = [];
            values.id = Math.floor(Math.random() * 100);
            arr.push(values);
            arr = JSON.stringify(arr);
            localStorage.setItem("words", arr);
            values.id = Math.floor(Math.random() * 100);
          }
          console.log("values", values.color);
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

            <Form.Item label="Color">
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
