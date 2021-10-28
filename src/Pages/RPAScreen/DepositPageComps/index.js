import React from "react";
import { Form } from "./styled";
import MainSearchInput from "./MainSearchInput";
import {Container} from "@mui/material";
import TopSection from "./TopSection";
import VoucherDeposits from "./VoucherDeposits";
// import {data} from './data'
import React,{ useState } from "react";

const BeneficiaryDeposit = () => {
  
  const [refNo, setRefNo] = useState("");



  const getRefNoEntered = (val) => setRefNo(val);


 

  return (
    <Form noValidate autoComplete="off">
      <Container>
        <MainSearchInput />
        <TopSection
          refNo={refNo}
          getVal={getRefNoEntered}
         
        />
        <VoucherDeposits />
      </Container>
    </Form>
  );
};

export default BeneficiaryDeposit;

