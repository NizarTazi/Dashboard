import { Create, DateField, useForm } from "@refinedev/antd";
import { DatePicker, Form, Input } from "antd";

export const DriverCreate = () => {
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={"Full Name"}
          name={["display_name"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Phone"}
          name={["phone"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Email"}
          name={["email"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Licence Expiration"}
          name={["licence_expiration"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <DatePicker/>
        </Form.Item>
        <Form.Item
          label={"BirthDay"}
          name={["birthday"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <DatePicker/>
        </Form.Item>
      </Form>
    </Create>
  );
};
