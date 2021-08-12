import React from 'react'
import styled from 'styled-components'

const CoinContainer = styled.div`
display: flex;
flex-direction : column;
align-items : center;

`;

const CoinRow = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
border: black solid 1px;
border-radius: 2px;
border-color: white;
background-color: white;
margin: 5px auto
padding: 10px;
width: 97%;
`;

const ImageContainer = styled.img`
  width: 36px;
  height: 36px;
`;

const CoinNameHolder = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: bold;
  width: 100px;
  `;

  const CoinSymbol = styled.span`
  display: flex;
  flex-direction: column;
align-items:center;
  font-size: 14px;
  font-weight: bold;
  width: 20px;
  `;

  const CoinPrice = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: bold;
  width: 50px;
  `;

  const CoinPercentageChangeRed = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: bold;
  width: 80px;
  color:red;
  `;

  const CoinPercentageChangeGreen = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: bold;
  width: 80px;
  color:green;
  `;

  const CoinMrtCap = styled.span`
  font-size: 14px;
  font-weight: bold;
  `;


const CoinRowComponent = (props) => {
    const {name,image,price,percentage,symbol,mktcap} = props;
    return(
        <CoinRow>
        <ImageContainer src={image}/>
        <CoinNameHolder>{name}</CoinNameHolder>
        <CoinSymbol>{symbol.toUpperCase()}</CoinSymbol>
        <CoinPrice>${price}</CoinPrice>
        {percentage < 0 ? (
            <CoinPercentageChangeRed>{percentage.toFixed(2)}%</CoinPercentageChangeRed>
          ) : (
            <CoinPercentageChangeGreen>{percentage.toFixed(2)}%</CoinPercentageChangeGreen>
          )}
        <CoinMrtCap>Mkt Cap:${mktcap}</CoinMrtCap>
        </CoinRow>
    );
};


const Coin = ({ name, symbol, price, volume, image, priceChange }) => {
    return (
        <CoinContainer>
            <CoinRowComponent name={name} image={image} symbol={symbol} price={price} percentage={priceChange} mktcap={volume}  />

        </CoinContainer>
    )
}

export default Coin
