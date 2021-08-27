import React from "react";
import {
    Container,
    Wrapper,
    Title,
    Period,
    Month,
    Year,
  } from "./elements";

function Subscription() {
    return (
      <>
        <Container>
        <Wrapper>
            <Title>Without Extra Charge Choose Your Best Plan</Title>
              <Period>
                <Month> Monthly </Month>
                <Year> Yearly </Year>
              </Period>
        </Wrapper>
      </Container>
      </>
    );
  }
  
  export default Subscription;