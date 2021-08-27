import React from "react";
import logo from "./images/logo.png";
import youtube from "./images/youtube.png";
import twitter from "./images/twitter.png";
import instagram from "./images/instagram.png";
import facebook from "./images/facebook.png";
import {
  Container,
  Wrapper,
  Social,
  Menu,
  Connection,
  ViewBlock,
  Title,
  Link,
  Icons,
} from "./elements";

const partners = [
  {
    href: "#",
    icon: <img src={youtube} alt="youtube" />,
  },
  {
    href: "#",
    icon: <img src={twitter} alt="twitter" />,
  },
  {
    href: "#",
    icon: <img src={instagram} alt="instagram" />,
  },
  {
    href: "#",
    icon: <img src={facebook} alt="facebook" />,
  },
];

function Footer() {
  return (
    <>
      <Container>
        <Wrapper>
          <Social>
            <img src={logo} alt="logo" height="43px" />
            <Icons>
              {partners.map((item, index) => (
                <Connection href={item.href} key={index}>
                  {item.icon}
                </Connection>
              ))}
            </Icons>
          </Social>
          <Menu>
            <Title>SHORT LINKS</Title>
            <Link href="#">Home</Link>
            <Link href="#">Services</Link>
            <Link href="#">Screenshots</Link>
            <Link href="#">contact</Link>
          </Menu>
          <Menu>
            <Title>HELP LINK</Title>
            <Link href="#">How to download</Link>
            <Link href="#">How it work</Link>
            <Link href="#">Video tutorial</Link>
            <Link href="#">FAQ</Link>
          </Menu>
          <Menu>
            <Title>SHORT LINKS</Title>
            <Link href="#">Google Play Store</Link>
            <Link href="#">Apple App Store</Link>
            <Link href="#">Download Directly</Link>
          </Menu>
        </Wrapper>
        <ViewBlock></ViewBlock>
      </Container>
    </>
  );
}

export default Footer;
