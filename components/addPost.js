// import React, { useState } from "react";
// import "antd/dist/antd.css";
// import { Formik } from "formik";
// import { Form, Input, Button, Select, Divider } from "antd";

// function addPost() {
//   const [add, setAdd] = useState([{ email: "uy", message: "ty", url: "y" }]);
//   const onFinish = (values) => {
//     console.log("Success:", values);
//   };
//   return (
//     <>
//       <Formik
//         initialValues={{ email: "", url: "", message: "" }}
//         onSubmit={(values) => {
//           console.log("df", values);
//         }}
//       >
//         {({
//           values,
//           errors,
//           touched,
//           handleChange,
//           handleBlur,
//           handleSubmit,
//           isSubmitting,
//         }) => (
//           <Form onFinish={onFinish}>
//             <Form.Item
//               value="url"
//               name="url"
//               label="URL"
//               rules={[
//                 { required: true, message: "Please input your username!" },
//               ]}
//             >
//               <Input value="url" name="url" />
//             </Form.Item>
//             <Form.Item
//               name={["user", "email"]}
//               label="Email"
//               rules={[
//                 {
//                   type: "email",
//                   required: true,
//                   message: "Please input your username!",
//                 },
//               ]}
//             >
//               <Input value="email" />
//             </Form.Item>
//             <Form.Item label="Message" name="message">
//               <Input.TextArea value="message" />
//             </Form.Item>
//             <Form.Item label="Button">
//               <Button onClick={handleSubmit}>Button</Button>
//             </Form.Item>
//           </Form>
//         )}
//       </Formik>
//     </>
//   );
// }

//export default addPost;

import React, { useState } from "react";
import "antd/dist/antd.css";

import { PlusOutlined } from "@ant-design/icons";
import { Form, FormList, Input, Button, Select, Divider } from "antd";
import ListPage from "../pages/listPage";

const addPost = () => {
  const { Option } = Select;
  const { TextArea } = Input;

  const [add, setAdd] = useState([{ url: "", email: "", message: "" }]);

  const [addItem, setAddItem] = useState(["word1", "word2", "word3"]);

  //   const AddItem = (e) => {
  //     setAddItem([...addItem], [word]);
  //     console.log("eklenen:", word);
  //   };

  //   const onChange = (e) => {
  //     setWord(e.target.value);
  //     console.log(":", word);
  //   };

  const onList = () => {
    console.log(add, "NEWSDA");
  };

  const onFinish = (e) => {
    let arr = { url: e.url, email: e.email, message: e.message };
    let newArr = [...add];
    newArr.push(arr);

    setAdd(newArr);
    console.log(add, "bekirciğimmmsödjfjfdkjzslkjfgdkjhxfökgx");
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

        <Form.Item label="Message" name="message">
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Button">
          <Button htmlType="submit">+</Button>
        </Form.Item>
        <Form.Item label="Button">
          <Button onClick={onList}>Button</Button>
        </Form.Item>
      </Form>
      <Form.List>
        {(addItem) => (
          <div>
            {addItem.map((field) => (
              <Form.Item {...field}>
                <Input />
              </Form.Item>
            ))}
          </div>
        )}
      </Form.List>

      {/* <Button href="/listPage" onClick={handlesubmit}>
        GO
      </Button> */}

      {/* <ListPage email={add.email} message={add.message} url={add.url} /> */}
    </>
  );
};

export default addPost;
