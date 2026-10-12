import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import type { BaseRecord } from "@refinedev/core";
import { useTranslate } from "@refinedev/core";
import { Form, Space, Table } from "antd";
import React from "react";
import { EditableList } from "../../../components/editable-list";

const columns = [
  {
    title: "ID",
    key: "id",
    dataIndex: "id",
  },
  {
    title: "タイトル",
    key: "title",
    dataIndex: "title",
  },
  {
    title: "操作",
    key: "actions",
    dataIndex: "actions",
    render: (_: any, record: BaseRecord) => (
      <Space>
        <EditButton hideText size="small" recordItemId={record.id} />
        <ShowButton hideText size="small" recordItemId={record.id} />
        <DeleteButton hideText size="small" recordItemId={record.id} />
      </Space>
    ),
  },
];

export const CategoryList = () => {
  return <EditableList columns={columns} />;
};
