import React from "react";
import pad from "./pad.png";
import logo from "./logo.png";
import {
  Container,
  Wrapper,
  Header,
  Menu,
  Button,
  ViewBlock,
  Title,
  SubTitle,
  Description,
  Information,
  Navigetion,
  Link,
  Line,
  Image,
} from "./elements";

function About() {
  return (
    <>
      <Container>
        <Wrapper>
          <Header>
            <img src={logo} alt="logo" height="43px" />
            <Menu align="center" justify="space-between">
              <Link href="#">Home</Link>
              <Link href="#">About</Link>
              <Link href="#">Contact</Link>
              <Link href="#">Testimonial</Link>
              <Link href="#" secondary>
                Priceing
              </Link>
            </Menu>
            <Button>Get Started</Button>
          </Header>
          <ViewBlock>
            <Information>
              <Title>Inspiration Technology.</Title>
              <SubTitle>
                <strong>Runs faster.</strong> Costs less and never breaks.
              </SubTitle>
              <Line></Line>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                sapien lectus sit tristique rhoncus, nisi, malesuada. Tellus
                consequat
              </Description>
              <Navigetion>
                <Button>Get Started</Button>
                <Button secondary>Free Trail</Button>
              </Navigetion>
            </Information>
            <Image src={pad} alt="pad" />
          </ViewBlock>
        </Wrapper>
      </Container>
    </>
  );
}

export default About;
