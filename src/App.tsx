// File: src/App.tsx
import React from 'react';
import useLists from './hooks/useLists';
import ListContainer from './components/ListContainer';
import './App.css';

const App: React.FC = () => {
  const { list1, list2, moveToList, loading, error } = useLists();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data!</p>;

  return (
    <div className="app">
      <h1>List Creation</h1>
      <button className="create-list-btn">Create a new list</button>
      <div className="lists-container">
        <ListContainer
          title="List 1"
          items={list1}
          onTransfer={(item) => moveToList(item, 'list2')}
          direction="right"
        />
        <ListContainer
          title="List 2"
          items={list2}
          onTransfer={(item) => moveToList(item, 'list1')}
          direction="left"
        />
      </div>
    </div>
  );
};

export default App;