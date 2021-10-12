import LabeledInputAndDisplay from "./LabeledInput";
import PropTypes from "prop-types";
const BeneficiaryNameAndNo = ({ name = "Beneficiary Name" }) => {
  return (
    <>
      <LabeledInputAndDisplay
        labelName="Beneficiary Name"
        value={name}
        type="display"
      />
      <LabeledInputAndDisplay
        labelName="Mobile Number"
        value="Mobile Number ?"
        type="display"
      />
    </>
  );
};

BeneficiaryNameAndNo.propTypes = {
  name: PropTypes.string,
};
export default BeneficiaryNameAndNo;
