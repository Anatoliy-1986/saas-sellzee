import styled from 'styled-components';

export const Div = styled.div`
background: linear-gradient(264.47deg, #2E43F0 29.39%, #6677FF 93.49%);
position: relative;
padding: 50px 0 71px 0;
`;

export const Flex = styled.div`
display: flex;
flex-direction: ${props => props.direction || 'row'};
align-items: ${props => props.align || 'stretch'};
justify-content: ${props => props.justify || 'stretch'};
margin: ${({margin}) => margin || '0'};
box-sizing: border-box;

max-width:${({width}) => width || '100%'};
`
export const Paragraph = styled.div`
font-size: ${({size}) => size || '20px'};
text-transform: ${props => props.secondary ? 'none' : 'uppercase'};
color: #FFFFFF;
margin: ${({margin}) => margin || '0'};
`
export const Line = styled.div`
border-bottom: 1px solid #FFFFFF;
width:365px;
`

export const Button = styled.button`
width: 172px;
height: 62px;
font-size:20px;
text-align: center;
color: white;
background-color: ${props => props.secondary ? 'transparent' : '#FF5A05'};
border-radius: 4px;
border: ${props => props.secondary ? '1px solid white' : 'none'};
`;

export const Link = styled.a`
padding-right: ${({padding}) => padding || '0'};
font-size:20px;
text-align: center;
color: white;
font-family: Inter;
text-decoration: none;
&:hover {
text-decoration: underline;
  }
`;

export const Image = styled.img`
position:absolute;
margin:50px 0 0 67px;
  }
`;


