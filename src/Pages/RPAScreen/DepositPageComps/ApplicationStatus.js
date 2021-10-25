import React from "react";
import LabeledInputAndDisplay from "./LabeledInput";
import PropTypes from "prop-types";
import React from "react";
const ApplicationStatus = ({ status = "APPLICATION STATUS" }) => {
  return (
    <LabeledInputAndDisplay
      labelName="Application Status"
      value={status}
      type="display"
    />
  );
};

ApplicationStatus.propTypes = {
  status: PropTypes.string,
};

export default ApplicationStatus;
