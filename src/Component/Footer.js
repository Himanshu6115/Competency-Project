import React from 'react';
import '../CSS/Footer.css';

function Footer () {

  return (
    <section className="footer1">
      <hr className="footer-seperator" />
      <section className="footer-so">
        <a > DEVELOPER INFORMATION</a>
      </section>
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__name">
              TIMESHEET DETAILS
          </section>
              
        </section>
        <section className="footer-info-center">
          <section className="footer-info__email">
            xxx@XXX.com
          </section>
          <section className="footer-info__terms">
            Terms and Conditions
            <br />
            Copyright
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__number">
            CONTACT_US
          </section>
          <section className="footer-info__contact">
            XXXX-XXXX
            <br />
           +91 XXXXXXXX
          
          </section>
        </section>
      </section>
      <hr className="footer-seperator" />
    </section>
  );

}

export default Footer;