import styled from "styled-components";
import Polygon from "./images/Polygon.png";

export const Container = styled.div`
  background: #ebedff;
  position: relative;
  padding: 0;
  box-sizing: border-box;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
  max-width: 1134px;
  padding: 63px 0 338px;
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
  width: 357px;
  height: 86px;
  background: #ffffff;
  border-radius: 10px;
  padding: 0 10px;
  margin-top: 25px;
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

export const ViewBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 940px;
  position: absolute;
  left: 97px;
  top: 315px;
  box-sizing: border-box;
`;

export const Standard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  text-content: center;
  width: 455px;

  background: #ffffff;
  border: 1px solid rgba(31, 55, 255, 0.1);
  border-radius: 10px;

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
