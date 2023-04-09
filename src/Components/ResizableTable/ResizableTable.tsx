import React, { useState, useRef, MouseEventHandler } from "react";

import styles from "./ResizableTable.module.scss";

type Column = {
  title: string;
  key: string;
  width: number;
};

type Props = {
  columns: Column[];
  data: any[];
};

export const ResizableTable: React.FC<Props> = ({ columns, data }) => {
  const [tableWidth, setTableWidth] = useState(0);
  const [resizingColumnKey, setResizingColumnKey] = useState<string | null>(
    null
  );

  const tableRef = useRef<HTMLTableElement>(null);

  const handleResizeMouseDown: MouseEventHandler<HTMLDivElement> = (
    event: React.MouseEvent
  ) => {
    event.preventDefault();
    setResizingColumnKey(key);
  };

  const handleResizeMouseUp = () => {
    setResizingColumnKey(null);
  };

  const handleResizeMouseMove = (event: globalThis.MouseEvent) => {
    if (resizingColumnKey) {
      const tableRect = tableRef.current?.getBoundingClientRect();
      const mouseX = event.clientX;
      const column = columns.find((c) => c.key === resizingColumnKey);
      if (tableRect && column) {
        const newWidth = Math.max(
          50,
          mouseX - tableRect.left - column.width / 2
        );
        const newTableWidth =
          tableWidth - column.width + newWidth < tableRect.width
            ? tableWidth + (newWidth - column.width)
            : tableRect.width;
        setTableWidth(newTableWidth);

        const newColumns = columns.map((c) =>
          c.key === resizingColumnKey ? { ...c, width: newWidth } : c
        );
        setColumns(newColumns);
      }
    }
  };

  const [cols, setCols] = useState(columns.map((c) => ({ ...c })));

  return (
    <div
      className={styles.resizableTableWrapper}
      onMouseMove={handleResizeMouseMove}
      onMouseUp={handleResizeMouseUp}
    >
      <table ref={tableRef} className={styles.resizableTable}>
        <thead>
          <tr>
            {cols.map((column, index) => (
              <th key={column.key} style={{ width: column.width }}>
                <div className={styles.columnHeader}>
                  <span>{column.title}</span>
                  {index < cols.length - 1 && (
                    <div
                      className={styles.resizeHandle}
                      onMouseDown={(event) =>
                        handleResizeMouseDown(event, column.key)
                      }
                    />
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {cols.map((column) => (
                <td key={column.key}>{row[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
