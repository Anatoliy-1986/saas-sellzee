import React from "react";
import Check from "./images/Check.png";
import Heart from "./images/Heart.png";
import Fire from "./images/Fire.png";
import {
  Container,
  Wrapper,
  Title,
  Period,
  Month,
  Year,
  Standard,
  Headline,
  Price,
  Pack,
  Equipment,
  Description,
  Instal,
  ViewBlock,
  Characteristic,
  Iconrate,
} from "./elements";

const packs = [
  {
    id: 1,
    type: "Standard",
    price: "$29",
    pack: "monthly pack",
    href: "https://yandex.ru/",
    icon: <Iconrate src={Fire} alt="Fire" />,
  },
  {
    id: 2,
    type: "Standard",
    price: "$39",
    pack: "monthly pack",
    href: "https://www.google.ru/",
    icon: <Iconrate src={Heart} alt="Heart" />,
  },
];

const specifications = [
  "256 GB SSD STORE",
  "FULL UI KIT DOWNLOAD",
  "PUBLIC API",
  "FULL UI PACK DOWNLOAD",
  "24/7 SUPPORT",
];

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
          <ViewBlock>
            {packs.map((item, id) => (
              <Standard key={item.id}>
                <>{item.icon}</>
                <Headline>{item.type}</Headline>
                <Price>{item.price}</Price>
                <Pack>{item.pack}</Pack>
                <Characteristic>
                  {specifications.map((item, index) => (
                    <Equipment key={index}>
                      <img src={Check} alt="check" />
                      <Description>{item}</Description>
                    </Equipment>
                  ))}
                </Characteristic>
                <form action={item.href}>
                  <Instal>Install Pack</Instal>
                </form>
              </Standard>
            ))}
          </ViewBlock>
        </Wrapper>
      </Container>
    </>
  );
}

export default Subscription;
