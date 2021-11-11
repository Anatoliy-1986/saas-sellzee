import React from "react";
import { useState } from "react";
import buy from "./images/buy.png";
import amazon from "./images/amazon.png";
import fedex from "./images/fedex.png";
import fedx from "./images/fedx.png";
import google from "./images/google.png";
import Microsoft from "./images/Microsoft.png";
import ola from "./images/ola.png";
import walmart from "./images/walmart.png";
import check from "./images/check.png";
import Plus from "./images/Plus.png";
import John from "./images/John.png";
import Ann from "./images/Ann.png";
import Mia from "./images/Mia.png";
import Mike from "./images/Mike.png";
import Monika from "./images/Monika.png";
import {Container, Wrapper} from "../shared";
import {
  Header,
  Button,
  Link,
  Services,
  Title,
  SubTitle,
  Description,
  Information,
  Qualifications,
  Competence,
  Skill,
  Learn,
  Partner,
  Img,
  Image,
  Transaction,
  Transfer,
  EnterMoney,
  AddName,
  AddClient,
  AddImg,
  Customer,
  SendMoney,
  TitleTransaction,
  AddMoney,
  ClientsList,
  Amenities,
  PercentageLimit,
  TrackRecord,
  Track,
  Сompletion,
  Figure,
  ActiveBorder,
  Circle,
  Prec,
  ExternalCircle,
  Legend,
  Percent,
  LineBefore,
} from "./elements";

const partners = [amazon, fedex, fedx, google, Microsoft, ola, walmart];

const clients = [
  {
    id: 1,
    name: "John",
    avatar: <Img src={John} alt="John" />,
    money: "0",
    shadow: "none",
  },
  {
    id: 2,
    name: "Monika",
    avatar: <Img src={Monika} alt="Monika" />,
    money: "0",
    shadow: "none",
  },
  {
    id: 3,
    name: "Mia",
    avatar: <Img src={Mia} alt="Mia" />,
    money: "0",
    shadow: "none",
  },
  {
    id: 4,
    name: "Ann",
    avatar: <Img src={Ann} alt="Ann" />,
    money: "0",
    shadow: "none",
  },
  {
    id: 5,
    name: "Mike",
    avatar: <Img src={Mike} alt="Mike" />,
    money: "0",
    shadow: "none",
  },
];

const achievements = [
  {
    value: "50+",
    lable: "Happy Clients",
  },
  {
    value: "550+",
    lable: "Projects Completed",
  },
  {
    value: 250,
    lable: "Dedicated Members",
  },
  {
    value: "30+",
    lable: "Awards Won",
  },
];

function Platforms() {
  const [client, setClient] = useState([]);

  const [editId, setEditId] = useState(null);

  const [number, setNumber] = React.useState(0);

  const chooseClient = (currentIndex) => (event) => {
    const result = client.map((item) =>
      item.id === currentIndex
        ? {
            ...item,
            shadow: "inset 2px 2px 5px #000000, 1px 1px 5px #000000",
          }
        : { ...item, shadow: "none" }
    );
    setClient(result);

    setEditId(currentIndex);
  };

  function sendMoney() {
    const result = client.map((item) => {
      return {
        ...item,
        shadow: "none",
      };
    });
    setClient(result);

    setEditId(null);
  };

  function getValue(prop) {
    return client.reduce(
      (res, item) => (item.id === editId ? item[prop] : res),
      ""
    );
  }

  function changeItem(prop, event) {
    if (event.target.value <= 300 && event.target.value >= 0) {
      setClient(
        client.map((item) =>
          item.id === editId ? { ...item, [prop]: event.target.value } : item
        )
      );
    }
  };

  const AddClients = () => {
    if (client.length >= 4) {
      const removeButton = document.querySelector(AddClient);
      removeButton.style.display = "none";
    } else {
      setNumber((number + 1) % clients.length);
    }
    setClient([...client, clients[number]]);
  };

  return (
    <Container>
      <Wrapper direction="column" justify="none" align="none">
        <Header>
          {partners.map((item, index) => (
            <Link href="#" key={index}>
              <Partner src={item} alt={item} />
            </Link>
          ))}
        </Header>
        <Services margin="107px 0 246px">
          <Amenities>
            <Image src={buy} alt="buy" />
            <PercentageLimit>
              <ExternalCircle>
                <ActiveBorder>
                  <Circle>
                    <Prec>0%</Prec>
                  </Circle>
                </ActiveBorder>
              </ExternalCircle>
              <Legend>Legend</Legend>
              <Percent>+25%</Percent>
            </PercentageLimit>
            <Transaction>
              <TitleTransaction>New transaction</TitleTransaction>
              <ClientsList>
                {client.map((item, id) => (
                  <Customer
                    key={item.id}
                    shadow={item.shadow}
                    onClick={chooseClient(item.id)}
                  >
                    <AddMoney>{item.money}</AddMoney>
                    <AddImg>{item.avatar}</AddImg>
                    <AddName>{item.name}</AddName>
                  </Customer>
                ))}
                <AddClient onClick={AddClients}>
                  <AddImg>
                    <img src={Plus} alt="Plus" />
                  </AddImg>
                  <AddName>Add New</AddName>
                </AddClient>
              </ClientsList>
              <SendMoney>
                <EnterMoney
                  type="number"
                  data-min="1"
                  data-max="5"
                  placeholder="0 $"
                  onChange={(event) => changeItem("money", event)}
                  value={getValue("money")}
                />
                <Transfer onClick={sendMoney}>Send the transfer &gt;</Transfer>
              </SendMoney>
            </Transaction>
          </Amenities>

          <Information>
            <Title>Lorem ipsum dolor sit ame</Title>
            <SubTitle>
              <strong>Simple Solutions for Complex Connections</strong>
            </SubTitle>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec
              gravida feugiat neque, ipsum faucibus. Pharetra vel suspendisse mi
              odio a velit feugiat sapien.
            </Description>
            <Qualifications>
              <Competence>
                <Img src={check} alt="check" />
                <Skill>High Analysis</Skill>
              </Competence>
              <Competence>
                <Img src={check} alt="check" />
                <Skill>Certified Institute</Skill>
              </Competence>
            </Qualifications>
            <Learn>
              <Button>Learn More</Button>
            </Learn>
          </Information>
        </Services>
      </Wrapper>

      <LineBefore>
        <TrackRecord>
          {achievements.map((item, index) => (
            <Track key={index}>
              <Figure>{item.value}</Figure>
              <Сompletion>{item.lable}</Сompletion>
            </Track>
          ))}
        </TrackRecord>
      </LineBefore>
    </Container>
  );
}

export default Platforms;
