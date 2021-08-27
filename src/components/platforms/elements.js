import styled from "styled-components";
import "./GlobalStyle.css";
import Line from "./images/Line.png";

export const Сontainer = styled.div`
  background: #ffffff;
  position: relative;
  padding: 0;
  margin: 0;
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
  justify-content: space-around;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin: 121px 0 0;
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 261px;
  height: 82px;
  box-shadow: 1px 4px 12px rgba(0, 0, 0, 0.08);
  margin: 0 0 41px;
`;

export const Partner = styled.img`
  align-self: center;
`;

export const ViewBlock = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  box-sizing: border-box;
  margin: 107px 0 246px;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  max-width: 546px;
`;

export const Title = styled.div`
  font-size: 17px;
  text-transform: uppercase;
  color: #ff5a05;
  line-height: 160%;
  opacity: 0.8;
`;

export const SubTitle = styled.div`
  font-size: 49px;
  line-height: 120%;
  margin: 12px 0 0;
  color: #05000b;
`;

export const Description = styled.div`
  font-size: 16px;
  margin: 25px 0 0;
  line-height: 160%;
  color: #05000b;
`;

export const Qualifications = styled.div`
  display: flex;
  align-items: center;
  margin: 25px 0 0;
`;

export const Competence = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 35px 0 0;
`;

export const Skill = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 160%;
  color: #05000b;
  margin-left: 17px;
`;

export const Learn = styled.div`
  display: flex;
  align-items: center;
  margin: 35px 0 0;
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

export const Img = styled.img`
  align-self: center;
`;

export const Amenities = styled.div`
  display: flex;
  position: relative;
  box-sizing: border-box;
`;

export const Image = styled.img`
  position: absolute;
  top: -26px;
  left: -168px;
  box-sizing: border-box;
`;

export const PercentageLimit = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  top: 186px;
  left: 237px;
  height: 62px;
  width: 250px;
  background: #ffffff;
  border-radius: 7.7px;
  box-sizing: border-box;
  box-shadow: 20px 30px 70px rgba(3, 7, 37, 0.06);
`;

export const ExternalCircle = styled.div`
  position: absolute;
  top: -9px;
  left: 15px;
  box-sizing: border-box;
  text-align: center;
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background-color: #ffffff;
`;

export const ActiveBorder = styled.div`
  position: relative;
  top: 10px;
  left: 10px;
  text-align: center;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: #6a5acd;
  background-image: linear-gradient(91deg, transparent 50%, #b0c4de 50%),
    linear-gradient(90deg, #b0c4de 50%, transparent 50%);
`;

export const Circle = styled.div`
  position: relative;
  top: 5px;
  left: 5px;
  text-align: center;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: #ffffff;
`;

export const Prec = styled.span`
  top: 17px;
  position: relative;
  font-size: 15px;
`;

export const Legend = styled.div`
  font-family: Source Han Sans SC;
  font-size: 16px;
  line-height: 24px;
  color: rgba(60, 60, 67, 0.6);
  margin-right: 38px;
`;

export const Percent = styled.div`
  font-family: SF Pro Text;
  font-size: 13px;
  line-height: 18px;
  color: #7459d9;
  margin-right: 18px;
`;

export const Transaction = styled.div`
  font-family: Suprema;
  font-weight: 400;
  width: 397px;
  height: 202px;
  padding: 21px 40px 28px 40px;
  background: #ffffff;
  box-shadow: 20px 30px 70px rgba(3, 7, 37, 0.06);
  border-radius: 10px;
  position: absolute;
  top: 270px;
  left: 125px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleTransaction = styled.div`
  font-weight: 600;
  font-size: 20px;
`;

export const AddClient = styled.button`
  display: block;
  width: 65px;
  text-align: center;
  background: #ffffff;
  padding: 0;
  cursor: pointer;
  border: none;
`;

export const ClientsList = styled.div`
  display: flex;
`;

export const Customer = styled.div`
  margin-right: 10px;
  position: relative;
  box-sizing: border-box;
`;

export const AddName = styled.div`
  font-size: 12px;
  text-align: center;
  color: #404040;
  margin-top: ${({ margin }) => margin || "0"};
  width: 100%;
`;

export const AddImg = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddMoney = styled.div`
  width: 20px;
  font-size: 10px;
  position: absolute;
  background-color: #1e90ff;
  border-radius: 50%;
  color: white;
  text-align: center;
`;

export const SendMoney = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  width: 100%;
`;

export const EnterMoney = styled.input`
  width: 175.32px;
  height: 36.52px;
  font-size: 24px;
  background: #ffffff;
  border: 1px solid #1f37ff;
  box-sizing: border-box;
  border-radius: 8px;
`;

export const Transfer = styled.button`
  font-family: Quicksand;
  font-style: normal;
  font-weight: bold;
  width: 131.59px;
  height: 36.52px;
  background: #ff5a05;
  border-radius: 4px;
  font-size: 14px;
  text-align: center;
  color: white;
  background-color: #ff5a05;
  border: none;
  cursor: pointer;
`;

export const LineBefore = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;

  &:before {
    content: "";
    position: absolute;
    background: url(${Line});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
  }
`;

export const TrackRecord = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  box-sizing: border-box;
  max-width: 1134px;
  margin: 0 auto;
`;

export const Track = styled.div`
  height: 261px;
  width: 261px;
  margin: 0 0 110px 0;
  background: #ffffff;
  box-shadow: 10px 15px 25px rgba(0, 0, 0, 0.04);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:before {
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    left: 0px;
    top: 261px;
    border-top: 110px solid #ffffff;
    border-left: 130px solid transparent;
    border-right: 130px solid transparent;
  }
`;

export const Figure = styled.div`
  font-weight: bold;
  font-size: 55px;
  line-height: 120%;
  color: #1f37ff;
  margin-top: 96.5px;
`;

export const Сompletion = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 160%;
  margin-top: 30px;
  opacity: 0.7;
`;
