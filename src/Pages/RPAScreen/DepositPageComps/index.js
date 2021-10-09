import { Container, InputBox, InnerBox } from "./styled";
import TopSection from "./TopSection";
import VoucherDeposit from "./VoucherDeposit";
import { useState } from "react";
import { paymentReset } from "./data";

const DepositPage = () => {
  const [paymentMethod, setPaymentMethod] = useState({
    cash: true,
    voucher: false,
  });
  const selectPaymentMethod = (id) => {
    setPaymentMethod({ ...paymentReset, [`${id}`]: true });
  };
  return (
    <Container>
      <InputBox placeholder="search with reference number" />
      <InnerBox>
        <TopSection />
        <VoucherDeposit
          selectMethod={selectPaymentMethod}
          selectedOption={paymentMethod}
        />
      </InnerBox>
    </Container>
  );
};

export default DepositPage;
