import React, { useMemo } from "react";
import { Table } from "react-bootstrap";
import { useTable, usePagination } from "react-table";
import { Skeleton, Stack } from "@mui/material";
import classes from "./index.module.css";

const TableComponent = (props) => {
  const data = useMemo(() => props.data, [props.data]);
  const columns = useMemo(() => props.heading, [props.heading]);

  const tableInstance = useTable({ columns, data }, usePagination);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    pageCount,
    gotoPage,
    canPreviousPage,
    pageOptions,
    state,
    prepareRow,
  } = tableInstance;
  const { pageIndex } = state;
  return (
    <>
      {props.loading ? (
        <Stack spacing={4}>
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="rectangular" width={800} height={100} />
        </Stack>
      ) : (
        <>
          <div className={classes.tableCard}>
            <div className={classes.table}>
              <Table
                striped
                responsive
                {...getTableProps()}
                className={classes.tb}
              >
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>
                          {column.render("Header")}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()} className={classes.tBody}>
                  {page.map((row) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <td {...cell.getCellProps()}>
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
            <div className={classes.tableFooter}>
              {" "}
              <span className={classes.tableText}>
                Page{" "}
                <strong>
                  {pageIndex + 1} of {pageOptions.length}
                </strong>{" "}
                | Page :{" "}
              </span>
              <input
                type="number"
                defaultValue={pageIndex + 1}
                onChange={(e) => {
                  const pageNumber = e.target.value
                    ? Number(e.target.value) - 1
                    : 0;
                  gotoPage(pageNumber);
                }}
                style={{ width: "60px" }}
              />
              <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                {"<<"}
              </button>{" "}
              <button
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                previous
              </button>{" "}
              <button onClick={() => nextPage()} disabled={!canNextPage}>
                next
              </button>{" "}
              <button
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              >
                {">>"}
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default TableComponent;
