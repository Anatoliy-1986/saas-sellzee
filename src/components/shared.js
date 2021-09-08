import styled from "styled-components";

export const Container = styled.div`
  background:${({ background }) => background || "#ffffff;"};
  position: relative;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction:${({ direction }) => direction || "row"};
  justify-content: ${({ justify }) => justify || "space-between"};
  align-items: ${({ align }) => align || "center"};
  flex-wrap:${({ wrap }) => wrap || "no-wrap"};
  margin: 0 auto;
  position:${({ position }) => position || "static"};
  box-sizing: border-box;
  max-width:${({ width }) => width || "1134px"};
  padding:${({ padding }) => padding || "0"};
`;


export const ViewBlock = styled.div`
  display: flex;
  justify-content:${({ justify }) => justify || "space-between"};
  position: relative;
  box-sizing: border-box;
  margin: ${({ margin }) => margin || "0"};
`;
