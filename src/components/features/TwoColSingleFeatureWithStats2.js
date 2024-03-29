import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import StatsIllustrationSrc from "images/stats-illustration.svg";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
import { Element } from "react-scroll";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto relative`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Statistics = tw.div`flex flex-col items-center sm:block text-center md:text-left mt-4`;
const Statistic = tw.div`text-left sm:inline-block sm:mr-12 last:mr-0 mt-4`;
const Value = tw.div`font-bold text-lg sm:text-xl lg:text-2xl text-secondary-500 tracking-wide`;
const Key = tw.div`font-medium text-primary-700`;

const DecoratorBlob = styled(SvgDotPattern)(props => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`
]);
// Zorand's vision is to be the  digital dawn, illuminating the  path for businesses to excel ethically and innovatively in the digital landscape. We are unwavering in our commitment to setting new industry standards and delivering precise results. As a game-changing force in digital marketing, we catalyze unprecedented growth and success for our clients.

export default ({
  subheading = "Our Mission",
  heading = (
    <>

      We are <wbr /> <span tw="text-primary-500">COMMITTED.</span>
    </>
  ),
  description = "Zorand Marketing is a digital marketing agency that offers services such as paid ad campaigns, SEO copywriting, social media and email marketing, and more. Our goal is to help businesses establish a robust online presence and achieve optimal return on investment through data-driven strategies. We invest in market analysis, competitor research, and consumer behavior insights to create compelling ad campaigns and SEO content that resonates with the target audience. We cater to local and global needs and are enthusiastic about working with you to achieve your goals.",
  primaryButtonUrl = "https://timerse.com",
  imageSrc = StatsIllustrationSrc,
  imageCss = null,
  imageContainerCss = null,
  imageDecoratorBlob = false,
  imageDecoratorBlobCss = null,
  imageInsideDiv = true,
  statistics = null,
  textOnLeft = false
}) => {
  const defaultStatistics = [
    {
      key: "Clients",
      value: "50+"
    },
    {
      key: "Projects (in the last 4 years)",
      value: "80+"
    }
  ];

  if (!statistics) statistics = defaultStatistics;

  return (
    <Element name="about">
      <Container>
        <TwoColumn css={!imageInsideDiv && tw`md:items-center`}>
          <ImageColumn css={imageContainerCss}>
            {imageInsideDiv ? <Image imageSrc={imageSrc} css={imageCss} /> : <img src={imageSrc} css={imageCss} alt="" />}
            {imageDecoratorBlob && <DecoratorBlob css={imageDecoratorBlobCss} />}
          </ImageColumn>
          <TextColumn textOnLeft={textOnLeft}>
            <TextContent>
              {subheading && <Subheading>{subheading}</Subheading>}
              <Heading>{heading}</Heading>
              <Description>{description}</Description>
              <Statistics>
                {statistics.map((statistic, index) => (
                  <Statistic key={index}>
                    <Value>{statistic.value}</Value>
                    <Key>{statistic.key}</Key>
                  </Statistic>
                ))}
              </Statistics>
            </TextContent>
          </TextColumn>
        </TwoColumn>
      </Container>
    </Element>
  );
};
