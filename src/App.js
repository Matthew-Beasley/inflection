import React, { useState } from 'react';
import inflection, {plural, singular} from 'inflection';
import './App.css';

function App() {
  const [wordCards, setWordCards] = useState([])
  const [word, setWord] = useState('');

  const getCards = () => {
    const newCard = {
      key: wordCards.length,
      singular: inflection.pluralize(word, plural) ,
      plural: inflection.singularize(word, singular)
    }
    setWordCards([...wordCards, newCard])
  }

  const deleteCards = ({target}) => {
    const updated = wordCards.filter(card => {
      if (!target.classList.contains(card.key)) {
        return card;
      }
    })
    console.log(updated)
    setWordCards([...updated])
    //console.log(wordCards)
  }

  return (
    <div className="App">
      <div className="input-section">
        <input type="text" value={word} onChange={(ev) => setWord(ev.target.value)}></input>
        <button onClick={(ev) => getCards(ev)}>Get Word</button>
      </div>
      <div className="output-section">
        {wordCards.map(card => {
          return (
            <div className="card" key={card.key}>
              <p>{card.singular}</p>
              <p>{card.plural}</p>
              <button className={card.key} onClick={(ev) => deleteCards(ev)}>X</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
