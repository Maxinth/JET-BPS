import React from "react";
import LabeledInputAndDisplay from "./LabeledInput";
import CashVoucherSelect from "./CashVoucherSelect";

const CashDepositScreen = (props) => {
  return (
    <>
      <LabeledInputAndDisplay
        type="display"
        labelName="Deposit Reference"
        value="AUTO-GENERATE REF"
      />
      <LabeledInputAndDisplay
        type="input"
        labelName="Deposit amount"
        value=""
        placeholder="Deposit Amount"
        req={true}
      />
      <CashVoucherSelect {...props} />
    </>
  );
};

export default CashDepositScreen;
