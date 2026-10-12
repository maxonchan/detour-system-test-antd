import { Create, useForm, useSelect } from "@refinedev/antd";
import { useTranslate } from "@refinedev/core";
import MDEditor from "@uiw/react-md-editor";
import { Form, Input, Select } from "antd";
import React from "react";

export const BlogPostCreate = () => {
  const translate = useTranslate();
  const { formProps, saveButtonProps } = useForm({});

  const { selectProps: categorySelectProps } = useSelect({
    resource: "categories",
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={translate("blog_posts.fields.title", "タイトル")}
          name={["title"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={translate("blog_posts.fields.content", "内容")}
          name="content"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <MDEditor data-color-mode="light" />
        </Form.Item>
        <Form.Item
          label={translate("blog_posts.fields.category", "カテゴリー")}
          name={["category", "id"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...categorySelectProps} />
        </Form.Item>
        <Form.Item
          label={translate("blog_posts.fields.status", "ステータス")}
          name={["status"]}
          initialValue={"draft"}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            defaultValue={"draft"}
            options={[
              { value: "draft", label: translate("blog_posts.status.draft", "下書き") },
              { value: "published", label: translate("blog_posts.status.published", "公開済み") },
              { value: "rejected", label: translate("blog_posts.status.rejected", "却下") },
            ]}
            style={{ width: 120 }}
          />
        </Form.Item>
      </Form>
    </Create>
  );
};
