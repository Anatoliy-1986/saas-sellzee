import React from "react";
import {
  Container,
  Wrapper,
  Title,
  SubTitle,
  Subscribe,
  Email,
  Button,
} from "./elements";

function Newsletter() {
  return (
    <>
      <Container>
        <Wrapper>
          <Title>NEWSLETTER</Title>
          <SubTitle>
            We Offer Every Month 20% Off For Our All Subscribers
          </SubTitle>
          <Subscribe>
            <Email type="text" placeholder="Email Address" />
            <Button> Subscribe </Button>
          </Subscribe>
        </Wrapper>
      </Container>
    </>
  );
}

export default Newsletter;
