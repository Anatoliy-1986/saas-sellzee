import React from 'react';
import buy from './images/buy.png';
import amazon from './images/amazon.png';
import fedex from './images/fedex.png';
import fedx from './images/fedx.png';
import google from './images/google.png';
import Microsoft from './images/Microsoft.png';
import ola from './images/ola.png';
import walmart from './images/walmart.png';
import check from './images/check.png';
import Legend from './images/Legend.png';
import Line from './images/Line.png';
import transaction from './images/transaction.png';
import Clients from './images/Clients.png';
import Members from './images/Members.png';
import Won from './images/Won.png';
import Completed from './images/Completed.png';
import {Div, Button, Flex, Link, Paragraph, Img, Image} from './elements'; 


function Platforms () {

    return (
        <>
        <Div>

        <Flex width="1134px" direction="column" margin=" 0 auto">
        <Flex direction="column">
        <Flex align="center" justify="space-between" margin="121px 0 41px">
         <Link as="a" href="#"><Img src={fedex} alt="fedex"/></Link>
         <Link as="a" href="#"><Img src={google} alt="google"/></Link>
         <Link as="a" href="#"><Img src={ola} alt="ola"/></Link>
         <Link as="a" href="#"><Img src={Microsoft} alt="Microsoft" /></Link>
         </Flex>
         <Flex align="center" justify="space-around">
         <Link as="a" href="#"><Img src={amazon} alt="amazon" /></Link>
         <Link as="a" href="#"><Img src={fedx} alt="fedx" /></Link>
         <Link as="a" href="#"><Img src={walmart} alt="walmart" /></Link>
         </Flex>
        </Flex>

        <Flex margin="148px 0 246px" justify="space-between">
         <Flex>
        <Image src={buy} alt="buy" secondary top="-26px" left="-168px"/>
        <Image src={Legend} alt="Legend" secondary top="159px" left="227px"/>
        <Image src={transaction} alt="transaction" secondary top="225px" left="85px"/>
         </Flex>
        <Flex direction="column" margin="0" width="546px">
        <Paragraph size="17px">Lorem ipsum dolor sit ame</Paragraph>
        <Paragraph size="49px" secondary margin="12px 0 0" height="120%"><strong>Simple Solutions for Complex Connections</strong></Paragraph>
        <Paragraph size="16px" secondary margin="25px 0 0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Sed donec gravida feugiat neque, ipsum faucibus. Pharetra vel suspendisse mi odio a velit feugiat sapien.</Paragraph>
         <Flex  align="center" margin="25px 0 0">
             <Flex justify="space-between" align="center" margin="0 35px 0 0"><Img src={check} alt="check" padding="0"/>
             <Paragraph size="17px" secondary margin="0 0 0 35px">High Analysis</Paragraph></Flex>
             <Flex justify="space-between" align="center"><Img src={check} alt="check" padding="0" margin="0 35px 0 0"/>
             <Paragraph size="17px" secondary margin="0 0 0 35px">Certified Institute</Paragraph></Flex>
             </Flex>
        <Flex justify="space-between" margin="35px 0 0">
        <Button>Learn More</Button>
        </Flex>
             </Flex>
             
        
        </Flex>
        
        </Flex>
        <Flex width="100%" backimage={Line}>
        <Flex width="1134px" margin=" 0 auto" justify="space-between">
        <Img src={Clients} alt="Clients" />
        <Img src={Members} alt="Members" />
        <Img src={Won} alt="Won" />
        <Img src={Completed} alt="Completed" />
        </Flex>
        </Flex>
        </Div>
        </>
    )
}
  
  export default Platforms;