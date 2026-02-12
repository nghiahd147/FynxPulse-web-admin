import React, { useEffect } from "react";
import { Table, Input, Select, Button } from "antd";
import type { SearchProps } from "antd/es/input";
import useUsersStore from "../../store/useUserStore";
import type { UserType } from "../../types";
import type { ColumnsType } from "antd/es/table";

const columns: ColumnsType<UserType> = [
  {
    title: "First Name",
    dataIndex: "first_name",
    key: "first_name",
  },
  {
    title: "Last Name",
    dataIndex: "last_name",
    key: "last_name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Password",
    dataIndex: "password",
    key: "password",
  },
  {
    title: "Date of birth",
    dataIndex: "date_of_birth",
    key: "date_of_birth",
  },
  {
    title: "Actions",
    render: () => {
      return (
        <>
          <div className="flex gap-x-2 items-center">
            <Button>Edit</Button>
            <Button>Delete</Button>
          </div>
        </>
      );
    },
  },
];

const Users: React.FC = () => {
  const { Search } = Input;

  const { getListUsers, data, pagination, isLoading } = useUsersStore();

  useEffect(() => {
    getListUsers("");
  }, []);

  const onSearch: SearchProps["onSearch"] = (value) => {
    console.log(value);
  };

  return (
    <>
      <h2 className="text-xl font-medium">Users</h2>
      <div className="my-10 flex items-center gap-x-10">
        <Search
          placeholder="Search username"
          onSearch={onSearch}
          style={{ width: 200 }}
        />
        <Select
          showSearch={{
            filterOption: (input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase()),
          }}
          placeholder="Select a person"
          options={[
            { value: "1", label: "Jack" },
            { value: "2", label: "Lucy" },
            { value: "3", label: "Tom" },
          ]}
        />
      </div>
      <Table<UserType>
        columns={columns}
        rowKey={(record) => `${record._id}_table`}
        pagination={{
          pageSize: pagination.page_size,
        }}
        dataSource={data}
        loading={isLoading}
      />
    </>
  );
};

export default Users;
