import React from "react";
import { useState } from "react";
import { Container } from "../shared";
import { useRef } from "react";
import {
  Covering,
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

  const inputRef = useRef("");

  const inputElement = inputRef.current;

  function sendEmail() {
    setModalActive(false);
    inputElement.value = "";
  }

  return (
    <Container>
      <Covering>
        <Title>NEWSLETTER</Title>
        <SubTitle>
          We Offer Every Month 20% Off For Our All Subscribers
        </SubTitle>
        <Subscribe>
          <Email type="text" placeholder="Email Address" ref={inputRef} />
          <Button onClick={() => setModalActive(true)}> Subscribe </Button>
        </Subscribe>
      </Covering>

      <ModalConteiner
        opacity={modalActive ? "1" : "0"}
        pointer={modalActive ? "all" : "none"}
        onClick={sendEmail}
      >
        <ModalContent
          transform={modalActive ? "scale(1)" : "scale(0.5)"}
          onClick={(e) => e.stopPropagation()}
        >
          {inputElement.value}
        </ModalContent>
      </ModalConteiner>
    </Container>
  );
}
export default Newsletter;
