import { Table } from "antd";
import type { PostType } from "../../types";
import type { ColumnsType } from "antd/es/table";

const Posts = () => {
  const columns: ColumnsType<PostType> = [
    {
      title: "STT",
      key: "stt",
      render: (_: any, _record: PostType, index: number) => (index += 1),
    },
    {
      title: "Hành động",
      dataIndex: "active",
      render: () => {
        return (
          <>
            <div className="flex gap-x-2 items-center"></div>
          </>
        );
      },
    },
  ];
  return (
    <div>
      <h2 className="text-xl font-medium">Bài viết</h2>
      <div className="my-10 flex items-center gap-x-10"></div>
      <Table<PostType>
        columns={columns}
        // dataSource={data}
      />
    </div>
  );
};

export default Posts;
