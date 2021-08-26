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
import Line from "./images/Line.png";
import Plus from "./images/Plus.png";
import John from "./images/John.png";
import Ann from "./images/Ann.png";
import Mia from "./images/Mia.png";
import Mike from "./images/Mike.png";
import Monika from "./images/Monika.png";
import {
  Сontainer,
  Wrapper,
  Header,
  Button,
  Flex,
  Link,
  ViewBlock,
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
    money: 0,
  },
  {
    id: 2,
    name: "Monika",
    avatar: <Img src={Monika} alt="Monika" />,
    money: 0,
  },
  {
    id: 3,
    name: "Mia",
    avatar: <Img src={Mia} alt="Mia" />,
    money: 0,
  },
  {
    id: 4,
    name: "Ann",
    avatar: <Img src={Ann} alt="Ann" />,
    money: 0,
  },
  {
    id: 5,
    name: "Mike",
    avatar: <Img src={Mike} alt="Mike" />,
    money: 0,
  },
];

const achievements = [
  {
    value: 50,
    lable: "Happy Clients",
  },
  {
    value: 550,
    lable: "Projects Completed",
  },
  {
    value: 250,
    lable: "Dedicated Members",
  },
  {
    value: 30,
    lable: "Awards Won",
  },
];

function Platforms() {
  const [client, setClient] = useState([]);

  const [editId, setEditId] = useState(null);

  function getValue(prop) {
    return client.reduce(
      (res, item) => (item.id === editId ? item[prop] : res),
      ""
    );
  }

  function changeItem(prop, event) {
    setClient(
      client.map((item) =>
        item.id === editId ? { ...item, [prop]: event.target.value } : item
      )
    );
  }

  const AddClients = () => {
    if (client.length > 4) {
      const rand = Math.floor(Math.random() * clients.length);
      setClient([...client, clients[rand]]);
      const removeButton = document.querySelector(AddClient);
      removeButton.style.display = "none";
    } else {
      const rand = Math.floor(Math.random() * clients.length);
      setClient([...client, clients[rand]]);
    }
  };

  return (
    <>
      <Сontainer>
        <Wrapper>
          <Header>
            {partners.map((item, index) => (
              <Link href="#" key={index}>
                <Partner src={item} alt={item} />
              </Link>
            ))}
          </Header>
          <ViewBlock>
            <Amenities>
              <Image src={buy} alt="buy" />
              <PercentageLimit>
                <ExternalCircle>
                <ActiveBorder>
                  <Circle>
                    <Prec>
                      0%
                    </Prec>
                  </Circle>
                </ActiveBorder>
                </ExternalCircle>
                <Legend>Legend</Legend><Percent>+25%</Percent>
              </PercentageLimit>
              <Transaction>
                <TitleTransaction>New transaction</TitleTransaction>
                <ClientsList>
                  {client.map((item, id) => (
                    <Customer key={item.id} onClick={() => setEditId(item.id)}>
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
                    placeholder="0 $"
                    onChange={(event) => changeItem("money", event)}
                    value={getValue("money")}
                  />
                  <Transfer onClick={() => setEditId(null)}>
                    {" "}
                    Send the transfer &gt;
                  </Transfer>
                </SendMoney>
              </Transaction>
            </Amenities>

            <Information>
              <Title>Lorem ipsum dolor sit ame</Title>
              <SubTitle>
                <strong>Simple Solutions for Complex Connections</strong>
              </SubTitle>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                donec gravida feugiat neque, ipsum faucibus. Pharetra vel
                suspendisse mi odio a velit feugiat sapien.
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
          </ViewBlock>
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
      </Сontainer>
    </>
  );
}

export default Platforms;