import React from "react";
import { LineBox } from "./styled";
import LabeledInputAndDisplay from "./LabeledInput";
import PropTypes from "prop-types";

const DepositAndApprovedAmounts = ({ deposit = 0, approvedAmount = 0 }) => {
  return (
    <LineBox>
      <LabeledInputAndDisplay
        labelName="Amount to Deposit"
        value={`$ ${deposit}`}
        type="display"
      />
      <LabeledInputAndDisplay
        labelName="Approved Amount"
        value={`$ ${approvedAmount}`}
        type="display"
      />
    </LineBox>
  );
};

DepositAndApprovedAmounts.propTypes = {
  deposit: PropTypes.number,
  approvedAmount: PropTypes.number,
};

export default DepositAndApprovedAmounts;
