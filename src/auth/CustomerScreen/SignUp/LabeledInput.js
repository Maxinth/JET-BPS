// import {TextField} from "@mui/material";
import { Span, Text, Label, Box } from "./styled";
import PropTypes from "prop-types";
import { Field } from "formik";
import React from 'react'

const LabeledInputAndDisplay = ({
  req = false,
  type,
  labelName,
  placeholder,
  inputType = "text",
  id,
  value = "",
}) => {
  return (
    <Label>
      <Text>
        {req && <Span>*</Span>}
        {labelName}
      </Text>
      {type === "input" && (
        <Field name={id} placeholder={placeholder} type={inputType} />
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
