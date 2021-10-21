import React, { useMemo, useState } from "react";
import { Table, Row, Col } from "react-bootstrap";
import { useTable, usePagination, useGlobalFilter } from "react-table";
import classes from "./index.module.css";
import {
  Paper,
  Box,
  Skeleton,
  Stack,
  TextField,
  InputAdornment,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateRangePicker from "@mui/lab/DateRangePicker";

const TableComponent = (props) => {
  const [value, setValue] = useState([null, null]);

  const data = useMemo(() => props.data, [props.data]);
  const columns = useMemo(() => props.heading, [props.heading]);

  const tableInstance = useTable(
    { columns, data },
    useGlobalFilter,
    usePagination
  );

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
    setGlobalFilter,
    prepareRow,
  } = tableInstance;
  const { pageIndex, globalFilter } = state;

  return (
    <>
      <Row>
        <Col md={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangePicker
              calendars={1}
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <TextField {...startProps} variant="standard" fullWidth />
                  <Box sx={{ mx: 2 }}> to </Box>
                  <TextField {...endProps} variant="standard" fullWidth />
                </React.Fragment>
              )}
            />
          </LocalizationProvider>
        </Col>
        <Col md={6}>
          <TextField
            fullWidth
            id="input-with-icon-textfield"
            label="Search any Column"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            variant="standard"
            value={globalFilter || ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
        </Col>
        <Col md={12}>
          <Box sx={{ padding: "10px" }}>
            {props.loading ? (
              <Stack spacing={4}>
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="rectangular" width={800} height={100} />
              </Stack>
            ) : (
              <>
                <Paper elevation={5}>
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
                        <tbody
                          {...getTableBodyProps()}
                          className={classes.tBody}
                        >
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
                      <button
                        onClick={() => gotoPage(0)}
                        disabled={!canPreviousPage}
                      >
                        {"<<"}
                      </button>{" "}
                      <button
                        onClick={() => previousPage()}
                        disabled={!canPreviousPage}
                      >
                        previous
                      </button>{" "}
                      <button
                        onClick={() => nextPage()}
                        disabled={!canNextPage}
                      >
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
                </Paper>
              </>
            )}
          </Box>
        </Col>
      </Row>
    </>
  );
};

export default TableComponent;
