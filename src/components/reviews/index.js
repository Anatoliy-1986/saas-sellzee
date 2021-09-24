import React from "react";
import {Container} from "../shared";
import {
  Judgment,
  Header,
  Title,
  SubTitle,
  Comment,
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
  Star,
  Rating,
} from "./elements";

function Reviews() {
  return (
    <>
      <Container>
        <Judgment direction="column" padding="106px 0 121px" align="none">
          <Header>
            <Title>User’s Review</Title>
            <SubTitle>
              Collaborate over projects with your team and clients optimised for
              mobile and tablet don't let slow
            </SubTitle>
          </Header>
          <Comment margin="69px 0 0">
            <Review>
              <Heading>What People Say About Us</Heading>
              <Textreview>
              <Requisites>
                <Name>Davit millar</Name>
                <Post>CEO, PParkivew int, Ltd</Post>
              </Requisites>
              <Rating>
                {Array.from({ length: 5 }, (__, i) => (
                  <div key={i}>
                  <Star secondary={i + 1 <= 4} />
                  </div>
                ))}
              </Rating>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                nisl, tincidunt commodo sit. Et, purus lectus odio cursus
                placerat leo, non etiam. Neque at leo risus orci,{" "}
              </Text>
            </Textreview>
              <Slider>
                <Sliderleft> &gt;</Sliderleft>
                <Sliderright> &gt; </Sliderright>
              </Slider>
            </Review>
            <User></User>
          </Comment>
        </Judgment>
      </Container>
    </>
  );
}

export default Reviews;
