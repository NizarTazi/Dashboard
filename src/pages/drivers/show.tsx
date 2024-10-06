import { DateField, EmailField, Show, TextField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography } from "antd";

const { Title } = Typography;

export const DriverShow = () => {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{"ID"}</Title>
      <TextField value={record?.id} />
      <Title level={5}>{"Full Name"}</Title>
      <TextField value={record?.display_name} />
      <Title level={5}>{"Phone Number"}</Title>
      <TextField value={record?.phone} />
      <Title level={5}>{"Email"}</Title>
      <EmailField value={record?.email} />
      <Title level={5}>{"Licence Expiration Date"}</Title>
      <DateField value={record?.licence_expiration} />
      <Title level={5}>{"BirthDate"}</Title>
      <DateField value={record?.birthday} />
    </Show>
  );
};
