import React, { useEffect, useState } from "react";
import {
  Table,
  Input,
  Select,
  Button,
  Tooltip,
  Badge,
  Tag,
  Popconfirm,
  Modal,
} from "antd";
import type { SearchProps } from "antd/es/input";
import useUsersStore from "../../store/useUserStore";
import type { UserType } from "../../types";
import type { ColumnsType } from "antd/es/table";
import { PAGINATION } from "../../constants/pagination";
import { convertDayMonthYear } from "../../utils/date";
import {
  DeleteOutlined,
  EyeOutlined,
  SafetyOutlined,
  StopOutlined,
} from "@ant-design/icons";
import { VERIFY_LABEL, VERIFY_VALUE } from "../../constants/status";
import { notification } from "antd";

const Users: React.FC = () => {
  const { Search } = Input;

  const {
    getListUsers,
    deleteUser,
    getDetailUser,
    detailUser,
    data,
    total,
    isLoading,
  } = useUsersStore();
  const [page, setPage] = useState(PAGINATION.PAGE);
  const [page_size, setPageSize] = useState(PAGINATION.PAGE_SIZE);
  const [search, setSearch] = useState("");
  const [verify, setVerify] = useState();
  const [role, setRole] = useState();
  const [is_active, setActive] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { bandUser, unBandUser } = useUsersStore();

  useEffect(() => {
    getListUsers({ page, page_size, search, verify, role, is_active });
  }, [page, page_size, search, verify, role, is_active]);

  const handleDeletedUser = async (id: string) => {
    try {
      await deleteUser(id);
      notification.success({
        message: "Thành công",
        description: "Xóa người dùng thành công!",
      });
      getListUsers({ page, page_size, search, verify, role, is_active });
    } catch (error) {
      notification.error({
        message: "Lỗi",
        description: "Lỗi xóa người dùng!",
      });
    }
  };

  const handleBandUser = async (id: string) => {
    try {
      await bandUser(id);
      notification.success({
        message: "Thành công",
        description: "Khóa người dùng thành công!",
      });
      getListUsers({ page, page_size, search, verify, role, is_active });
    } catch (error) {
      notification.error({
        message: "Lỗi",
        description: "Lỗi khi khóa người dùng!",
      });
    }
  };

  const handleUnBandUser = async (id: string) => {
    try {
      await unBandUser(id);
      notification.success({
        message: "Thành công",
        description: "Mở khóa người dùng thành công!",
      });
      getListUsers({ page, page_size, search, verify, role, is_active });
    } catch (error) {
      notification.error({
        message: "Lỗi",
        description: "Lỗi khi mở khóa người dùng!",
      });
    }
  };

  const onSearch: SearchProps["onSearch"] = (value) => {
    setSearch(value);
  };

  const columns: ColumnsType<UserType> = [
    {
      title: "STT",
      key: "stt",
      render: (_: any, _record: UserType, index: number) => (index += 1),
    },
    {
      title: "Họ",
      dataIndex: "first_name",
      key: "first_name",
      render: (value) => {
        return value || "-";
      },
    },
    {
      title: "Tên",
      dataIndex: "last_name",
      key: "last_name",
      render: (value) => {
        return value || "-";
      },
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
      width: 200,
    },
    {
      title: "Ngày sinh",
      dataIndex: "date_of_birth",
      key: "date_of_birth",
      render: (value) => {
        return convertDayMonthYear(value);
      },
    },
    {
      title: "Xác thực",
      dataIndex: "verify",
      key: "verify",
      render: (value) => {
        return value == 0 ? (
          <Badge
            key={VERIFY_LABEL.UNVERIFIED}
            color={"geekblue"}
            text={VERIFY_LABEL.UNVERIFIED}
          />
        ) : value == 1 ? (
          <Badge
            key={VERIFY_LABEL.VERIFIED}
            color={"lime"}
            text={VERIFY_LABEL.VERIFIED}
          />
        ) : (
          <Badge
            key={VERIFY_LABEL.BANNED}
            color={"red"}
            text={VERIFY_LABEL.BANNED}
          />
        );
      },
    },
    {
      title: "Trang thái hoạt động",
      dataIndex: "active",
      key: "active",
      render: (value) =>
        value == true ? (
          <Tag color={"green"} key={"is_active"}>
            Hoạt động
          </Tag>
        ) : (
          <Tag color={"red"} key={"not_active"}>
            Không hoạt động
          </Tag>
        ),
    },
    {
      title: "Hành động",
      dataIndex: "active",
      render: (_, record) => {
        return (
          <>
            <div className="flex gap-x-2 items-center">
              <Tooltip title="Khóa tài khoản">
                <Button
                  color="red"
                  variant="outlined"
                  onClick={() => {
                    handleBandUser(record._id as string);
                  }}
                >
                  <StopOutlined />
                </Button>
              </Tooltip>
              <Tooltip title="Mở tài khoản">
                <Button
                  color="green"
                  variant="outlined"
                  onClick={() => {
                    handleUnBandUser(record._id as string);
                  }}
                >
                  <SafetyOutlined />
                </Button>
              </Tooltip>
              <Tooltip title="Chi tiết">
                <Button
                  color="default"
                  variant="outlined"
                  onClick={() => {
                    getDetailUser(record._id as string);
                    setIsModalOpen(true);
                  }}
                >
                  <EyeOutlined />
                </Button>
              </Tooltip>
              <Tooltip title="Xóa">
                <Popconfirm
                  title="Sure to delete?"
                  onConfirm={() => handleDeletedUser(record._id as string)}
                >
                  <Button color="danger" variant="outlined">
                    <DeleteOutlined />
                  </Button>
                </Popconfirm>
              </Tooltip>
            </div>
          </>
        );
      },
    },
  ];

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
            { value: 0, label: "Admin" },
            { value: 1, label: "User" },
          ]}
          allowClear
          onChange={(value) => setRole(value)}
        />
        <Select
          className="w-50"
          showSearch={{
            filterOption: (input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase()),
          }}
          placeholder="Chọn trạng thái xác thực"
          options={[
            { value: VERIFY_VALUE.UNVERIFIED, label: VERIFY_LABEL.UNVERIFIED },
            { value: VERIFY_VALUE.VERIFIED, label: VERIFY_LABEL.VERIFIED },
            { value: VERIFY_VALUE.BANNED, label: VERIFY_LABEL.BANNED },
          ]}
          allowClear
          onChange={(value) => setVerify(value)}
        />
        <Select
          className="w-50"
          showSearch={{
            filterOption: (input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase()),
          }}
          placeholder="Chọn trạng thái hoạt động"
          options={[
            { value: false, label: "Không hoạt động" },
            { value: true, label: "Đang hoạt động" },
          ]}
          allowClear
          onChange={(value) => setActive(value)}
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
        scroll={{ x: "max-content" }}
        dataSource={data}
        loading={isLoading}
      />

      <Modal
        title="Chi tiết người dùng"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        okButtonProps={{ style: { display: "none" } }}
      >
        <p>
          <strong>Họ và tên:</strong> {detailUser?.first_name}{" "}
          {detailUser?.last_name}
        </p>
        <p>
          <strong>Email:</strong> {detailUser?.email}
        </p>
        <p>
          <strong>Năm sinh:</strong>{" "}
          {convertDayMonthYear(detailUser?.date_of_birth as Date)}
        </p>
      </Modal>
    </>
  );
};

export default Users;
