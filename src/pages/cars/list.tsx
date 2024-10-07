import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  getDefaultSortOrder,
  useTable,
} from "@refinedev/antd";
import { BaseRecord } from "@refinedev/core";
import { Form, Input, Space, Table } from "antd";

export const CarsList = () => {
  const { tableProps, searchFormProps, sorters } = useTable({
    syncWithLocation: true,
    onSearch: (values: any) => {
      return [
        {
          field: "immat",
          operator: "contains",
          value: values.immat,
        },
      ];
    },
  });

  return (
    <List>
      <Form {...searchFormProps} layout="inline">
        <Form.Item style={{
          padding: "0px 0px 10px 0px",
        }}
         name="immat">
          <Input placeholder="Search by Plate Number" onChange={searchFormProps.form?.submit} />
        </Form.Item>
        
      </Form>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="immat" title={"Plate Number"} />
        <Table.Column dataIndex="car_brand" title={"Brand"} />
        <Table.Column dataIndex="car_serie" title={"Serie"} />
        <Table.Column dataIndex="car_year" 
        title={"Year"}
        sorter={{ multiple: 1 }}
        defaultSortOrder={getDefaultSortOrder("Year", sorters)} />
        <Table.Column dataIndex="car_color" title={"Color "} />
        <Table.Column
          title={"Actions"}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
