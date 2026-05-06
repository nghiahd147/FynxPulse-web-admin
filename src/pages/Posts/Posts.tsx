import {
  Badge,
  Button,
  Flex,
  Input,
  Popconfirm,
  Table,
  Tag,
  Tooltip,
} from "antd";
import type { PostType } from "../../types";
import type { ColumnsType } from "antd/es/table";
import usePostStore from "../../store/usePostStore";
import { useEffect } from "react";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";

const Posts = () => {
  const { Search } = Input;
  const { data, getListPost } = usePostStore();

  useEffect(() => {
    getListPost({});
  }, []);

  const onSearch = () => {};

  const columns: ColumnsType<PostType> = [
    {
      title: "STT",
      key: "stt",
      render: (_: any, _record: PostType, index: number) => (index += 1),
    },
    {
      title: "Người đăng",
      key: "userInfo",
      render: (value) => {
        return value.userInfo.first_name + " " + value.userInfo.last_name;
      },
    },
    {
      title: "Dạng bài đăng",
      key: "type",
      render: (value) => {
        const colorTypePost =
          value.type == "Post"
            ? "blue"
            : value.type == "Repost"
              ? "yellow"
              : value.type == "Comment"
                ? "orange"
                : "green";

        return <Badge count={value.type} color={colorTypePost} />;
      },
    },
    {
      title: "Dạng người xem",
      key: "audience",
      render: (value) => (
        <Flex gap="small" align="center" wrap>
          <Tag color={value.audience == "everyone" ? "green" : "yellow"}>
            {value.audience}
          </Tag>
        </Flex>
      ),
    },
    {
      title: "Số lượng comment",
      key: "comment_count",
      align: "right",
      render: (value) => value.comment_count,
    },
    {
      title: "Số người xem tài khoản khách",
      key: "guest_view",
      align: "right",
      render: (value) => value.guest_view,
    },
    {
      title: "Hành động",
      dataIndex: "active",
      render: () => {
        return (
          <>
            <div className="flex gap-x-2 items-center">
              <Tooltip title="Chi tiết">
                <Button color="default" variant="outlined">
                  <EyeOutlined />
                </Button>
              </Tooltip>
              <Tooltip title="Xóa">
                <Popconfirm
                  title="Sure to delete?"
                  // onConfirm={() => handleDeletedUser(record._id as string)}
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
    <div>
      <h2 className="text-xl font-medium">Bài viết</h2>
      <div className="my-10 flex items-center gap-x-10">
        <Search
          placeholder="Tìm kiếm tên bài đăng"
          onSearch={onSearch}
          style={{ width: 200 }}
        />
      </div>
      <Table<PostType> columns={columns} dataSource={data} />
    </div>
  );
};

export default Posts;
