import styled from "styled-components";

export const Container = styled.div`
  background: #EBEDFF;
  position: relative;
  padding: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
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
background: #FFFFFF;
border-radius: 10px;
padding: 0 10px;
margin-top: 25px;
`;

export const Month = styled.button`
width: 148px;
height: 56px;
background: #FF5A05;
border-radius: 10px;
  border: none;
  cursor: pointer;
  color: #FFFFFF;
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
  color: #FF5A05;
  font-size: 20px;
`;
