import styled from "styled-components";
import Polygon from "./images/Polygon.png";
import { device } from "../../device";
import {Wrapper} from "../shared";

export const Package = styled(Wrapper)`
  @media ${device.tablet} {
    padding: 63px 15px 50px;
  }
`;

export const Title = styled.div`
  max-width: 451px;
  font-weight: bold;
  font-size: 31px;
  line-height: 160%;
  text-align: center;
`;

export const Period = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 350px;
  background: #ffffff;
  border-radius: 10px;
  padding: 15px 10px;
  margin-top: 25px;
  @media ${device.tablet} {

  }
`;

export const Month = styled.button`
  width: 148px;
  height: 56px;
  background: #ff5a05;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  color: #ffffff;
  font-size: 20px;
  line-height: 160%;
`;

export const Year = styled.button`
  width: 129px;
  height: 56px;
  background: rgba(255, 90, 5, 0.1);
  border-radius: 10px;
  border: none;
  cursor: pointer;
  color: #ff5a05;
  font-size: 20px;
`;

export const Complex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 940px;
  position: absolute;
  left: 97px;
  top: 315px;
  box-sizing: border-box;
  margin: 0 auto;
  @media ${device.tablet} {
    max-width: 350px;
    position: static;
    margin: 30px 0 0;
    padding: 0;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Standard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  text-content: center;
  padding: 0 5px;
  background: #ffffff;
  border: 1px solid rgba(31, 55, 255, 0.1);
  border-radius: 10px;
  @media ${device.tablet} {
    margin-top: 15px;
  }

  &:before {
    content: "";
    width: 200px;
    height: 80px;
    position: absolute;
    background: url(${Polygon});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

export const Iconrate = styled.img`
  position: absolute;
  top: 20px;
  text-align: center;
`;

export const Headline = styled.div`
  font-weight: 600;
  font-size: 31px;
  line-height: 160%;
  text-align: center;
  color: #05000b;
  margin-top: 96px;
`;

export const Price = styled.div`
  font-weight: bold;
  font-size: 96px;
  line-height: 120%;
  text-align: center;
  color: #1f37ff;
`;

export const Characteristic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0;
`;

export const Equipment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  margin-top: 14px;
`;

export const Pack = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 160%;
  text-align: center;
  color: #05000b;
`;

export const Description = styled.div`
font-weight: 500;
font-size: 16px;
line-height: 160%;
text-align: center
color: #05000B;
margin-left: 16px;
`;

export const Instal = styled.button`
  width: 335px;
  height: 58px;
  background: #ff5a05;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  color: #ffffff;
  font-size: 18px;
  line-height: 160%;
  margin: 58px 0 44px;
  text-decoration: none;
`;
