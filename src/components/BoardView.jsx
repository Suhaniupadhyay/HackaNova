import React, { useState } from "react";
import CardDrawer from "./CardDrawer";

export default function BoardView({ meeting, onUpdateBoard, onBackHome }) {
  if (!meeting || !meeting.board) return null;

  const [board, setBoard] = useState(meeting.board);
  const [selectedCardId, setSelectedCardId] = useState(null);

  const handleAddCard = () => {
    const title = prompt("Enter card title:");
    if (!title) return;

    const newId = "c" + Date.now();
    const newCard = {
      id: newId,
      title,
      description: "",
      createdBy: "You",
    };

    const newBoard = {
      ...board,
      cards: { ...board.cards, [newId]: newCard },
      lists: board.lists.map((l) =>
        l.id === "todo" ? { ...l, cardIds: [...l.cardIds, newId] } : l
      ),
    };

    setBoard(newBoard);
    onUpdateBoard(newBoard);
  };

  const handleDragStart = (e, cardId, sourceListId) => {
     e.dataTransfer.setData("cardId", cardId);
     e.dataTransfer.setData("sourceListId", sourceListId);
     e.currentTarget.style.opacity = "0.5";
  };

  const handleDrop = (e, targetListId) => {
    const cardId = e.dataTransfer.getData("cardId");
    const sourceListId = e.dataTransfer.getData("sourceListId");

    if (!cardId || !sourceListId) return;

    const newLists = board.lists.map((list) => {
      if (list.id === sourceListId) {
        return { ...list, cardIds: list.cardIds.filter((id) => id !== cardId) };
      }
      if (list.id === targetListId) {
        return { ...list, cardIds: [...list.cardIds, cardId] };
      }
      return list;
    });

    const newBoard = { ...board, lists: newLists };
    setBoard(newBoard);
    onUpdateBoard(newBoard);
  };

  const handleDragOver = (e) => e.preventDefault();

  return (
    <div
      className="min-h-screen flex flex-col items-center py-10"
      style={{
        background: "linear-gradient(180deg,#ff8ba0,#3d0066)",
      }}
    >
      {/* HEADER */}
      <header className="w-4/5 flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-white tracking-wide">
          {meeting.title}
        </h1>
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-full bg-blue-600 text-white"
            onClick={handleAddCard}>
            + Add Card
          </button>

          <button className="px-4 py-2 rounded-full bg-transparent border border-white text-white"
            onClick={onBackHome}>
            Home
          </button>
        </div>
      </header>

      {/* COLUMNS */}
      <main className="flex gap-10 w-11/12 justify-center">
        {board.lists.map((list, i) => (
          <div
            key={list.id}
            className="flex-1 flex flex-col rounded-3xl shadow-2xl transition-all"
            style={{
              background: "#ffe3d4",
              border: "4px solid black",
              height: "75vh",
              padding: "25px",
              borderRadius: "40px",
              boxShadow:
                i === 1
                  ? "0 0 15px 5px rgba(0,180,255,0.8)" // glow for middle box
                  : "0 8px 20px rgba(0,0,0,0.4)",
            }}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, list.id)}
          >
            {/* TITLE */}
            <h3 className="text-center text-black text-2xl font-bold mb-4 tracking-wide">
              {list.title}
            </h3>

            {/* CARDS */}
            <div className="flex-1 flex flex-col gap-5 overflow-y-auto pr-2">
              {list.cardIds.map((cardId) => {
                const card = board.cards[cardId];

                return (
                  <div
                    key={card.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, card.id, list.id)}
                    onClick={() => setSelectedCardId(card.id)}
                    className="p-4 rounded-2xl border-2 border-black shadow-xl cursor-pointer"
                    style={{
                      background:
                        "linear-gradient(180deg,#2a0050,#693daf,#b7a1e6)",
                      color: "white",
                    }}
                  >
                    <div className="font-bold text-lg">{card.title}</div>
                    <div className="text-sm opacity-90">
                      Created by {card.createdBy}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </main>

      {/* DRAWER */}
      {selectedCardId && (
        <CardDrawer
          card={board.cards[selectedCardId]}
          onClose={() => setSelectedCardId(null)}
          onUpdateCard={(updatedCard) => {
            const newBoard = {
              ...board,
              cards: { ...board.cards, [updatedCard.id]: updatedCard },
            };
            setBoard(newBoard);
            onUpdateBoard(newBoard);
          }}
        />
      )}
    </div>
  );
}

