import React from "react";

import Lamp from "./images/Lamp.png";
import Blog from "./images/Blog.png";
import Friendly from "./images/Friendly.png";
import Showcase from "./images/Showcase.png";
import Use from "./images/Use.png";
import { Container, Wrapper, ViewBlock, Discription, Label, Title, SubTitle } from "./elements";

const advantage = [
  {
    id: 1,
    icon: <img src={Lamp} alt="Lamp" />,
    label: "Creative Ideas",
    discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida ",
    background: "#4252CF",
    color: "#FFFFFF",
  },
  {
    id: 2,
    icon: <img src={Blog} alt="Blog" />,
    label: "Beautiful Blog",
    discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida ",
    background: "#FFFFFF",
    color: "#05000B",
  },
  {
    id: 3,
    icon: <img src={Friendly} alt="Friendly" />,
    label: "User Friendly",
    discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida ",
    background: "#FFFFFF",
    color: "#05000B",
  },
  {
    id: 4,
    icon: <img src={Showcase} alt="Showcase" />,
    label: "Perfect Showcase",
    discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida ",
    background: "#FFFFFF",
    color: "#05000B",
  },
  {
    id: 5,
    icon: <img src={Use} alt="Use" />,
    label: "Easy to Use",
    discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida ",
    background: "#FFFFFF",
    color: "#05000B",
  },
];


function Vision() {
  return (
    <>
      <Container>
      
        <Wrapper width="1134px" margin=" 0 auto">
          <ViewBlock justify="stretch" padding="0" border="none">
            <Title>Your Vision, Our Future.</Title>
            <SubTitle>Committed to People, Committed </SubTitle>
            <Discription margin="20px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Discription>
          </ViewBlock>

          {advantage.map((item, id) => (
              <ViewBlock key={id} background={item.background} color={item.color}>
                <div>{item.icon}</div>
                <Label>{item.label}</Label>
                <Discription>{item.discription}</Discription>
              </ViewBlock>
            ))}

        </Wrapper>
      </Container>
    </>
  );
}
export default Vision;
