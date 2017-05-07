import React from 'react';
import Accordion from './Accordion';

export default class TopGroup extends React.Component { //eslint-disable-line
  render() {
    const { franchiseMerchants, openAccordion, getMerchantReports} = this.props
    return (
      <Accordion
        data={franchiseMerchants}
        openAccordion={openAccordion}
        getMerchantReports={getMerchantReports}
      />
    );
  }
}
