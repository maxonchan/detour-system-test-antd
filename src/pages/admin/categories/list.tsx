import {
  DeleteButton,
  EditButton,
  ShowButton,
  useModalForm,
} from "@refinedev/antd";
import type { BaseRecord } from "@refinedev/core";
import { useTranslate } from "@refinedev/core";
import { Space } from "antd";
import React, { useMemo } from "react";
import { EditableList } from "../../../components/editable-list";
import { CategoryModal } from "./modal";

export const CategoryList = () => {
  const translate = useTranslate();

  const {
    modalProps: createModalProps,
    formProps: createFormProps,
    show: createShow,
  } = useModalForm({
    resource: "categories",
    action: "create",
    syncWithLocation: false,
  });

  const {
    modalProps: editModalProps,
    formProps: editFormProps,
    show: editShow,
  } = useModalForm({
    resource: "categories",
    action: "edit",
    syncWithLocation: false,
  });

  const columns = useMemo(
    () => [
      {
        title: translate("categories.fields.id", "ID"),
        key: "id",
        dataIndex: "id",
      },
      {
        title: translate("categories.fields.title", "タイトル"),
        key: "title",
        dataIndex: "title",
      },
      {
        title: translate("categories.fields.actions", "操作"),
        key: "actions",
        dataIndex: "actions",
        render: (_: any, record: BaseRecord) => (
          <Space>
            <EditButton
              hideText
              size="small"
              recordItemId={record.id}
              onClick={(e) => {
                e.preventDefault();
                editShow(record.id);
              }}
            />
            <ShowButton hideText size="small" recordItemId={record.id} />
            <DeleteButton hideText size="small" recordItemId={record.id} />
          </Space>
        ),
      },
    ],
    [translate, editShow],
  );

  return (
    <>
      <EditableList columns={columns} onCreate={() => createShow()}>
        <CategoryModal
          modalProps={createModalProps}
          formProps={createFormProps}
          action="create"
        />
        <CategoryModal
          modalProps={editModalProps}
          formProps={editFormProps}
          action="edit"
        />
      </EditableList>
    </>
  );
};
