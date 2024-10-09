import {
  DateField,
  DeleteButton,
  EditButton,
  getDefaultSortOrder,
  List,
  SaveButton,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { useList, useMany, type BaseRecord } from "@refinedev/core";
import { DatePicker, Form, Input, Space, Table } from "antd";

export const DriverList = () => {
  const { tableProps, sorters,searchFormProps } = useTable({
    syncWithLocation: true,
    onSearch: (values: any) => {
      return [
        {
          field: "display_name",
          operator: "contains",
          value: values.display_name,
        },
      ];
    },
    meta: {
      select: "*, cars!inner(immat)",
    },
  }); 
  
  //console.log(tableProps?.dataSource?.map((item)=> item?.drivers_cars?.map((items: any) => items.driver_id)))

  return (
    <List>
      <Form {...searchFormProps} layout="inline">
        <Form.Item style={{
          padding: "0px 0px 10px 0px",
        }}
         name="display_name">
          <Input placeholder="Search by name" onChange={searchFormProps.form?.submit} />
        </Form.Item>
        
      </Form>
      
      <Table {...tableProps} rowKey="id">
        <Table.Column 
        dataIndex="display_name"
        title={"Full Name"}
        sorter={{ multiple: 2 }}
        defaultSortOrder={getDefaultSortOrder("display_name", sorters)} />
        <Table.Column dataIndex="phone" title={"Phone"} />
        <Table.Column dataIndex="email" title={"Email"} />
        <Table.Column 
        dataIndex="licence_expiration" 
        title={"Licence Expiration"}
        sorter={{ multiple: 1 }}
        defaultSortOrder={getDefaultSortOrder("licence_expiration", sorters)} />
        
        <Table.Column dataIndex="birthday" title={"BirthDay"} />
        <Table.Column dataIndex={"cars"} title={"Plate Number"} 
        render={(value: any[]) =>
           (
            value.map((item) => item.immat + "\n") 
          )
        }/>
        
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
