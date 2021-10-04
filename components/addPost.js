import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Formik } from "formik";
import { Form, Input, Button, Select, Divider } from "antd";

function addPost() {
  return (
    <>
      <Formik
        initialValues={{ email: "", url: "", message: "", id: "" }}
        onSubmit={(values, { resetForm }) => {
          let postArr = localStorage.getItem("words");

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
          console.log(values);
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

            <Form.Item label="Button">
              <Button onClick={handleSubmit}>Button</Button>
            </Form.Item>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default addPost;
