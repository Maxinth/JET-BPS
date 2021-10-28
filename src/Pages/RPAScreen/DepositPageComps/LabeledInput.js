import React from "react";
import {TextField} from "@mui/material";
import { Span, Text, Label, Box } from "./styled";
import PropTypes from "prop-types";
import React from 'react'
const LabeledInputAndDisplay = ({
  req = false,
  type,
  labelName,
  value = "",
  placeholder,
  handleChange,
  size="small",
  inputType="text"
}) => {
  return (
    <Label>
      <Text>
        {req && <Span>*</Span>}
        {labelName}
      </Text>
      {type === "input" && (
        <TextField
          variant="outlined"
          size={size}
          value={value}
          placeholder={placeholder}
          type={inputType}
          onChange={(e) => handleChange(e.target.value)}
        />
      )}
      {type === "display" && <Box>{value}</Box>}
    </Label>
  );
};

LabeledInputAndDisplay.propTypes = {
  labelName: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  req: PropTypes.bool,
};
export default LabeledInputAndDisplay;
