import {
  DateField,
  MarkdownField,
  NumberField,
  Show,
  TextField,
} from "@refinedev/antd";
import { useOne, useShow, useTranslate } from "@refinedev/core";
import { Typography } from "antd";
import React from "react";

const { Title } = Typography;

export const BlogPostShow = () => {
  const translate = useTranslate();
  const {
    result: record,
    query: { isLoading },
  } = useShow({});

  const {
    result: category,
    query: { isLoading: categoryIsLoading },
  } = useOne({
    resource: "categories",
    id: record?.category?.id || "",
    queryOptions: {
      enabled: !!record,
    },
  });

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{translate("blog_posts.fields.id", "ID")}</Title>
      <TextField value={record?.id} />
      <Title level={5}>{translate("blog_posts.fields.title", "タイトル")}</Title>
      <TextField value={record?.title} />
      <Title level={5}>{translate("blog_posts.fields.content", "内容")}</Title>
      <MarkdownField value={record?.content} />
      <Title level={5}>{translate("blog_posts.fields.category", "カテゴリー")}</Title>
      <TextField
        value={categoryIsLoading ? <>{translate("common.loading", "読み込み中...")}</> : <>{category?.title}</>}
      />
      <Title level={5}>{translate("blog_posts.fields.status", "ステータス")}</Title>
      <TextField value={record?.status} />
      <Title level={5}>{translate("blog_posts.fields.createdAt", "作成日時")}</Title>
      <DateField value={record?.createdAt} />
    </Show>
  );
};
