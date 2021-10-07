import { Container, InputBox, InnerBox } from "./styled";
import InputLabel from "./InputLabel";

const DepositPage = () => {
  return (
    <Container>
      <InputBox placeholder="search with reference number" />
      <InnerBox>
        <InputLabel
          textVal="Application Reference No"
          type="search"
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
        />
        <InputLabel
          textVal="$78, 000"
          type="detail"
          labelName="Approved Amount"
        />
        <InputLabel
          textVal="APPROVED"
          type="detail"
          labelName="Application Status"
        />
      </InnerBox>
    </Container>
  );
};

export default DepositPage;
