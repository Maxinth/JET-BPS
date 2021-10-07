import React from "react";
import InputLabel from "./InputLabel";
const TopSection = () => {
  return (
    <>
      <InputLabel
        textVal="Application Reference No"
        type="input"
        labelName="Reference Number"
      />
      <InputLabel
        textVal="Beneficiary Name"
        type="detail"
        labelName="Beneficiary Name"
      />
      <InputLabel
        textVal="Mobile Number"
        type="detail"
        labelName="Mobile Number"
      />
      <InputLabel
        textVal="$23,400"
        type="detail"
        labelName="Amount to Deposit"
        bold={true}
      />
      <InputLabel
        textVal="$78,000"
        type="detail"
        labelName="Approved Amount"
        bold={true}
      />
      <InputLabel
        textVal="APPROVED"
        type="detail"
        labelName="Application Status"
        bold={true}
      />
    </>
  );
};

export default TopSection;
