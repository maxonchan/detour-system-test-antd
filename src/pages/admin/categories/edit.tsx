import { Edit, useForm } from "@refinedev/antd";
import { useTranslate } from "@refinedev/core";
import { Form, Input } from "antd";
import React from "react";

export const CategoryEdit = () => {
  const translate = useTranslate();
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Edit saveButtonProps={saveButtonProps}>
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
    </Edit>
  );
};
