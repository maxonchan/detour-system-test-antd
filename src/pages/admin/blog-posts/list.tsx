import {
  CreateButton,
  DateField,
  DeleteButton,
  EditButton,
  List,
  MarkdownField,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { type BaseRecord, useMany, useTranslate } from "@refinedev/core";
import { Button, Form, Input, Modal, Space, Switch, Table, message } from "antd";
import React from "react";

export const BlogPostList = () => {
  const translate = useTranslate();
  const [showActions, setShowActions] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const { result, tableProps, searchFormProps } = useTable({
    syncWithLocation: true,
  });

  const {
    result: { data: categories },
    query: { isLoading: categoryIsLoading },
  } = useMany({
    resource: "categories",
    ids: result?.data?.map((item) => item?.category?.id).filter(Boolean) ?? [],
    queryOptions: {
      enabled: !!result?.data,
    },
  });

  return (
    <List
      headerProps={{
        className: "blog-posts-header",
      }}
      headerButtons={({ defaultButtons }) => (
        <>
          <style>{`
            .blog-posts-header .ant-page-header-heading {
              align-items: flex-start;
            }
          `}</style>
          <Space direction="vertical" align="end" size={12}>
            <Space align="center" size={8}>
              <Button type="primary" onClick={() => setIsModalOpen(true)}>
                {translate("blog_posts.modal.open", "モーダルを開く")}
              </Button>
              <div style={{ display: "flex", alignItems: "center", minHeight: 32 }}>
                <Switch checked={showActions} onChange={setShowActions} />
              </div>
            </Space>
            {showActions && (defaultButtons ?? <CreateButton />)}
          </Space>
        </>
      )}
    >
      <Form form={searchFormProps?.form} component={false} />
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title={translate("blog_posts.fields.id", "ID")} />
        <Table.Column dataIndex="title" title={translate("blog_posts.fields.title", "タイトル")} />
        <Table.Column
          dataIndex="content"
          title={translate("blog_posts.fields.content", "内容")}
          render={(value: any) => {
            if (!value) return "-";
            return <MarkdownField value={value.slice(0, 80) + "..."} />;
          }}
        />
        <Table.Column
          dataIndex={"category"}
          title={translate("blog_posts.fields.category", "カテゴリー")}
          render={(value) =>
            categoryIsLoading ? (
              <>{translate("common.loading", "読み込み中...")}</>
            ) : (
              categories?.find((item) => item.id === value?.id)?.title
            )
          }
        />
        <Table.Column dataIndex="status" title={translate("blog_posts.fields.status", "ステータス")} />
        <Table.Column
          dataIndex={["createdAt"]}
          title={translate("blog_posts.fields.createdAt", "作成日時")}
          render={(value: any) => <DateField value={value} />}
        />
        {showActions && (
          <Table.Column
            title={translate("blog_posts.fields.actions", "操作")}
            dataIndex="actions"
            render={(_, record: BaseRecord) => (
              <Space>
                <EditButton hideText size="small" recordItemId={record.id} />
                <ShowButton hideText size="small" recordItemId={record.id} />
                <DeleteButton hideText size="small" recordItemId={record.id} />
              </Space>
            )}
          />
        )}
      </Table>

      {isModalOpen && (
        <BlogPostModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </List>
  );
};

interface BlogPostModalProps {
  open: boolean;
  onClose: () => void;
}

const BlogPostModal: React.FC<BlogPostModalProps> = ({ open, onClose }) => {
  const translate = useTranslate();
  const [form] = Form.useForm();

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      console.log("Form values:", values);
      message.success(translate("blog_posts.modal.submitSuccess", "送信に成功しました"));
      onClose();
    } catch (error) {
      console.error("Validation failed:", error);
    }
  };

  return (
    <Modal
      title={translate("blog_posts.modal.title", "フォームモーダル")}
      open={open}
      onOk={handleOk}
      onCancel={onClose}
      destroyOnHidden
    >
      <Form form={form} layout="vertical">
        <Form.Item
          label={translate("blog_posts.fields.title", "タイトル")}
          name="title"
          rules={[{ required: true, message: translate("blog_posts.modal.inputTitle", "タイトルを入力してください") }]}
        >
          <Input placeholder={translate("blog_posts.modal.inputTitle", "タイトルを入力してください")} />
        </Form.Item>
        <Form.Item
          label={translate("blog_posts.fields.content", "内容")}
          name="content"
          rules={[{ required: true, message: translate("blog_posts.modal.inputContent", "内容を入力してください") }]}
        >
          <Input.TextArea rows={4} placeholder={translate("blog_posts.modal.inputContent", "内容を入力してください")} />
        </Form.Item>
      </Form>
    </Modal>
  );
};
