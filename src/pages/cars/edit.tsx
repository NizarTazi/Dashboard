import { Edit, useForm } from "@refinedev/antd";
import { Form, Input, Select } from "antd";

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
          <Select
            defaultValue={"2024"}
            options={[
              { value: "2010", label: "2010" },
              { value: "2011", label: "2011" },
              { value: "2012", label: "2012" },
              { value: "2013", label: "2013" },
              { value: "2014", label: "2014" },
              { value: "2015", label: "2015" },
              { value: "2016", label: "2016" },
              { value: "2017", label: "2017" },
              { value: "2018", label: "2018" },
              { value: "2019", label: "2019" },
              { value: "2020", label: "2020" },
              { value: "2021", label: "2021" },
              { value: "2022", label: "2022" },
              { value: "2023", label: "2023" },
              { value: "2024", label: "2024" },
            ]}
            style={{ width: 120 }}
          />
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
