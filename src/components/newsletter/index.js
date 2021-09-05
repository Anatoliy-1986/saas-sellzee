import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  SubTitle,
  Subscribe,
  Email,
  Button,
  ModalConteiner,
  ModalContent,
} from "./elements";

function Newsletter() {
  const [modalActive, setModalActive] = useState(false);

  const [value, setValue] = useState();

  function enteryEmail(event) {
    setValue(event.target.value);
  }

  function sendEmail() {
    setModalActive(false);
    setValue("");
  }



  return (
    <Container>
      <Wrapper>
        <Title>NEWSLETTER</Title>
        <SubTitle>
          We Offer Every Month 20% Off For Our All Subscribers
        </SubTitle>
        <Subscribe>
          <Email
            type="text"
            onChange={enteryEmail}
            placeholder="Email Address"
            value={value}
          />
          <Button onClick={() => setModalActive(true)}> Subscribe </Button>
        </Subscribe>
      </Wrapper>

      <ModalConteiner
        opacity={modalActive ? "1" : "0"}
        pointer={modalActive ? "all" : "none"}
        onClick={sendEmail}
      >
        <ModalContent
          transform={modalActive ? "scale(1)" : "scale(0.5)"}
          onClick={(e) => e.stopPropagation()}
        >
          {value}
        </ModalContent>
      </ModalConteiner>
    </Container>
  );
}

export default Newsletter;
