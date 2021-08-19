import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import btc from '../images/btc.svg';
import react from '../images/react.svg';
import Js2 from '../images/js.svg';
import react2 from '../images/react.svg';

const Section = styled.section`
height: 90vh;
display: flex; 
justify-content: center;
align-items: center;
background: black;
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
    max-width: 150px;
max-height: 150px;
    top:30%;
    left:50%;
}

${Image}:nth-Child(2){
    max-width: 150px;
max-height: 150px;
    top:40%;
    left:30%;
}
${Image}:nth-Child(3){
    max-width: 150px;
max-height: 150px;
    top:350px;
    left:50px;
}
${Image}:nth-Child(4){
    max-width: 150px;
max-height: 150px;
    top:100px;
    right:75px;
}

`;

const ColumnLeft = styled.div`
display: flex;
color: #fff;
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
    color=#fff;
}
`;

const Button = styled(motion.button)`
padding: 1rem 3rem;
font-size: 1.2rem;
border: 2px solid #fff;
border-radius: 4px;
outline: none;
cursor: pointer;
background: transparent;
color:#fff;
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
                    <Image src={react} alt='planet' 
                      initial={{ '--rotate': '0deg' }}
                      animate={{ '--rotate': '360deg' }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <Image src={Js2} alt='planet' />
                    <Image src={react2} alt='planet' />
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default Hero
