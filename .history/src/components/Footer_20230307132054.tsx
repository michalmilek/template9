import SocialMediaIcons from "icons/SocialMediaIcons";
import React from "react";
import styled from "styled-components";

const Footer = () => {
  const Footer = styled.footer`
    display: flex;
    flex-direction: column;
  `;
  const FooterHigherDiv = styled.div`
    display: flex;
    background: #1c1e53;
    margin-top: 300px;
    padding: 0 10rem 20px;
  `;
  const FooterHigherDivLeft = styled.div`
    display: flex;
    flex-direction: column;
  `;

  return (
    <Footer>
      <FooterHigherDiv>
        <FooterHigherDivLeft>
          <div>
            <h2>Finnsweet</h2>
            <p>
              We are always open to discuss your project and improve your online
              presence.
            </p>
          </div>
          <div>
            <div>
              <span>Email me at</span>
              <p>contact@website.com</p>
            </div>
            <div>
              <span>Call us</span>
              <p>0927 6277 28525</p>
            </div>
          </div>
        </FooterHigherDivLeft>
        <div>
          <h1>Lets Talk!</h1>
          <p>
            We are always open to discuss your project, improve your online
            presence and help with your UX/UI design challenges.
          </p>
          <div>
            <SocialMediaIcons />
          </div>
        </div>
      </FooterHigherDiv>
      <div></div>
    </Footer>
  );
};

export default Footer;
