import React, { useState } from 'react';
import CardItem from './CardItem';

function ListColumn({ list, cards, onCardClick, onAddCard }) {
  const [newTitle, setNewTitle] = useState('');

  return (
    
    <div className="w-72 bg-ranger-surface/80 rounded-ranger p-3 shadow-ranger-glow flex flex-col border border-white/10">

      {/* List header */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="font-semibold">{list.title}</h2>
        <span className="text-xs text-gray-300">{list.cardIds.length}</span>
      </div>

      {/* Cards */}
      <div className="flex-1 space-y-2 overflow-y-auto">
        {list.cardIds.map((id) => {
          const card = cards[id];
          if (!card) return null;
          return (
            <CardItem
              key={card.id}
              card={card}
              onClick={() => onCardClick(card.id)}
            />
          );
        })}
      </div>

      {/* Add card input */}
      <div className="mt-3">
        <input
          className="w-full text-sm bg-black/30 rounded px-2 py-1 mb-1 outline-none"
          placeholder="New mission card..."
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button
          className="w-full bg-blue-600 hover:bg-blue-500 text-sm py-1 rounded"
          onClick={() => {
            onAddCard(newTitle.trim());
            setNewTitle('');
          }}
        >
          + Add Card
        </button>
      </div>
    </div>
  );
}

export default ListColumn;
