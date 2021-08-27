import styled from "styled-components";

export const Container = styled.div`
  background: #000848;
  position: relative;
  padding: 0;
  position: relative;
  box-sizing: border-box;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  box-sizing: border-box;
  max-width: 1110px;
  padding: 110px 0 53px;
`;

export const Social = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  box-sizing: border-box;
`;

export const Icons = styled.div`
display: flex;
margin-top: 26px;
`;

export const Connection = styled.div`
display: flex;
  align-items: center;
  justify-content: center;
width: 40.5px;
height: 40.5px;
background: rgba(255, 255, 255, 0.29);
backdrop-filter: blur(10px);
border-radius: 50%;
cursor: pointer;
margin-right: 15px;
`;

export const Menu = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  box-sizing: border-box;
`;

export const Title = styled.div`
font-weight: 500;
font-size: 20px;
line-height: 160%;
text-align: center;
color: #FFFFFF;
margin-bottom: 10px;
`;

export const Link = styled.div`
font-weight: 500;
font-size: 16px;
line-height: 160%;
margin-top: 10px;
text-align: center;
color: #FFFFFF;
opacity: 0.8;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const ViewBlock = styled.div`
width: 100%;
height: 125px;
background: linear-gradient(270.77deg, #000423 -21.37%, #050A59 100.6%);
transform: matrix(-1, 0, 0, 1, 0, 0);
`;

export const First = styled.div`
width: 1315.16px;
height: 187.5px;
background: linear-gradient(271.92deg, #050B42 3.69%, #05106B 116.09%);
`;

export const Second = styled.div`
width: 954.77px;
height: 114px;
background: linear-gradient(90.21deg, #000848 0.27%, #1F0977 106.71%);
`;

export const Third = styled.div`
width: 954.77px;
height: 114px;
background: linear-gradient(270.78deg, #00053C -21.36%, #010C64 100.6%);
transform: matrix(-1, 0, 0, 1, 0, 0);
`;

