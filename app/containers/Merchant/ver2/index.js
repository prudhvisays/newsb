import React from 'react';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import MainSection from './MainSection';
import CardStyle from './CardStyle';
import Logo from '../../components/Images/logo.png';

class MerchantPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
    <MainSection>
      <FirstSection>
      </FirstSection>
      <CardStyle>
        <div className="ink-flex push-center">
          <div className="all-50 small-75 mer-card">
            <div className="ink-flex">
              <div className="all-40 small-100 mer-card-logo">
                <div className="mer-logo-wrap">
                  <img src={Logo} alt="season-boy" />
                </div>
              </div>
              <div className="all-60 small-100 mer-card-form"></div>
            </div>
          </div>
        </div>
      </CardStyle>
    </MainSection>
    );
  }
}

export default MerchantPage;
