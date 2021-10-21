import React from "react";
import { SelectBox, Option } from "./styled";
import PropTypes from "prop-types";

const SelectBoxMain = ({ valueOptions, id, handleChange }) => {
  return (
    <SelectBox id={id} onChange={handleChange}>
      {valueOptions.map((item, index) => (
        <Option key={index} value={item.name}>
          {item.name}
        </Option>
      ))}
    </SelectBox>
  );
};

SelectBoxMain.propType = {
  valueOptions: PropTypes.array,
  id: PropTypes.string,
  handleChange: PropTypes.func,
};
export default SelectBoxMain;
