import React from "react";
import { useTable } from "react-table";

export const VlaTable = () => {
  //TODO React memo does nothing when called with one argument. review
  const data = React.useMemo(() => [{ id: 1, title: "Title od appointment", date: 15595883834349 }]);

  const columns = React.useMemo(() => [
    {
      Header: "Code",
      accessor: "id",
    },
    {
      Header: "Title",
      accessor: "title",
    },
    {
      Header: "Date",
      accessor: "date",
    },
  ]);

  const { getTableProps, getTableBodyProps, getHeaderGroupProps, headerGroups, getHeaderProps, rows, prepareRow, getRowProps, cells, getCellProps } = useTable({ columns, data });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
