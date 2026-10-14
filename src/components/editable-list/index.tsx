import { CreateButton, List, useTable } from "@refinedev/antd";
import { BaseRecord } from "@refinedev/core";
import { Button, Space, Switch, Table } from "antd";
import type { TableProps } from "antd";
import { useMemo, useState } from "react";

interface EditableListProps {
  columns: TableProps<BaseRecord>["columns"];
  dataSource?: BaseRecord[];
  onCreate?: () => void;
  children?: React.ReactNode;
}

export const EditableList = ({
  columns,
  dataSource,
  onCreate,
  children,
}: EditableListProps) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const { tableProps } = useTable({
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
            {isEditMode &&
              (onCreate ? (
                <CreateButton
                  onClick={(e) => {
                    e.preventDefault();
                    onCreate();
                  }}
                />
              ) : (
                defaultButtons ?? <CreateButton />
              ))}
          </Space>
        </>
      )}
    >
      <Table
        {...tableProps}
        dataSource={dataSource ? dataSource : tableProps.dataSource}
        columns={columnsList}
      />
      {children}
    </List>
  );
};
