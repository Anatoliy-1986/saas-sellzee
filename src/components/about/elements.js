import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(264.47deg, #2e43f0 29.39%, #6677ff 93.49%);
  position: relative;
  padding: 50px 0 71px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  box-sizing: border-box;
  max-width: 1134px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`;

export const Link = styled.a`
  padding-right: ${(props) => (props.secondary ? "0" : "29px")};
  font-size: 20px;
  text-align: center;
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Button = styled.button`
  width: 172px;
  height: 62px;
  font-size: 20px;
  color: white;
  background-color: ${(props) => (props.secondary ? "transparent" : "#FF5A05")};
  border-radius: 4px;
  border: ${(props) => (props.secondary ? "1px solid white" : "none")};
  text-decoration: none;
  cursor: pointer;
`;

export const ViewBlock = styled.div`
display: flex;
position: relative;
box-sizing: border-box;
`;

export const Information = styled.div`
display: flex;
flex-direction: column;
margin: 72px 0 90px;
box-sizing: border-box;
max-width: 418px;
`;

export const Title = styled.div`
  font-size: 20px;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0;
  letter-spacing: 0.1em;
`;

export const SubTitle = styled.div`
  font-size: 61px;
  color: #ffffff;
  margin: 20px 0 0;
`;

export const Description = styled.div`
  font-size: 16px;
  color: #ffffff;
  margin: 20px 0 0;
  opacity: 0.7;
`;

export const Line = styled.div`
  border-bottom: 1px solid #ffffff;
  width: 418px;
  margin-top: 20px;
`;

export const Navigetion = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 43px 0 0;
  box-sizing: border-box;
`;

export const Image = styled.img`
position:absolute;
top: 47px;
left: 525px;
box-sizing: border-box;
`;
