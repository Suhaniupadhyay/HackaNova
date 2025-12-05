import React, { useState } from "react";

function CardDrawer({ card, onClose, onUpdateCard }) {
  const [title, setTitle] = useState(card.title);
  const [description, setDescription] = useState(card.description || "");

  const handleUpdate = () => {
    const updatedCard = { ...card, title, description };
    onUpdateCard(updatedCard);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/50"
      onClick={onClose}
    >
      {/* Drawer Panel */}
      <div
        className="w-96 h-full p-6 flex flex-col text-black shadow-2xl transition-transform duration-300"
        style={{
          background: "linear-gradient(180deg, #ffd1e3 0%, #ffb6d5 100%)", // baby pink gradient
          borderLeft: "6px solid #8b00ff", // purple accent
          borderTopLeftRadius: "30px",
          borderBottomLeftRadius: "30px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-400">
          <h2 className="text-2xl font-bold">{title || "Untitled Card"}</h2>

          <button
            onClick={onClose}
            className="text-lg font-bold px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            ✕
          </button>
        </div>

        {/* Editable Title Field */}
        <div className="mt-4">
          <label className="font-semibold text-gray-800">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 mt-1 border-2 border-purple-400 rounded-xl bg-white"
          />
        </div>

        {/* Description Section */}
        <div className="mt-4 flex flex-col">
          <label className="font-semibold text-gray-800">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-2 border-2 border-purple-400 rounded-xl bg-white h-32 resize-none"
            placeholder="Add more details..."
          />
        </div>

        {/* Created by */}
        <div className="mt-6 text-sm">
          <span className="font-semibold text-gray-700">Created by:</span>
          <span className="font-medium ml-1">{card.createdBy}</span>
        </div>

        {/* Image-styled bottom section */}
        <div
          className="mt-6 p-4 rounded-xl border-2 border-purple-300 bg-purple-100"
          style={{ fontSize: "14px" }}
        >
          <p className="font-semibold">Sample Preview Section:</p>
          <input
            type="text"
            readOnly
            value="Example UI element…"
            className="w-full p-1 mt-2 rounded border border-purple-300 bg-white"
          />
          <div className="text-xs mt-1">Created by: {card.createdBy}</div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 mt-auto pt-4 border-t border-gray-400">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full bg-gray-300 hover:bg-gray-400 transition text-black"
          >
            Close
          </button>

          <button
            onClick={handleUpdate}
            className="px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-700 transition text-white"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardDrawer;
