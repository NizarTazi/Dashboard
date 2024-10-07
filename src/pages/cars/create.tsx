import { Create, useForm } from "@refinedev/antd";
import { DatePicker, Form, Input } from "antd";


export const CarsCreate = () => {
  const { formProps, saveButtonProps } = useForm({
    // Before saving, modify the form values
    onSubmit: async (values) => {
      // Convert 'car_year' to just the year number
      const updatedValues = {
        ...values,
        car_year: values.car_year ? values.car_year.year() : null, // Extract the year only
      };

      // Now return the updated values to save
      return updatedValues;
    },
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
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
          <DatePicker picker="year" format="YYYY"/>
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
          <Input/>
        </Form.Item>
        
      </Form>
    </Create>
  );
};
