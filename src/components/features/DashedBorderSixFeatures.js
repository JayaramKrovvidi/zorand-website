import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";

import defaultCardImage from "../../images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";
import ShieldIconImage from "../../images/shield-icon.svg";
import CustomizeIconImage from "../../images/customize-icon.svg";
import ReliableIconImage from "../../images/reliable-icon.svg";
import SimpleIconImage from "../../images/simple-icon.svg";
import { Element } from "react-scroll";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xl items-center px-4 py-10 border-2 border-dashed border-primary-500 rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-primary-500 text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-primary-500`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default () => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const cards = [
    {
      imageSrc: ShieldIconImage,
      title: "SEO and Web Development",
      description: "Boost your online success with our SEO and web development services. Our team creates user-friendly websites optimized for high search engine rankings. Our proven SEO strategies guarantee greater visibility and more organic traffic. Let's work together to enhance your online presence and drive business growth!"
    },
    {
      imageSrc: CustomizeIconImage,
      title: "Google Ads Mastery",
      description: "Elevate your Google Ads performance with our proven strategy. Our experts craft captivating ads that enhance conversions and amplify ROI. Leverage our expertise and Google's network for optimal business success"
    },
    {
      imageSrc: ReliableIconImage,
      title: "Social Medial Marketing",
      description: "Our Social Media Marketing experts are here to help you revolutionize your online presence! With our cutting-edge strategies, we can build brand awareness and foster customer engagement that genuinely resonates with your audience. Let's work together to harness the power of social media and transform your followers into loyal customers!"
    },
    {
      imageSrc: SimpleIconImage,
      title: "Brand Solution & Strategy",
      description: "Elevate your brand with our robust solutions and enlightening market research. Our expertise lies in brand strategy supported by in-depth case study analysis and market intelligence. Our approach guarantees an individualized brand identity that connects with your audience, fuelling expansion and cultivating devotion through informed choices."
    }
  ];

  return (
    <Element name="services">
      <Container>
        <ThreeColumnContainer>
          <Heading>Our Professional <span tw="text-primary-500">Services</span></Heading>
          {cards.map((card, i) => (
            <Column key={i}>
              <Card>
                <span className="imageContainer">
                  <img src={card.imageSrc || defaultCardImage} alt="" />
                </span>
                <span className="textContainer">
                  <span className="title">{card.title || "Fully Secure"}</span>
                  <p className="description">
                    {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel."}
                  </p>
                </span>
              </Card>
            </Column>
          ))}
        </ThreeColumnContainer>
        <DecoratorBlob />
      </Container>
    </Element>
  );
};
