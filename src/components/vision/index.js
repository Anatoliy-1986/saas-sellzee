import React from "react";

import Lamp from "./images/Lamp.png";
import Blog from "./images/Blog.png";
import { Div, Button, Flex, Link, Paragraph, Line, Image } from "./elements";

function Vision() {
  return (
    <>
      <Div>
        <Flex width="1134px" margin=" 0 auto">
          <Flex direction="column">
            <Paragraph>Lorem ipsum dolor sit ame</Paragraph>
            <Paragraph size="17px">Lorem ipsum dolor sit ame</Paragraph>
            <Paragraph size="17px">Lorem ipsum dolor sit ame</Paragraph>
          </Flex>
          <Link as="a" href="#" secondary>
            <Image src={Lamp} alt="Lamp" />
            vvbnvnn
          </Link>
          <Link as="a" href="#">
            <Image src={Blog} alt="Blog" />
          </Link>
          <Link as="a" href="#"></Link>
          <Link as="a" href="#"></Link>
          <Link as="a" href="#"></Link>
          <Link as="a" href="#"></Link>
        </Flex>
      </Div>
    </>
  );
}
export default Vision;
