import { useTranslate } from "@refinedev/core";
import { Form, Input, Modal } from "antd";
import type { FormProps, ModalProps } from "antd";
import React from "react";

interface CategoryModalProps {
  modalProps: ModalProps;
  formProps: FormProps;
  action?: "create" | "edit";
}

export const CategoryModal: React.FC<CategoryModalProps> = ({
  modalProps,
  formProps,
  action = "create",
}) => {
  const translate = useTranslate();

  const title =
    action === "edit"
      ? translate("categories.titles.edit", "カテゴリーの編集")
      : translate("categories.titles.create", "カテゴリーの作成");

  return (
    <Modal
      {...modalProps}
      title={title}
      destroyOnClose
      okText={translate("buttons.save", "保存")}
      cancelText={translate("buttons.cancel", "キャンセル")}
    >
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={translate("categories.fields.title", "タイトル")}
          name={["title"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};
