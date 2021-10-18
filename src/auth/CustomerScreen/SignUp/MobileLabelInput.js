import React from "react";
import {
  Label,
  Text,
  Span,
} from "../../../Pages/RPAScreen/DepositPageComps/styled";
import { TextField } from "@mui/material";

const MobileLabelInput = ({
  labelName,
  req,
  size,
  value,
  placeholder,
  inputType,
}) => {
  return (
    <Label>
      <Text>
        {req && <Span>*</Span>}
        {labelName}
      </Text>

      <TextField
        variant="outlined"
        size={size}
        value={value}
        placeholder={placeholder}
        type={inputType}
      />
    </Label>
  );
};

export default MobileLabelInput;
