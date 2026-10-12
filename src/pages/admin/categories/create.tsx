import { Create, useForm } from "@refinedev/antd";
import { useTranslate } from "@refinedev/core";
import { Form, Input } from "antd";
import React from "react";

export const CategoryCreate = () => {
  const translate = useTranslate();
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Create saveButtonProps={saveButtonProps}>
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
    </Create>
  );
};
