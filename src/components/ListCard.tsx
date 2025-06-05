// File: src/components/ListCard.tsx
import React from 'react';
import type { AnimalItem } from '../types';
import './ListCard.css';

interface Props {
  item: AnimalItem;
  onTransfer: (item: AnimalItem) => void;
  direction: 'left' | 'right';
}

const ListCard: React.FC<Props> = ({ item, onTransfer, direction }) => {
  return (
    <div className="list-card">
      <div>
        <strong>{item.title}</strong>
        <p>{item.description}</p>
      </div>
      <button onClick={() => onTransfer(item)}>{direction === 'right' ? '→' : '←'}</button>
    </div>
  );
};

export default ListCard;