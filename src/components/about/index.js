import React from 'react';
import pad from './pad.png';
import logo from './logo.png';
import {Div, Button, Flex, Link, Paragraph, Line, Image} from './elements'; 


function About () {

    return (
        <>
        <Div>
        <Flex width="1134px" direction="column" margin=" 0 auto">
        <Flex justify="space-between" align="center">
        <img src={logo} alt="logo" height="43px"/>
        <Flex align="center" justify="space-between" >
         <Link href="#" padding="29px">Home</Link>
         <Link href="#" padding="29px">About</Link>
         <Link href="#" padding="29px">Contact</Link>
         <Link href="#" padding="29px">Testimonial</Link>
         <Link href="#">Priceing</Link>
         </Flex>
         <Button>Get Started</Button> 
        </Flex>

        <Flex>
        <Flex direction="column" margin="72px 0 90px" width="390px">
        <Paragraph>Inspiration Technology.</Paragraph>
        <Paragraph size="61px" secondary margin="20px 0 0"><strong>Runs faster.</strong> Costs less and never breaks.</Paragraph>
        <Line></Line>
        <Paragraph size="16px" secondary margin="20px 0 0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sapien
             lectus sit tristique rhoncus, nisi, malesuada. Tellus consequat</Paragraph>
             <Flex justify="space-between" margin="43px 0 0">
             <Button>Get Started</Button>
             <Button secondary>Free Trail</Button>
             </Flex>
             </Flex>
        <Flex>
        <Image src={pad} alt="pad" />
        </Flex>
        </Flex>
        </Flex>
        </Div>
        </>
    )
}
  
  export default About;