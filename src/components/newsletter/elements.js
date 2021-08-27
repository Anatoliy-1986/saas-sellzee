import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  position: relative;
  padding: 0;
`;

export const Wrapper = styled.div`
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
  width: 562px;
  height: 77px;
  border-radius: 4px;
  border: 1px solid rgba(5, 0, 11, 0.1);
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
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
`;
