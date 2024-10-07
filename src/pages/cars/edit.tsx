import { Edit, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";

export const CarsEdit = () => {
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={"Plate Number"}
          name={["immat"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={"Brand"}
          name={["car_brand"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={"Serie"}
          name={["car_serie"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={"Year"}
          name={["car_year"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={"Color"}
          name={["car_color"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>


      </Form>
    </Edit>
  );
};
