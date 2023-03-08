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
    flex-direction: column;
    background: #1c1e53;
    padding: 60px 10rem 0;

    @media (max-width: 768px) {
      padding: 20px 20px;
      gap: 60px;
    }
  `;
  const FooterHigherDivLeft = styled.div`
    display: flex;
    justify-content: start;
    align-items: start;
    gap: 86px;
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
    padding: 20px 140px 20px 30px;
    gap: 40px;
    width: 40%;
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

  const FooterHigherDivRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 18px;
    padding-bottom: 30px;
  `;
  const FooterHigherDivTitle = styled.h1`
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 64px;
    /* identical to box height, or 133% */

    color: #ffffff;
  `;
  const FooterHigherDivDesc = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    max-width: 420px;
    /* or 175% */

    /* Grey */

    color: #f4f6fc;

    opacity: 0.8;
  `;

  const FooterSocialMediaIconsDiv = styled.div`
    cursor: pointer;
  `;

  const FooterLowerDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 10rem;
  `;
  const FooterLowerCopyright = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    /* identical to box height, or 175% */

    /* Dark blue */

    color: #282938;
  `;
  const FooterLowerList = styled.div`
    display: flex;
    list-style-type: none;
    align-items: center;
    gap: 32px;
  `;
  const FooterLowerListItem = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    /* identical to box height, or 175% */
    cursor: pointer;

    /* Dark blue */

    color: #282938;
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
          <FooterHigherDivRight>
            <FooterHigherDivTitle>Lets Talk!</FooterHigherDivTitle>
            <FooterHigherDivDesc>
              We are always open to discuss your project, improve your online
              presence and help with your UX/UI design challenges.
            </FooterHigherDivDesc>
            <FooterSocialMediaIconsDiv>
              <SocialMediaIcons />
            </FooterSocialMediaIconsDiv>
          </FooterHigherDivRight>
        </FooterHigherDivLeft>
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
      </FooterHigherDiv>
      <FooterLowerDiv>
        <FooterLowerCopyright>
          Copyright 2022, Finsweet.com
        </FooterLowerCopyright>

        <FooterLowerList>
          <FooterLowerListItem>Home</FooterLowerListItem>
          <FooterLowerListItem>About Us</FooterLowerListItem>
          <FooterLowerListItem>Features</FooterLowerListItem>
          <FooterLowerListItem>Pricing</FooterLowerListItem>
          <FooterLowerListItem>FAQ</FooterLowerListItem>
          <FooterLowerListItem>Blog</FooterLowerListItem>
        </FooterLowerList>
      </FooterLowerDiv>
    </Footer>
  );
};

export default Footer;
