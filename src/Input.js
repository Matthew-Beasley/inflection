import React from 'react';

const Input = ({ word, setWord, getCards }) => {
  return (
    <div className="input-section">
      <input type="text" value={word} onChange={(ev) => setWord(ev.target.value)}></input>
      <button onClick={(ev) => getCards(ev)}>Get Word</button>
    </div>
  )
}

export default Input;