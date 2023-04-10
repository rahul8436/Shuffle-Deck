import Card from "./Card";
import { colors, symbols, numbers } from "../data";
import { useEffect, useState } from "react";
import useRandomValueFromArray from "../utils/hooks/useRandomValueFromArray";
import {shuffle} from "../utils/helper";

const CardsWrapper = ({ cardsNumber, randomize, isFlipped }) => {
 const [cards, setCards]= useState(() => shuffle(numbers))
  const {randomValueFromArray}= useRandomValueFromArray()

  useEffect(() => {
    if (typeof window !== "undefined"){
      const root = document.querySelector(':root');
      root.style.setProperty('--cardCount', cardsNumber > 13 ? 13 : cardsNumber)
    }
  }, [cardsNumber])

  useEffect(() => {
    setCards((prev) => shuffle(prev))
  }, [randomize])


  return (
    <div className="card-wrapper">
      {[...(new Array(Number(cardsNumber)))].map((_numb, index) => {
     index += 1;
     const randomSymbols =
       symbols[Math.floor(Math.random() * symbols.length)];
     return (
       <Card
         key={index}
         name={randomSymbols.name}
         number={randomValueFromArray(cards).number}
         isFlipped={isFlipped}
         color={
           randomSymbols.name === "spade" || randomSymbols.name === "club"
             ? `${colors[1].color}`
             : `${colors[0].color}`
         }
         symbol={randomSymbols.symbol}
       />
     );
   })}
    </div>
  );
};

export default CardsWrapper;