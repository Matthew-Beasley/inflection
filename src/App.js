import React, { useState } from 'react';
import inflection, {plural, singular} from 'inflection';
import './App.css';

const Output = ({wordCards, deleteCards}) => {
  return (
    <div className="output-section">
      {wordCards.map(card => {
        return (
          <div className="card" key={card.key}>
            <p>{card.singular}</p>
            <p>{card.plural}</p>
            <button onClick={(ev) => deleteCards(card)}>X</button>
          </div>
        )
      })}
    </div>
  )
}






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

  const deleteCards = (cardToDelete) => {
    const updated = wordCards.filter(card => {
      if (cardToDelete.key !== card.key) {
        return card;
      }
    })
    setWordCards([...updated])
  }

  return (
    <div className="App">
      <div className="input-section">
        <input type="text" value={word} onChange={(ev) => setWord(ev.target.value)}></input>
        <button onClick={(ev) => getCards(ev)}>Get Word</button>
      </div>
      <Output wordCards={wordCards} deleteCards={deleteCards}/>
    </div>
  );
}

export default App;
