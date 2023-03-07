import SocialMediaIcons from "icons/SocialMediaIcons";
import React from "react";
import styled from "styled-components";

const Footer = () => {
  const Finnsweet = "{Finnsweet";

  const Footer = styled.footer`
    display: flex;
    flex-direction: column;
  `;
  const FooterHigherDiv = styled.div`
    display: flex;
    background: #1c1e53;
    margin-top: 300px;
    padding: 60px 10rem 0;
  `;
  const FooterHigherDivLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: start;
  `;
  const FooterHigherDivLeftUp = styled.div`
    color: #fff;
  `;
  const FooterHigherDivLeftTitle = styled.h2`
    color: #fff;
    font-size: 30px;
  `;
  const FooterHigherDivLeftDesc = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    /* or 175% */

    /* White */

    color: #ffffff;

    opacity: 0.8;
    max-width: 400px;
  `;

  const FooterHigherDivLeftDown = styled.div`
    background: #fcd980;
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 20px 90px 20px 30px;
    gap: 40px;
  `;
  const FooterHigherDivLeftText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `;
  const FooterHigherDivLeftTextStrong = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
    /* identical to box height, or 178% */

    /* Dark blue */

    color: #282938;
  `;
  const FooterHigherDivLeftTextLight = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    /* identical to box height, or 175% */

    /* Dark blue */

    color: #282938;

    opacity: 0.8;
  `;

  return (
    <Footer>
      <FooterHigherDiv>
        <FooterHigherDivLeft>
          <FooterHigherDivLeftUp>
            <FooterHigherDivLeftTitle>{Finnsweet}</FooterHigherDivLeftTitle>
            <FooterHigherDivLeftDesc>
              We are always open to discuss your project and improve your online
              presence.
            </FooterHigherDivLeftDesc>
          </FooterHigherDivLeftUp>
          <FooterHigherDivLeftDown>
            <FooterHigherDivLeftText>
              <FooterHigherDivLeftTextStrong>
                Email me at
              </FooterHigherDivLeftTextStrong>
              <FooterHigherDivLeftTextLight>
                contact@website.com
              </FooterHigherDivLeftTextLight>
            </FooterHigherDivLeftText>
            <FooterHigherDivLeftText>
              <FooterHigherDivLeftTextStrong>
                Call us
              </FooterHigherDivLeftTextStrong>
              <FooterHigherDivLeftTextLight>
                0927 6277 28525
              </FooterHigherDivLeftTextLight>
            </FooterHigherDivLeftText>
          </FooterHigherDivLeftDown>
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
