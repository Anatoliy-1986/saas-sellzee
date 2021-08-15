import styled  from 'styled-components';

export const Button = styled.button`
width: 172px;
height: 62px;
font-size:20px;
text-align: center;
color: white;
background-color: ${props => props.secondary ? 'none' : '#FF5A05'};

border: none;
`;

//${(props) => (!!props.type && props.type === 'secondary') ? 'none' : '#FF5A05'};