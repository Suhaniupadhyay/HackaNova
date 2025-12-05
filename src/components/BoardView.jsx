
import React from "react";
import ListColumn from "./ListColumn";
import CardDrawer from "./CardDrawer";

function daysAgoLabel(isoString) {
  const date = new Date(isoString);
  const now = new Date();
  const diffMs = now - date;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays <= 0) return "Today";
  if (diffDays === 1) return "1 day ago";
  if (diffDays < 7) return `${diffDays} days ago`;
  const weeks = Math.floor(diffDays / 7);
  if (weeks === 1) return "1 week ago";
  return `${weeks} weeks ago`;
}

function BoardView({
  meeting,
  selectedCardId,
  setSelectedCardId,
  onUpdateCard,
  onUpdateBoard,
  onBackHome,
}) {
  if (!meeting || !meeting.board) return null;
  const board = meeting.board;
  const selectedCard = selectedCardId ? board.cards[selectedCardId] : null;

  const handleJoinPlanning = () => {
    const code = window.prompt(
      "Enter mission / planning code from your notification:"
    );
    if (!code) return;
    alert(
      `Joined live planning session with code ${code} (frontend demo – backend later).`
    );
  };

  const handleAddCard = (list, title) => {
    if (!title) return;

    const newId = "c" + Date.now();
    const newCard = {
      id: newId,
      title,
      description: "",
      labels: ["green"],
      comments: [],
      attachments: [],
      createdBy: "You",
      deadline: "",
    };

    const newBoard = {
      ...board,
      cards: { ...board.cards, [newId]: newCard },
      lists: board.lists.map((l) =>
        l.id === list.id ? { ...l, cardIds: [...l.cardIds, newId] } : l
      ),
    };

    onUpdateBoard(newBoard);
  };

  return (
    <div className="min-h-screen flex flex-col text-white">
      {/* TOP BAR – mission title + days ago + buttons */}
      <header className="px-6 pt-6 pb-3 border-b border-white/10 bg-black/60">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between max-w-6xl mx-auto">
          <div>
            <div className="ranger-home-title mb-2">
              {meeting.title}
            </div>
            <p className="text-[11px] text-gray-300 tracking-[0.2em] uppercase">
              Mission Board
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="text-gray-300">
              Planned {daysAgoLabel(meeting.plannedAt)}
            </span>
            <button
              onClick={handleJoinPlanning}
              className="px-3 py-2 rounded-full bg-black/80 border border-[#1e90ff] tracking-[0.16em] uppercase hover:bg-black transition"
            >
              Join Live
            </button>
            <button
              onClick={onBackHome}
              className="px-3 py-2 rounded-full bg-transparent border border-white/40 tracking-[0.16em] uppercase hover:bg-white/10 transition"
            >
              Home
            </button>
          </div>
        </div>
      </header>

      {/* BOARD AREA */}
      <main className="flex-1 px-6 py-4 overflow-x-auto">
        <div className="flex gap-4 max-w-6xl mx-auto">
          {board.lists.map((list) => (
            <ListColumn
              key={list.id}
              list={list}
              cards={board.cards}
              onCardClick={(cardId) => setSelectedCardId(cardId)}
              onAddCard={(title) => handleAddCard(list, title)}
            />
          ))}
        </div>
      </main>

      {/* CARD DRAWER */}
      {selectedCard && (
        <CardDrawer
          card={selectedCard}
          onClose={() => setSelectedCardId(null)}
          onUpdateCard={onUpdateCard}
        />
      )}
    </div>
  );
}

export default BoardView;






