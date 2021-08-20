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
import Legend from "./images/Legend.png";
import Line from "./images/Line.png";
import Plus from "./images/Plus.png";
import Clients from "./images/Clients.png";
import Members from "./images/Members.png";
import Won from "./images/Won.png";
import Completed from "./images/Completed.png";
import John from "./images/John.png";
import Ann from "./images/Ann.png";
import Mia from "./images/Mia.png";
import Mike from "./images/Mike.png";
import Monika from "./images/Monika.png";
import {
  Сontainer,
  Button,
  Flex,
  Link,
  Paragraph,
  Img,
  Image,
  Transaction,
  Transfer,
  EnterMoney,
} from "./elements";

const partners = [amazon, fedex, fedx, google, Microsoft, ola, walmart];

const clients = [
  {
    id: 1,
    name: "John",
    avatar: <Img src={John} alt="John" />,
  },
  {
    id: 2,
    name: "Monika",
    avatar: <Img src={Monika} alt="Monika" />,
  },
  {
    id: 3,
    name: "Mia",
    avatar: <Img src={Mia} alt="Mia" />,
  },
  {
    id: 4,
    name: "Ann",
    avatar: <Img src={Ann} alt="Ann" />,
  },
  {
    id: 5,
    name: "Mike",
    avatar: <Img src={Mike} alt="Mike" />,
  },
];

function Platforms() {
  const [client, setClient] = useState([]);

  /*const remItem = (index) => () => {
    setList([...list.slice(0, index), ...list.slice(index + 1)]);
  };*/
  //onClick={remItem(index)}

  const handleChangeString = () => {
    const rand = Math.floor(Math.random() * clients.length);
    setClient([...client, clients[rand]]);
    if (client.length > 6) {
      return client;
    }
  };

  return (
    <>
      <Сontainer>
        <Flex width="1134px" direction="column" margin=" 0 auto">
          
            <Flex  justify="space-around" margin="121px 0 0" content="space-between" wrap="wrap">
              {partners.map((item, index) => (
                <Link as="a" href="#" key={index}>
                  <Img src={item} alt={item} />
                </Link>
              ))}
            
          </Flex>

          <Flex margin="107px 0 246px" justify="space-between">
            <Flex>
              <Image src={buy} alt="buy" secondary top="-26px" left="-168px" />
              <Image
                src={Legend}
                alt="Legend"
                secondary
                top="159px"
                left="227px"
              />
              <Transaction justify="flex-end" secondary top="225px" left="85px">
                {client.map((item, id) => (
                  <div key={id}>
                    <div>{item.avatar}</div>
                    <div>{item.name}</div>
                  </div>
                ))}
                <div as="a" href="#" onClick={handleChangeString}>
                  <div>
                    <Image src={Plus} alt="Plus" />
                  </div>
                  <div>Add New</div>
                </div>
                <form>
                  <EnterMoney /> <Transfer> Send the transfer &gt;</Transfer>
                </form>
              </Transaction>
            </Flex>
            <Flex direction="column" margin="0" width="546px">
              <Paragraph size="17px">Lorem ipsum dolor sit ame</Paragraph>
              <Paragraph size="49px" secondary margin="12px 0 0" height="120%">
                <strong>Simple Solutions for Complex Connections</strong>
              </Paragraph>
              <Paragraph size="16px" secondary margin="25px 0 0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                donec gravida feugiat neque, ipsum faucibus. Pharetra vel
                suspendisse mi odio a velit feugiat sapien.
              </Paragraph>
              <Flex align="center" margin="25px 0 0">
                <Flex
                  justify="space-between"
                  align="center"
                  margin="0 35px 0 0"
                >
                  <Img src={check} alt="check" padding="0" />
                  <Paragraph size="17px" secondary margin="0 0 0 35px">
                    High Analysis
                  </Paragraph>
                </Flex>
                <Flex justify="space-between" align="center">
                  <Img
                    src={check}
                    alt="check"
                    padding="0"
                    margin="0 35px 0 0"
                  />
                  <Paragraph size="17px" secondary margin="0 0 0 35px">
                    Certified Institute
                  </Paragraph>
                </Flex>
              </Flex>
              <Flex justify="space-between" margin="35px 0 0">
                <Button>Learn More</Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex width="100%" backimage={Line}>
          <Flex width="1134px" margin=" 0 auto" justify="space-between">
            <Img src={Clients} alt="Clients" />
            <Img src={Members} alt="Members" />
            <Img src={Won} alt="Won" />
            <Img src={Completed} alt="Completed" />
          </Flex>
        </Flex>
      </Сontainer>
    </>
  );
}

export default Platforms;
