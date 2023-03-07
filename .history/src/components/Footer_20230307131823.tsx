import SocialMediaIcons from "icons/SocialMediaIcons";
import React from "react";
import styled from "styled-components";

const Footer = () => {
  const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    padding: 300px 10rem 20px;
  `;
  const FooterHigherDiv = styled.div`
    display: flex;
  `;

  return (
    <Footer>
      <FooterHigherDiv>
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
