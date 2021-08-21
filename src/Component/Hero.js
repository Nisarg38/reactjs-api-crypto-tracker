import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import btc from '../images/btc.svg';
import bi from '../images/binance.svg';
import eth from '../images/eth.svg';
import Ada from '../images/cardano.svg';
import Doge from '../images/dogecoin.svg';
import Uni from '../images/uniswap.svg'


const Section = styled.section`
height: 90vh;
display: flex; 
justify-content: center;
align-items: center;
background:#ffcef3;
font-family: Montserrat;
font-weight: bold;
`;

const Container = styled.section`
display: grid;
grid-template-columns: 1fr 1fr;
height: 100vh;
padding: 3rem calc((100vw-1300px)/2);

@media screen and (max-width: 768px){
    grid-grid-template-columns: 1fr;
}
`;

const Image = styled(motion.img)`
position: absolute;
border: black 2px;
width: 100%
height: 100%;
`;

const ColumnRight = styled(motion.div)`
display: flex;
justify-content: center;
align-items: center;
padding: 2rem;
position: relative;

${Image}:nth-Child(1){
    max-width: 260px;
    max-height: 260px;
    top:15%;
    left:40%;
}

${Image}:nth-Child(2){
    max-width: 230px;
    max-height: 230px;
    top:40%;
    left:70%;
}
${Image}:nth-Child(3){
    max-width: 290px;
    max-height: 290px;
    top:32%;
    left:10%;
}
${Image}:nth-Child(4){
    max-width: 150px;
    max-height: 150px;
    top:65%;
    left:40%;
}
${Image}:nth-Child(5){
    max-width: 140px;
    max-height: 140px;
    top:27%;
    Left:0%;
}
${Image}:nth-Child(6){
    max-width: 150px;
    max-height: 150px;
    top:55%;
    left:1%;
}

`;

const ColumnLeft = styled.div`
display: flex;
color: black;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 5rem 2rem;

h1{
    margin-bottom: 0.5rem;
    font-size: 2rem;
}

p{
    margin: 2rem 0;
    font-size: 3rem;
    line-height: 1.1;
}
`;

const Button = styled(motion.button)`
padding: 1rem 3rem;
font-size: 1.2rem;
border: 2px solid #a1eafb;
border-radius: 4px;
outline: none;
cursor: pointer;
background: transparent;
color:black;
font-weight: bolder;
`;



const Hero = () => {

    const fadeLeft = {
        hidden: {opacity: 0, x: -100},
        visible: {opacity: 1, x:0},
    };

    function template({ rotate, x }) {
        return `rotate(${rotate}) translateX(${x})`
      }


    return (
        <Section>
            <Container>
                <ColumnLeft>
                <motion.h1
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:1}}
                >Welcome to Crypto Tracker</motion.h1>
                <motion.p
                variants={fadeLeft}
                initial='hidden'
                animate='visible'
                transition= {{duration:1}}
                >Journey to "THE MOON 🚀"</motion.p>
    
                <Button
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95, backgroundColor: '#a70098'}}
                initial={{opacity:0}}
                animate={{opacity:1, transition:{duration:1}}}
               
                >
                Github    
                </Button>
              
                </ColumnLeft>
                
                <ColumnRight 
                initial={{opacity:0}}
                animate={{opacity:1, transition:{duration:1.05}}}
                >
                    <Image src={btc} alt='planet' 
                    animate={{ rotate: 1080 , transition:{duration:30}}}
                    />
                    <Image src={bi} alt='planet' 
                     animate={{ rotate: -720 , transition:{duration:30}}}
                    />
                    <Image src={eth} alt='planet' 
                    animate={{ rotate: 720 , transition:{duration:30}}}
                    />
                    <Image src={Ada} alt='planet' 
                     animate={{ rotate: 700 , transition:{duration:30}}}
                    />
                    <Image src={Doge} alt='planet' 
                     animate={{ rotate: -700 , transition:{duration:30}}}
                    />
                    <Image src={Uni} alt='planet' 
                    animate={{ rotate: -720 , transition:{duration:30}}}
                    />
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default Hero
