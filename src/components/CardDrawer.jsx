import React, { useState } from 'react';

function CardDrawer({ card, onClose, onUpdate }) {
  // local state: description + deadline
  const [description, setDescription] = useState(card.description || '');
  const [deadline, setDeadline] = useState(card.deadline || '');
  const [commentText, setCommentText] = useState('');

  const handleSave = () => {
    const updatedCard = {
      ...card,
      description,
      deadline: deadline || null,
    };
    onUpdate(updatedCard); // 👉 BoardView ko bata rahe hain ki card update ho gaya
    onClose();
  };

  return (
    <aside className="fixed right-0 top-0 bottom-0 w-full sm:w-96 bg-[var(--ranger-surface)] shadow-ranger-glow p-4 z-50 overflow-y-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">{card.title}</h2>
        <button
          className="text-sm text-gray-300 hover:text-white"
          onClick={onClose}
        >
          ✕ Close
        </button>
      </div>

      {/* Description */}
      <div className="mb-4">
        <h3 className="text-sm text-gray-300 mb-1">Description</h3>
        <textarea
          className="w-full min-h-[80px] text-sm bg-black/30 rounded px-2 py-1 outline-none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe this mission..."
        />
      </div>

      {/* 👉 Deadline field */}
      <div className="mb-4">
        <h3 className="text-sm text-gray-300 mb-1">Deadline</h3>
        <input
          type="datetime-local"
          className="w-full text-sm bg-black/30 rounded px-2 py-1 outline-none"
          value={deadline || ''}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <p className="text-[11px] text-gray-400 mt-1">
          Set mission deadline. We will highlight cards that are due today or overdue.
        </p>
      </div>

      {/* Comments (abhi sirf UI demo) */}
      <div className="mb-4">
        <h3 className="text-sm text-gray-300 mb-1">Comments (UI only)</h3>
        <div className="space-y-2 mb-2 max-h-32 overflow-y-auto">
          {card.comments?.length === 0 && (
            <div className="text-xs text-gray-400">No comments yet.</div>
          )}
        </div>
        <input
          className="w-full text-sm bg-black/30 rounded px-2 py-1 outline-none"
          placeholder="Type a comment (for now just UI)..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
      </div>

      {/* Attachments (sirf demo) */}
      <div className="mb-6">
        <h3 className="text-sm text-gray-300 mb-1">Attachments (UI only)</h3>
        <input
          type="file"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (!f) return;
            alert('Future: upload this file to backend: ' + f.name);
          }}
        />
      </div>

      {/* Save button */}
      <div className="flex justify-end gap-2">
        <button
          className="px-3 py-1 text-sm rounded bg-gray-600 hover:bg-gray-500"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          className="px-3 py-1 text-sm rounded bg-ranger-blue hover:bg-blue-500"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </aside>
  );
}

export default CardDrawer;


