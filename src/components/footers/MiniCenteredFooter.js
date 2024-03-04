import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {Container as ContainerBase } from "components/misc/Layouts.js"
import logo from "../../images/logo-light.png";
import { ReactComponent as EmailIcon } from "../../images/email-newsletter-icon.svg";
import { ReactComponent as LinkedInIcon } from "../../images/linkedin-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { Link } from "react-scroll";


const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-40`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`
const ScrollToLink = tw(Link)`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`
export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} />
          </LogoContainer>
          <LinksContainer>
            <ScrollToLink to="home" smooth={true} duration={1200}>Home</ScrollToLink>
            <ScrollToLink to="about" smooth={true} duration={1100}>About Us</ScrollToLink>
            <ScrollToLink to="why-us" smooth={true} duration={900}>Why Us?</ScrollToLink>
            <ScrollToLink to="services" smooth={true} duration={700}>Services</ScrollToLink>
            <ScrollToLink to="contact-us" smooth={true} duration={500}>Contact Us</ScrollToLink>
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLink target="_blank" href="mailto:zorand.marketing@gmail.com">
              <EmailIcon />
            </SocialLink>
            <SocialLink target="_blank" href="https://www.linkedin.com/company/zorand-marketing-co">
              <LinkedInIcon />
            </SocialLink>
            <SocialLink target="_blank" href="https://twitter.com/ZorandMarketing">
              <TwitterIcon />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; Copyright 2023, Zorand Marketing LLP. All Rights Reserved.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
