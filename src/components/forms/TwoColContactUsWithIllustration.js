import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import EmailIllustrationSrc from "images/email-illustration.svg";
import 'react-phone-number-input/style.css'
import { Element } from "react-scroll";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col`
const Input = tw.input`border-2 px-5 py-3 rounded focus:outline-none font-medium transition duration-300 hocus:border-primary-500 my-2 max-w-lg`;
const TextArea = tw.textarea`border-2 px-5 py-3 rounded focus:outline-none font-medium transition duration-300 hocus:border-primary-500 my-2 max-w-lg h-24`;

const SubmitButton = tw.button`appearance-none px-5 py-3 text-lg max-w-lg font-bold rounded text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300 inline-block bg-primary-500 mt-6 lg:mt-0`;

export default ({
  subheading = "Contact Us",
  heading = <>Feel free to <span tw="text-primary-500">get in touch</span><wbr /> with us.</>,
  description = "Choose us as your visionary partner for transformative digital excellence. Let's embark on an extraordinary journey together.",
  submitButtonText = "Let's Connect!",
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5rkwweb', 'template_6go5lp4', form.current, {
        publicKey: 'vPRUPsFN89edqLV1Y',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <Element name="contact-us">
      <Container>
        <TwoColumn>
          <ImageColumn>
            <Image imageSrc={EmailIllustrationSrc} />
          </ImageColumn>
          <TextColumn textOnLeft={textOnLeft}>
            <TextContent>
              {subheading && <Subheading>{subheading}</Subheading>}
              <Heading>{heading}</Heading>
              <Description>{description}</Description>
              <Form ref={form} onSubmit={handleSubmit}>
                <Input type="text" name="name" placeholder="Your Name" />
                <Input type="email" name="email" placeholder="Your Email Address" />
                <Input type="text" name="phone" placeholder="Your Phone Number" />
                <TextArea type="text" name="description" placeholder="Your Message" />
                <SubmitButton>{submitButtonText}</SubmitButton>
              </Form>
            </TextContent>
          </TextColumn>
        </TwoColumn>
      </Container>
    </Element>
  );
};
