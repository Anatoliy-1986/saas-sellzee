import React from 'react';
import styled, { css } from 'styled-components';

      const ButtonGetStarted = props => {

        const Button = styled.button`
        width: 172px;
        height: 62px;
        font-size:20px;
        text-align: center;
        color: white;
        background-color:#FF5A05;
        border: none;
      `;


        return (
            <>
            <Button onClick={props.onChangeText}>Get Started</Button>
            </>
        )
    }
   
  
  export default ButtonGetStarted;