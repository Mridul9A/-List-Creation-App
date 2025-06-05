// File: src/components/ListContainer.tsx
import React from 'react';
import type { AnimalItem } from '../types';
import ListCard from './ListCard';
import './ListContainer.css';

interface Props {
  title: string;
  items: AnimalItem[];
  onTransfer: (item: AnimalItem) => void;
  direction: 'left' | 'right';
}

const ListContainer: React.FC<Props> = ({ title, items, onTransfer, direction }) => {
  return (
    <div className="list-container">
      <h3>{title}</h3>
      {items.map((item) => (
        <ListCard key={item.id} item={item} onTransfer={onTransfer} direction={direction} />
      ))}
    </div>
  );
};

export default ListContainer;