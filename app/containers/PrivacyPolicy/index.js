import React from 'react';
import PrivacyStyle from './PrivacyStyle';
import logo from '../../Assets/privacylogo.png';

class PrivacyPolicy extends React.Component {
  render() {
    return (
    <PrivacyStyle>
      <div className="parallax"></div>
      <div className="pr-header">
        <a href="http://seasonboy.com/"><img src={logo}/></a>
      </div>
      <div className="ink-flex push-center pr-card">
        <div className="large-50 small-95">
          <div className="pr-content">
            <div className="pr-main-title">Privacy Policy</div>
            <div className="pr-title">WHAT DO WE DO WITH YOUR INFORMATION?</div>
            <div className="pr-description">
              When you sign up or pay for our Service, we usually collect the personal information you give us such as your name, address, contact numbers and email address.
              We also automatically receive your Mobile’s/computer’s internet protocol (IP) address in order to provide us with information that helps us learn about your browser, device and version of the app you are currently using..
              Email marketing (if applicable): With your permission, we may send you emails about new features with our services, new products and other updates.
            </div>
            <div className="pr-title">CONSENT</div>
            <div className="pr-sub-title">How do you get my consent?</div>
            <div className="pr-description">
              When you provide us with your personal information to complete a transaction, place an order, arrange for a delivery or return a purchase, we imply that you consent to our collecting it and using it for that specific reason only.
              If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no.
              How do I withdraw my consent?
              If after you opt-ing, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information anytime, by contacting us at support@seasonboy.com or mailing us at: SeasonBoy Delivery Solutions Pvt Ltd, #1603, Polaris A block, Meenakshi Sky Lounge, Hitex, Khanamet, HYD, 500084.
            </div>
            <div className="pr-title">DISCLOSURE</div>
            <div className="pr-description">We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.</div>
            <div className="pr-title">PAYMENT</div>
            <div className="pr-description">
              We use Paytm for processing payments. We do not store your card data on our servers. The data is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS) when processing payment. Your purchase transaction data is only used as long as is necessary to complete your purchase transaction. After that is complete, your purchase transaction information is not saved.
              Our payment gateway adheres to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express and Discover.
              PCI-DSS requirements help ensure the secure handling of credit card information by our store and its service providers.
              For more insight, you may also want to read terms and conditions of Paytm on <a href="https://paytm.com">https://paytm.com</a>
            </div>
            <div className="pr-title">THIRD-PARTY SERVICES</div>
            <div className="pr-description">
              In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us. However, certain third -party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase -related transactions.
              For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers.
              In particular, remember that certain providers may be located in or have facilities that are located a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.
              Once you leave our website/app or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website’s Terms of Service.
            </div>
            <div className="pr-title">LINKS</div>
            <div className="pr-description">
              When you click on links on our website, they may direct you away from our site. We are not responsible for the privacy practices of other sites and encourage you to read their privacy statements.
            </div>
            <div className="pr-title">SECURITY</div>
            <div className="pr-description">
              To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.
            </div>
            <div className="pr-title">COOKIES</div>
            <div className="pr-description">
              By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.
            </div>
            <div className="pr-title">CHANGES TO THIS PRIVACY POLICY</div>
            <div className="pr-description">
              We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.
              If SeasonBoy is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to serve you.
            </div>
            <div className="pr-title">QUESTIONS AND CONTACT INFORMATION</div>
            <div className="pr-description">
              If you would like to: access, correct, amend or delete any personal information we have about you, register a complaint, or simply want more information contact our Privacy Compliance Officer at <b>support@seasonboy.com</b> or by mail at <b>SeasonBoy Delivery Solutions Pvt Ltd, #1603, Polaris A block, Meenakshi Sky Lounge, Hitex, Khanamet, HYD, 500084.</b>
            </div>
          </div>
        </div>
      </div>
    </PrivacyStyle>
    );
  }
}

export default PrivacyPolicy;
