import React,{useState, useEffect} from "react";
import axios from 'axios';
import { motion } from "framer-motion";
import styled from "styled-components";
import Coin from "./Component/Coin";
import Hero from "./Component/Hero"

const BackGround = styled.div`
background: #ffcef3;
margin:0;
padding:0;
`;

const Container = styled(motion.div)`
display: flex;
flex-direction : column;
margin: auto;
box-shadow: 0 3px 6px 0 #555;
padding: 20px 10px;
border-radius: 4px;
width: 80%;
background: #a1eafb;
font-family: Montserrat;
font-weight: bold;
`;

const SearchBox = styled.form`
display: flex;
flex-direction: row;
border: black solid 1px;
border-radius: 2px;
border-color: #ffcef3;
color: black;
font-size: 18px;
font-family: Montserrat;
font-weight: bolder;
margin: 20px auto
& input{
    padding: 10px;
    font-size: 14px;
    outline: none;
    border: none;
    font-weight: bold;
}
& button{
    padding: 10px;
    font-size: 14px;
    outline: none;
    border: none;
    font-weight: bold;
    color:white;
    background-color: black;
    cursor: pointer;
}
`;

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {

    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data);
      console.log(res.data);
    })
    .catch(error => console.log(error));
  }, []); 

  const handleChange = e => {
    setSearch(e.target.value)
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return<BackGround>
      <Hero />
      <Container
      initial={{opacity:0}}
      animate={{opacity:1, transition:{duration:0.75}}}
      >
      <SearchBox >
            <input type="text" placeholder="Search a crypto.....🚀 " onChange={handleChange}/>
            <button type="submit">Search</button>
        </SearchBox>
      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
      </Container>
    </BackGround>
  
  
}

export default App;
