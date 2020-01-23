import React from 'react';

const Output = ({ wordCards, deleteCards }) => {
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

export default Output;