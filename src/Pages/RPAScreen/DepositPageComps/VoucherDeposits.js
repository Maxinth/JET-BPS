import React from "react";
import { VoucherBox, InnerVoucherBox } from "./styled";
import CashDepositScreen from "./CashDepositScreen";
import { Button } from "@mui/material";
import VoucherDepositScreen from "./VoucherDepositScreen";
import React, { useState } from "react";

const VoucherDeposits = ({ depositReceived = 0 }) => {
  const [paymentType, setPaymentType] = useState("cash");
  const getPaymentType = (id) => setPaymentType(id);
  return (
    <VoucherBox>
      <InnerVoucherBox>
        {paymentType === "cash" && (
          <CashDepositScreen
            getPaymentType={getPaymentType}
            selectedOption={paymentType}
          />
        )}
        {paymentType === "voucher" && (
          <VoucherDepositScreen deposit={depositReceived} />
        )}
        <Button variant="contained" color="primary">
          Process Deposit
        </Button>
      </InnerVoucherBox>
    </VoucherBox>
  );
};

export default VoucherDeposits;
