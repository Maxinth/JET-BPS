import React, { useMemo, useState } from "react";
import { Table, Row, Col,Container } from "react-bootstrap";
import { useTable, usePagination, useGlobalFilter,useSortBy } from "react-table";
import classes from "./index.module.css";
import {
  Paper,
  Box,
  Skeleton,
  Stack,
  TextField,
  InputAdornment,
} from "@mui/material";
import { Search,
  ArrowDropDown,
  ArrowDropUp } from "@mui/icons-material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateRangePicker from "@mui/lab/DateRangePicker";
import { motion, AnimatePresence } from 'framer-motion'
import ModalDisplay from "../../ModalDisplay";

const TableComponent = (props) => {
  const [value, setValue] = useState([null, null]);
  const data = useMemo(() => props.data, [props.data]);
  const columns = useMemo(() => props.heading, [props.heading]);
  const [show, setShow] = useState(false);
const [selectedRow, setSelectedRow] = useState({});
  const spring = React.useMemo(
    () => ({
      type: 'spring',
      damping: 50,
      stiffness: 100,
    }),
    []
  )
  const handleClose = () => setShow(false);
const handleShow = (selected) => {
  setSelectedRow(selected);
  console.log(selectedRow)
  setShow(true);
  };
  const tableInstance = useTable(
    { columns, data },
    useGlobalFilter,
    useSortBy,
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

    <ModalDisplay open={show} handleClose={handleClose} title={'Wallets Details'} >
    <Container fluid>
        <Col md={12} >
              <Row >
                <Col md={8} className="text-left" >

        <table className={classes.table}>
                    <tr>
                      <td>Reference Number</td>

                      <td>{selectedRow.reference}</td>
                    </tr>
                    <tr>
                      <td>Beneficiary Name</td>

                      <td>13GHTNU3839390</td>
                    </tr>
                    <tr>
                      <td>Date Applied</td>

                      <td>{selectedRow.createdDate}</td>
                    </tr>

                    <tr>
                      <td>Amount Applied</td>

                      <td>{selectedRow.amt}</td>
                    </tr>
                    <tr>
                      <td>Amount Approved</td>

                      <td>$8900000</td>
                    </tr>
                    <tr>
                      <td>Receiving Paying Agency (RPA)</td>

                      <td>$8900000</td>
                    </tr>
                    <tr>
                      <td>Approved Office</td>

                      <td>$7000000</td>
                    </tr>
                    <tr>
                      <td>Proccesed Date</td>

                      <td>{selectedRow.processDate}</td>
                    </tr>
                  </table>
        </Col>
        <Col md={4}>
                
                  <table className={classes.table2}>
                    <tr>
                      <td>Subsidy Type</td>
                      <td>seeding Subsidy</td>
                    </tr>
                    <tr>
                      <td>Status</td>
                      <td>{data.status}</td>
                    </tr>
                  </table>
        

</Col>
</Row>
</Col>
</Container>
    </ModalDisplay>


    
      <Row>
        <Col md={6} style={{ padding: "20px" }}>
          {props.loading ? (
            <Skeleton variant="text" />
          ) : (
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateRangePicker
                calendars={1}
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(startProps, endProps) => (
                  <React.Fragment>
                    <TextField {...startProps} variant="filled" fullWidth />
                    <Box sx={{ mx: 2 }}> to </Box>
                    <TextField {...endProps} variant="filled" fullWidth />
                  </React.Fragment>
                )}
              />
            </LocalizationProvider>
          )}
        </Col>
        <Col md={6} style={{ padding: "20px" }}>
          {props.loading ? (
            <Skeleton variant="text" />
          ) : (
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
              variant="filled"
              value={globalFilter || ""}
              onChange={(e) => setGlobalFilter(e.target.value)}
            />
          )}
        </Col>
        <Col md={12}>
        {props.loading ? (
            <Skeleton variant="text" />
          ) : props.tableBtn || ' '
          }
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
                                <motion.th {...column.getHeaderProps({
                                  layoutTransition: spring,
                                  style: {
                                    minWidth: column.minWidth,
                                  },
                                })
                              
                              
                            }
                                  >
                                  <div {...column.getSortByToggleProps()}>
                                  <span >
                                  {column.render("Header")}
                                    {column.isSorted?(column.isSortedDesc? (<ArrowDropUp/>):
                                    (<ArrowDropDown/>)):(<ArrowDropUp/>) }
                                  </span>
                                  </div>
                                </motion.th>
                              ))}
                            </tr>
                          ))}
                        </thead>
                        <tbody
                          {...getTableBodyProps()}
                          className={classes.tBody}
                        >
                           <AnimatePresence>
                          {page.map((row) => {
                            prepareRow(row);
                            return (
                              <motion.tr {...row.getRowProps({
                                layoutTransition: spring})} onClick={() =>   handleShow(row.original)} 
                                key={row.getRowProps().key}
                                
                                >
                                {row.cells.map((cell) => {
                                  return (
                                    <motion.td {...cell.getCellProps()}
                                    
                                    >
                                      {cell.render("Cell")}
                                    </motion.td>
                                  );
                                })}
                              </motion.tr>
                            );
                          })}
                           </AnimatePresence>
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
