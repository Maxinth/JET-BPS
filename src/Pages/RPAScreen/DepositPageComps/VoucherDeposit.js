import { InnerBox } from "./styled";
import InputLabel from "./InputLabel";
const VoucherDeposit = () => {
  return (
    <InnerBox>
      <InputLabel
        type="detail"
        textVal="Auto-Generate Ref"
        labelName="Deposit Reference"
      />
      <InputLabel
        type="input"
        textVal="Amount to Deposit"
        labelName="Deposit Amount"
      />
    </InnerBox>
  );
};

export default VoucherDeposit;
