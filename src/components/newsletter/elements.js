import styled from "styled-components";
import {device} from "../../device";

export const Covering = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 676px auto 121px;
  box-sizing: border-box;
  max-width: 1200px;
  background: #fdeee7;
  border-radius: 30px;
  position: relative;
  padding: 67px 0 66px;

  &:before {
    content: "";
    position: absolute;
    width: 1118px;
    height: 405px;
    left: 41px;
    top: -35px;
    background: #fdeee7;
    opacity: 0.4;
    border-radius: 30px;
    z-index: -1;
  }

  &:after {
    content: "";
    position: absolute;
    width: 990px;
    height: 386.11px;
    left: 105px;
    top: -68px;
    background: #fdeee7;
    opacity: 0.3;
    border-radius: 30px;
    z-index: -1;
  }
  @media ${device.tablet} {
    margin: 100px 15px;
    &:before, &:after {
      content: none;
    }
  }
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  line-height: 160%;
  text-align: center;
  letter-spacing: 0.1em;
  color: #ff5a05;
`;

export const SubTitle = styled.div`
  max-width: 619px;
  font-weight: 600;
  font-size: 39px;
  line-height: 130%;
  text-align: center;
  color: #05000b;
  margin: 35px 0;
  position: relative;
  box-sizing: border-box;
`;

export const Subscribe = styled.form`
  max-width: 562px;
  border-radius: 4px;
  border: 1px solid rgba(5, 0, 11, 0.1);
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  @media ${device.tablet} {
    flex-wrap: wrap;
    justify-content: center;
    max-width:350px;
    margin: 0 10px;
  }
`;

export const Email = styled.input`
  border: none;
  background: none;
  width: calc(100% - 84px);
  height: 100%;
  text-indent: 10px;
  outline: none;
  font-size: 20px;
  line-height: 160%;
  padding: 0 20px;
  @media ${device.tablet} {
    height: 53px;
    border-radius: 4px;
  border: 1px solid rgba(5, 0, 11, 0.1);
  }
`;

export const Button = styled.div`
  width: 184px;
  height: 53px;
  background: #ff5a05;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  line-height: 160%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media ${device.tablet} {
    margin: 15px 0 0;
  }
`;

export const ModalConteiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.5s;
  pointer-events: none;
  opacity: ${(props) => (props.opacity ? props.opacity : "0")};
  pointer-events: ${({ pointer }) => pointer};
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  font-size: 50px;
  font-weight: 600;
  padding: 20px;
  border-radius: 12px;
  background-color: #fdeee7;
  width: 50vw;
  height: 400px;
  box-sizing: border-box;
  transform: ${({ transform }) => transform};
  transition: 0.4s all;
  @media ${device.tablet} {
    width: 350px;
  height: 200px;
  font-size: 25px;
  }
`;
