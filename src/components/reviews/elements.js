import styled from "styled-components";
import Person from "./images/Person.png";

export const Container = styled.div`
  background: #ffffff;
  position: relative;
  padding: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  box-sizing: border-box;
  max-width: 1134px;
  padding: 106px 0 121px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 49px;
  line-height: 120%;
`;

export const SubTitle = styled.div`
  width: 494px;
  font-size: 16px;
  line-height: 160%;
  text-align: center;
  opacity: 0.7;
  margin-top: 25px;
`;

export const ViewBlock = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  box-sizing: border-box;
  margin-top: 69px;
`;

export const Review = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  box-sizing: border-box;
`;

export const Heading = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 31px;
  line-height: 160%;
  position: relative;
  box-sizing: border-box;
`;

export const Textreview = styled.div`
  position: absolute;
  top: 160px;
  box-sizing: border-box;
  width: 655px;
  height: 236px;
  background: #ffffff;
  box-shadow: 13px 13px 31px rgba(0, 0, 0, 0.05);
`;

export const Requisites = styled.div`
  position: absolute;
  top: -36px;
  box-sizing: border-box;
  width: 373px;
  height: 129px;
  background: #ffffff;
  box-shadow: 13px 13px 31px rgba(0, 0, 0, 0.05);
  padding: 31px 0 31px 30px;
`;

export const Name = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 160%;
`;

export const Post = styled.div`
  font-size: 20px;
  line-height: 160%;
  opacity: 0.8;
`;

export const Text = styled.div`
  width: 515px;
  height: 74px;
  font-style: italic;
  font-size: 16px;
  line-height: 160%;
  margin: 132px 0 0 30px;
`;

export const User = styled.div`
  width: 525px;
  height: 505px;
  position: relative;
  box-sizing: border-box;
  background: url(${Person});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  &:before {
    content: open-quote;
    font-size: 200pt;
    text-align: center;
    line-height: 260px;
    color: #fff;
    background: #1f37ff;
    border-radius: 62.5px 62.5px 62.5px 0px;
    position: absolute;
    left: 410px;
    top: -30px;
    display: block;
    height: 125px;
    width: 125px;
  }
`;

export const Slider = styled.div`
  display: flex;
  justify-content: space-between;
  width: 103px;
  margin-left: 275px;
`;

export const Sliderleft = styled.button`
  width: 46px;
  height: 46px;
  background: #ff5a05;
  border-radius: 62.5px 62.5px 62.5px 0px;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  border: none;
  cursor: pointer;
  color: #FFFFFF;
  font-size: 20px;
`;

export const Sliderright = styled.button`
  width: 46px;
  height: 46px;
  background: #ff5a05;
  border-radius: 62.5px 62.5px 62.5px 0px;
  border: none;
  cursor: pointer;
  color: #FFFFFF;
  font-size: 20px;
`;
