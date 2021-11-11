import React, { useState, forwardRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./index.module.scss";
import {

  Box,
  Skeleton,
  Stack,

} from "@mui/material";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Search from '@material-ui/icons/Search';
import SaveAlt from '@material-ui/icons/SaveAlt';
import ModalDisplay from "../../ModalDisplay";
import MTable, { Icons } from 'material-table';
import { motion } from "framer-motion";

interface TableOpt {
  data: any,
  column: any,
  tableBtn?: React.ReactElement,
  loading: boolean
}


const TableComponent: React.FC<TableOpt> = (props) => {
  const [show, setShow] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>([]);


  const handleClose = () => setShow(false);
  const handleShow = (selected: any) => {
    setSelectedRow(selected);
    setShow(true);
  };
  const tableIcons: Icons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  }
  return (
    <>

      <ModalDisplay open={show} handleClose={handleClose}
        title={'Voucher Overview'}>
        <Container fluid>
          <Col md={12} >
            <Row >
              <Col md={8} className="text-left" >

                <table className={classes.table}>
                  <tr>
                    <td>Reference Number</td>

                    <td>{selectedRow!.reference}</td>
                  </tr>
                  <tr>
                    <td>Beneficiary Name</td>

                    <td>13GHTNU3839390</td>
                  </tr>
                  <tr>
                    <td>Date Applied</td>

                    <td>{selectedRow!.createdDate}</td>
                  </tr>

                  <tr>
                    <td>Amount Applied</td>

                    <td>{selectedRow!.amt}</td>
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

                    <td>{selectedRow!.processDate}</td>
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
                    <td>{selectedRow!.status}</td>
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
          ) : (null
          )}
        </Col>
        <Col md={6} style={{ padding: "20px" }}>

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
                <motion.div
                  initial={{ y: '55' }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.3, duration: 1, type: 'ease-in', stiffness: 150 }}

                >
                  <MTable
                    icons={tableIcons}
                    title={'Voucher Transactions'}
                    data={props.data}
                    columns={props.column}
                    onRowClick={(event, rowData) => {
                      handleShow(rowData)
                    }}
                    options={{ exportAllData: true, exportButton: true }}
                  />

                </motion.div>
              </>

            )}
          </Box>
        </Col>
      </Row>
    </>
  )
};

export default TableComponent;
