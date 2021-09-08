import styled from "styled-components";
import {device} from "../../device";
import {Wrapper} from "../shared";

export const Transition = styled(Wrapper)`
  @media ${device.tablet} {
    justify-content: space-around;
  }
`;

export const Offer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 358px;
  height: 265px;
  margin: 30px 0 0;
  justify-content: ${(props) => props.justify || "space-around"};
  padding: ${({ padding }) => padding || "20px 69px 20px 38px"};
  background: ${({ background }) => background || "none"};
  border: ${({ border }) => border || "2px solid rgba(66, 82, 207, 0.1)"};
  color: ${({ color }) => color || "#05000B"};
  border-radius: 10px;
  position: relative;
  box-sizing: border-box;
`;

export const Discription = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
  opacity: 0.7;
  margin-top: ${({ margin }) => margin || "0"};
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 160%;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #ff5a05;
`;

export const SubTitle = styled.div`
  font-weight: bold;
  font-size: 31px;
  line-height: 130%;
  margin-top: 15px;
`;

export const Label = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 160%;
`;
