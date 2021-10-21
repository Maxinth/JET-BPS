import { Label, Text, Span } from "./styled";
// import TextField from "@mui/material/TextField";
import React from "react";
import CountryDropDown from "./CountryDropDown";
import { data } from "./data";

const LabeledSelectBox = ({
  labelName,
  req,

  id,
}) => {
  return (
    <Label>
      <Text>
        {req && <Span>*</Span>}
        {labelName}
      </Text>
      <CountryDropDown valueOptions={data} id={id} />
    </Label>
  );
};

export default LabeledSelectBox;
