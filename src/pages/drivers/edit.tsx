import { Edit, useForm } from "@refinedev/antd";
import { useList } from "@refinedev/core";
import { DatePicker, Form, Input } from "antd";

export const DriverEdit = () => {
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Edit saveButtonProps={saveButtonProps}>
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
          label={"Phone Number"}
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
          <Input/>
        </Form.Item>
      </Form>
      
    </Edit>
  );
};
function useMany(arg0: { resource: string; ids: any; queryOptions: { enabled: boolean; }; }): { data: any; } {
  throw new Error("Function not implemented.");
}

