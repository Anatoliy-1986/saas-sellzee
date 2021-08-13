import styled  from 'styled-components';

export const Button = styled.button`
width: 172px;
height: 62px;
font-size:20px;
text-align: center;
color: white;
background-color: ${(props) => {
    console.log(props);
    return !!props.type && props.type === 'secondary' ? 'gray' : '#FF5A05'
}};
border: none;
`;