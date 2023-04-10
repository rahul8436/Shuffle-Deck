import "./App.css";
import CardsWrapper from "./components/CardsWrapper";
import { useState } from "react";


function App() {
  const [randomCards, setRandomCards] = useState(1)
  const [isFlipped, setIsFlipped] = useState(true)
  const handleChange = () => {
    if (isFlipped) setIsFlipped(false);
    setRandomCards((prev) => prev + 1)
  }
  return (
    <div className="App">
      <CardsWrapper cardsNumber="52" randomize={randomCards} isFlipped={isFlipped} />
      <button onClick={handleChange}>{isFlipped ? "Show Hand": "Shuffle Deck"}</button>
    </div>
  );
}

export default App;