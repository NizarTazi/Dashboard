import { Show, TextField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography } from "antd";

const { Title } = Typography;

export const CarsShow = () => {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{"Plate Number"}</Title>
      <TextField value={record?.immat} />
      <Title level={5}>{"Brand"}</Title>
      <TextField value={record?.car_brand} />
      <Title level={5}>{"Serie"}</Title>
      <TextField value={record?.car_serie} />
      <Title level={5}>{"Year"}</Title>
      <TextField value={record?.car_year} />
      <Title level={5}>{"Color"}</Title>
      <TextField value={record?.car_color} />
    </Show>
  );
};
