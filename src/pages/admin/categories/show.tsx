import { NumberField, Show, TextField } from "@refinedev/antd";
import { useShow, useTranslate } from "@refinedev/core";
import { Typography } from "antd";
import React from "react";

const { Title } = Typography;

export const CategoryShow = () => {
  const translate = useTranslate();
  const { result: record, query } = useShow({});
  const { isLoading } = query;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{translate("categories.fields.id", "ID")}</Title>
      <TextField value={record?.id} />
      <Title level={5}>{translate("categories.fields.title", "タイトル")}</Title>
      <TextField value={record?.title} />
    </Show>
  );
};
