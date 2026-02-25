import React, { useEffect, useState } from "react";
import { Table, Input, Select, Button } from "antd";
import type { SearchProps } from "antd/es/input";
import useUsersStore from "../../store/useUserStore";
import type { UserType } from "../../types";
import type { ColumnsType } from "antd/es/table";
import { PAGINATION } from "../../constants/pagination";

const columns: ColumnsType<UserType> = [
  {
    title: "Họ",
    dataIndex: "first_name",
    key: "first_name",
  },
  {
    title: "Tên",
    dataIndex: "last_name",
    key: "last_name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Mật khẩu",
    dataIndex: "password",
    key: "password",
  },
  {
    title: "Ngày sinh",
    dataIndex: "date_of_birth",
    key: "date_of_birth",
  },
  {
    title: "Hành động",
    render: () => {
      return (
        <>
          <div className="flex gap-x-2 items-center">
            <Button>Sửa</Button>
            <Button>Xóa</Button>
          </div>
        </>
      );
    },
  },
];

const Users: React.FC = () => {
  const { Search } = Input;

  const { getListUsers, data, total, isLoading } = useUsersStore();
  const [page, setPage] = useState(PAGINATION.PAGE);
  const [page_size, setPageSize] = useState(PAGINATION.PAGE_SIZE);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getListUsers({ page, page_size, search });
  }, [page, search]);

  const onSearch: SearchProps["onSearch"] = (value) => {
    setSearch(value);
  };

  return (
    <>
      <h2 className="text-xl font-medium">Người dùng</h2>
      <div className="my-10 flex items-center gap-x-10">
        <Search
          placeholder="Tìm kiếm email"
          onSearch={onSearch}
          style={{ width: 200 }}
        />
        <Select
          className="w-50"
          showSearch={{
            filterOption: (input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase()),
          }}
          placeholder="Chọn quyền"
          options={[
            { value: "admin", label: "Admin" },
            { value: "user", label: "User" },
          ]}
        />
        <Select
          className="w-50"
          showSearch={{
            filterOption: (input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase()),
          }}
          placeholder="Chọn trạng thái xác thực"
          options={[
            { value: "Unverified", label: "Unverified" },
            { value: "Verified", label: "Verified" },
            { value: "Banned", label: "Banned" },
          ]}
        />
        <Select
          className="w-50"
          showSearch={{
            filterOption: (input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase()),
          }}
          placeholder="Chọn quyền"
          options={[
            { value: false, label: "Không hoạt động" },
            { value: true, label: "Đang hoạt động" },
          ]}
        />
      </div>
      <Table<UserType>
        columns={columns}
        rowKey={(record) => `${record._id}_table`}
        pagination={{
          current: page,
          pageSize: page_size,
          total: Number(total),
          showSizeChanger: true,
          onChange: (page, page_size) => {
            setPage(page);
            setPageSize(page_size);
          },
        }}
        dataSource={data}
        loading={isLoading}
      />
    </>
  );
};

export default Users;
