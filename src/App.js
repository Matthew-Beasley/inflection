import React, { useState } from 'react';
import inflection, { plural, singular } from 'inflection';
import Input from './Input';
import Output from './Output';
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
      <Input word={word} setWord={setWord} getCards={getCards} />
      <Output wordCards={wordCards} deleteCards={deleteCards}/>
    </div>
  );
}

export default App;
