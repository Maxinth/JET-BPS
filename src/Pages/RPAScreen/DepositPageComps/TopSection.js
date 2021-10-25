import React from "react";
import DepositAndApprovedAmounts from "./DepositAndApprovedAmounts";
import { InnerBox } from "./styled";
import ReferenceNoSearch from "./ReferenceNoSearch";
import BeneficiaryNameAndNo from "./BeneficiaryNameAndNo";
import ApplicationStatus from "./ApplicationStatus";
import PropTypes from "prop-types";
import React from "react";

const TopSection = (props) => {
  const { refNo, getVal, handleSearch, ...detailsProps } = props;
  const { applicationStatus, depositReceived, subsidyAmount, walletDetails } =
    detailsProps;
  return (
    <InnerBox>
      <ReferenceNoSearch
        refNo={refNo}
        getVal={getVal}
        handleSearch={handleSearch}
      />
      <BeneficiaryNameAndNo name={walletDetails} />
      <DepositAndApprovedAmounts
        deposit={depositReceived}
        approvedAmount={subsidyAmount}
      />
      <ApplicationStatus status={applicationStatus} />
    </InnerBox>
  );
};

TopSection.propTypes = {
  refNo: PropTypes.string,
  getVal: PropTypes.func,
};

export default TopSection;
