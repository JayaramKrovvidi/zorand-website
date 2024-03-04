import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";
import { ReactComponent as PlusIcon } from "feather-icons/dist/icons/plus.svg";
import { ReactComponent as MinusIcon } from "feather-icons/dist/icons/minus.svg";
import { Element } from "react-scroll";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const TwoColumn = tw.div`flex`;
const Column = tw.div``;

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  props.imageContain ? tw`bg-contain bg-no-repeat` : tw`bg-cover`,
  props.imageShadow ? tw`shadow` : tw`shadow-none`,
  tw`hidden lg:block rounded h-144 bg-center`
]);

const FAQContent = tw.div`lg:ml-12`;
const Heading = tw(SectionHeading)`lg:text-left`;
const Description = tw.p`max-w-xl text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-4 text-secondary-100`;

const FAQSContainer = tw.dl`mt-12`;
const FAQ = tw.div`cursor-pointer mt-8 select-none border lg:border-0 px-8 py-4 lg:p-0 rounded-lg lg:rounded-none`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = styled.span`
  ${tw`ml-2 bg-primary-500 text-gray-100 p-1 rounded-full group-hover:bg-primary-700 group-hover:text-gray-200 transition duration-300`}
  svg {
    ${tw`w-4 h-4`}
  }
`;
const Answer = motion(tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`);

export default ({
  heading = "Questions",
  description = "The \"What, Why, and Where\" questions offer a brief snapshot of Zorand Marketing. They outline our services, emphasize our unique advantages, and define our reach. This trio provides a comprehensive introduction, ensuring potential clients understand our offerings, edge, and geographical scope concisely.",
  imageSrc = "https://images.unsplash.com/photo-1579427421635-a0015b804b2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
  imageContain = false,
  imageShadow = true,
  faqs = null
}) => {
  /*
   * You can modify FAQs either by modifying the below defaultFaqs array or by passing a custom array of FAQs using
   * the faqs prop
   */
  const defaultFaqs = [
    {
      question: "What does Zorand Marketing do?",
      answer: "Zorand Marketing is a digital marketing agency that specializes in helping businesses thrive in today's digital landscape. With a range of services including Paid ad campaign which runs in google and meta, SEO copywriting, social media marketing, email marketing, and more, we empower businesses to establish and enhance their online presence."
    },
    {
      question: "Why to choose us?",
      answer: "In today's competitive digital age, having a strong online presence is essential for businesses to succeed. Zorand Marketing understands this necessity and assists businesses in reaching their target audience effectively. We utilize data-driven strategies to optimize marketing efforts, ensuring that our clients achieve the best possible return on their investment."
    },
    {
      question: "Where we help?",
      answer: "Our services are not limited by geographical boundaries. Whether a business is seeking to increase local visibility or expand its reach to a global audience, Zorand Marketing customizes strategies to suit their unique needs and goals. Our digital nature enables us to serve clients worldwide, leveraging insights from market analysis, competitor research, and consumer behaviour to craft compelling Ad campaign and SEO content that resonates with the target audience and drives desired outcomes."
    }
  ];

  if (!faqs || faqs.length === 0) faqs = defaultFaqs;

  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = questionIndex => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  return (
    <Element name="why-us">
      <Container>
        <Content>
          <TwoColumn>
            <Column tw="hidden lg:block w-5/12 shrink-0">
              <Image imageContain={imageContain} imageShadow={imageShadow} imageSrc={imageSrc} />
            </Column>
            <Column>
              <FAQContent>
                <Heading>{heading}</Heading>
                <Description>{description}</Description>
                <FAQSContainer>
                  {faqs.map((faq, index) => (
                    <FAQ
                      key={index}
                      onClick={() => {
                        toggleQuestion(index);
                      }}
                      className="group"
                    >
                      <Question>
                        <QuestionText>{faq.question}</QuestionText>
                        <QuestionToggleIcon>
                          {activeQuestionIndex === index ? <MinusIcon /> : <PlusIcon />}
                        </QuestionToggleIcon>
                      </Question>
                      <Answer
                        variants={{
                          open: { opacity: 1, height: "auto", marginTop: "16px" },
                          collapsed: { opacity: 0, height: 0, marginTop: "0px" }
                        }}
                        initial="collapsed"
                        animate={activeQuestionIndex === index ? "open" : "collapsed"}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        {faq.answer}
                      </Answer>
                    </FAQ>
                  ))}
                </FAQSContainer>
              </FAQContent>
            </Column>
          </TwoColumn>
        </Content>
      </Container>
    </Element>
  );
};
