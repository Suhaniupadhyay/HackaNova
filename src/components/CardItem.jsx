import React from 'react';
import { motion } from 'framer-motion';

function CardItem({ card, onClick }) {
  const firstLetter = card.title?.[0] || '?';

  // 👉 Deadline status calculate kar rahe hain
  let deadlineStatus = null;
  let deadline = null;

  if (card.deadline) {
    try {
      deadline = new Date(card.deadline);
      const now = new Date();

      const sameDay =
        deadline.getFullYear() === now.getFullYear() &&
        deadline.getMonth() === now.getMonth() &&
        deadline.getDate() === now.getDate();

      if (deadline < now && !sameDay) {
        deadlineStatus = 'overdue';
      } else if (sameDay) {
        deadlineStatus = 'today';
      } else if (deadline > now) {
        deadlineStatus = 'upcoming';
      }
    } catch (e) {
      // agar parsing fail ho jaye to ignore
    }
  }

  // 👉 card ke box ka style deadline ke hisaab se
  let cardClasses =
    'bg-black/50 rounded-ranger p-2 cursor-pointer border transition border-white/10 ';
  if (deadlineStatus === 'overdue') {
    cardClasses += 'shadow-[0_0_15px_#ff1d25] border-ranger-red';
  } else if (deadlineStatus === 'today') {
    cardClasses += 'shadow-[0_0_15px_#ffd100] border-ranger-yellow';
  } else if (deadlineStatus === 'upcoming') {
    cardClasses += 'shadow-ranger-glow border-ranger-blue';
  }

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      className={cardClasses}
      onClick={onClick}
    >
      <div className="flex items-start gap-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-ranger-red to-ranger-yellow flex items-center justify-center text-sm font-bold shadow-ranger-glow">
          {firstLetter}
        </div>
        <div className="flex-1">
          <div className="text-sm font-semibold">{card.title}</div>
          {card.description && (
            <div className="text-[11px] text-gray-300 mt-1 line-clamp-2">
              {card.description}
            </div>
          )}

          {/* 👉 Deadline badge */}
          {deadline && (
            <div
              className={`mt-2 text-[11px] font-semibold px-2 py-1 rounded inline-block ${
                deadlineStatus === 'overdue'
                  ? 'bg-ranger-red text-white'
                  : deadlineStatus === 'today'
                  ? 'bg-ranger-yellow text-black'
                  : 'bg-ranger-blue text-white'
              }`}
            >
              {deadlineStatus === 'overdue'
                ? 'Overdue'
                : deadlineStatus === 'today'
                ? 'Due Today'
                : `Due: ${deadline.toLocaleString()}`}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default CardItem;

