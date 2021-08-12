import React,{useState, useEffect} from "react";
import axios from 'axios';
import styled from "styled-components";
import Coin from "./Component/Coin";

const Header = styled.div`
display: flex;
flex-direction : row;
align-items: center;
`;

const Container = styled.div`
display: flex;
flex-direction : column;
margin: auto;
margin-top: 35px;

box-shadow: 0 3px 6px 0 #555;
padding: 20px 10px;
border-radius: 4px;
width: 70%;

background: black;
`;

const SearchBox = styled.form`
display: flex;
flex-direction: row;
border: black solid 1px;
border-radius: 2px;
border-color: white;
color: black;
font-size: 18px;
font-weight: bold;
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

  return<div>
      <Header>
        <h2>Logo</h2>
        <h2>Github</h2>
        <h2>Repo</h2>
      </Header>
      <Container>
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
    </div>
  
  
}

export default App;
