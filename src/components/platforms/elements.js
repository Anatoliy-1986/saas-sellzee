import styled from "styled-components";

export const Сontainer = styled.div`
  background: #ffffff;
  position: relative;
  padding: 0;
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: ${(props) => props.wrap || "no-wrap"};
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "stretch"};
  align-content: ${(props) => props.content || "stretch"};
  justify-content: ${(props) => props.justify || "stretch"};
  margin: ${({ margin }) => margin || "0"};
  position: relative;
  box-sizing: border-box;
  max-width: ${({ width }) => width || "100%"};
  background-image: url(${({ backimage }) => backimage || "none"});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Link = styled.div`
  width: 261px;
  height: 82px;
  text-align: center;
  box-shadow: 1px 4px 12px rgba(0, 0, 0, 0.08);
  margin: 0 0 41px;
`;


export const Paragraph = styled.div`
  line-height: ${({ height }) => height || "160%"};
  font-size: ${({ size }) => size || "20px"};
  text-transform: ${(props) => (props.secondary ? "none" : "uppercase")};
  color: ${(props) => (props.secondary ? "#05000B" : "#FF5A05")};
  margin: ${({ margin }) => margin || "0"};
`;

export const Button = styled.button`
  width: 169px;
  height: 62px;
  font-size: 20px;
  text-align: center;
  color: white;
  background-color: ${(props) => (props.secondary ? "transparent" : "#FF5A05")};
  border-radius: 4px;
  border: ${(props) => (props.secondary ? "1px solid white" : "none")};
`;





export const Image = styled.img`
  position: ${(props) => (props.secondary ? "absolute" : "static")};
  top: ${({ top }) => top || "0"};
  left: ${({ left }) => left || "0"};
  bottom: ${({ bottom }) => bottom || "0"};
  right: ${({ right }) => right || "0"};
  box-sizing: border-box;
`;

export const Img = styled.img`
  align-self: center;
  padding-top: ${({ padding }) => padding || "18px"};
  margin: ${({ margin }) => margin || "0"};
`;

export const Transaction = styled.div`
  width: 397px;
  height: 202px;
  background: #ffffff;
  box-shadow: 20px 30px 70px rgba(3, 7, 37, 0.06);
  border-radius: 10px;
  position: ${(props) => (props.secondary ? "absolute" : "static")};
  top: ${({ top }) => top || "0"};
  left: ${({ left }) => left || "0"};
  bottom: ${({ bottom }) => bottom || "0"};
  right: ${({ right }) => right || "0"};
  box-sizing: border-box;
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "stretch"};
  justify-content: ${(props) => props.justify || "stretch"};
  margin: ${({ margin }) => margin || "0"};
`;

export const Transfer = styled.button`
  width: 131.59px;
  height: 36.52px;
  background: #ff5a05;
  border-radius: 4px;
  font-size: 14px;
  text-align: center;
  color: white;
  background-color: #ff5a05;
  border: none;
`;

export const EnterMoney = styled.input`
width: 175.32px;
height: 36.52px;
background: #FFFFFF;
border: 1px solid #1F37FF;
box-sizing: border-box;
border-radius: 8px;
`;
