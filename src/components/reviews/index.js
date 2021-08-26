import React from "react";
import {
  Container,
  Wrapper,
  Header,
  Title,
  SubTitle,
  ViewBlock,
  Review,
  User,
  Heading,
  Textreview,
  Requisites,
  Name,
  Post,
  Text,
  Sliderleft,
  Sliderright,
  Slider,
} from "./elements";

function Reviews() {
  return (
    <>
      <Container>
        <Wrapper>
          <Header>
            <Title>User’s Review</Title>
            <SubTitle>
              Collaborate over projects with your team and clients optimised for
              mobile and tablet don't let slow
            </SubTitle>
          </Header>
          <ViewBlock>
            <Review>
              <Heading>What People Say About Us</Heading>
              <Slider>
                <Sliderleft>  &gt;</Sliderleft>
                <Sliderright> &gt; </Sliderright>
              </Slider>
            </Review>
            <User></User>
            <Textreview>
              <Requisites>
                <Name>Davit millar</Name>
                <Post>CEO, PParkivew int, Ltd</Post>
              </Requisites>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                nisl, tincidunt commodo sit. Et, purus lectus odio cursus
                placerat leo, non etiam. Neque at leo risus orci,{" "}
              </Text>
            </Textreview>
          </ViewBlock>
        </Wrapper>
      </Container>
    </>
  );
}

export default Reviews;
