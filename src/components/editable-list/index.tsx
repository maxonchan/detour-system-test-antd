import { CreateButton, List, useTable } from "@refinedev/antd";
import { BaseRecord } from "@refinedev/core";
import { Button, Space, Switch, Table } from "antd";
import type { TableProps } from "antd";
import { useMemo, useState } from "react";

interface EditableListProps {
  columns: TableProps<BaseRecord>["columns"];
  dataSource?: BaseRecord[];
}

export const EditableList = ({ columns, dataSource }: EditableListProps) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const { tableProps, searchFormProps } = useTable({
    syncWithLocation: true,
  });

  const columnsList = useMemo(() => {
    return isEditMode
      ? columns
      : columns?.filter((column) => column.key !== "actions");
  }, [columns, isEditMode]);

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
              <div
                style={{ display: "flex", alignItems: "center", minHeight: 32 }}
              >
                <Switch checked={isEditMode} onChange={setIsEditMode} />
              </div>
            </Space>
            {isEditMode && (defaultButtons ?? <CreateButton />)}
          </Space>
        </>
      )}
    >
      <Table
        {...tableProps}
        dataSource={dataSource ? dataSource : tableProps.dataSource}
        columns={columnsList}
      />
    </List>
  );
};
