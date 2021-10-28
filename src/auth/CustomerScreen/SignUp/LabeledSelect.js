import { Label, Text, Span } from "./styled";
import CountryDropDown from "./CountryDropDown";
import { data } from "./data";
import React from "react";

const LabeledSelectBox = ({ labelName, req, value, onChange, id }) => {
  return (
    <Label>
      <Text>
        {req && <Span>*</Span>}
        {labelName}
      </Text>
      <CountryDropDown valueOptions={data} id={id} name={id} />
    </Label>
  );
};

export default LabeledSelectBox;
