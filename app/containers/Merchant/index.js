import React from 'react';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import MainSection from './MainSection';
import CardStyle from './CardStyle';

class MerchantPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
    <MainSection>
      {/* <CardStyle>
        <div className="ink-flex">
          <div className="all-100">
            <div className="ink-flex">
              <div className="all-60 card-login">
                <div className="ink-flex push-center">
                  <div className="all-100">
                    <div className="ink-flex push-center">
                      <h3>MERCHANT LOGIN</h3>
                    </div>
                  </div>
                  <div className="all-100">
                    <p>ALL RIGHTS RESERVED</p>
                  </div>
                </div>
              </div>
              <div className="card-logo"></div>
            </div>
          </div>
        </div>
      </CardStyle> */}
      <FirstSection>
        <SecondSection></SecondSection>
      </FirstSection>
    </MainSection>
    );
  }
}

export default MerchantPage;
