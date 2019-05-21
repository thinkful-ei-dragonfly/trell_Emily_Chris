import React from 'react';
import './App.css';
import List from './composition/List';
import STORE from './store';



function App(props) {
  const objectLists = STORE.lists.map(list => {
    const cards = list.cardIds.map(id => {
      return STORE.allCards[id];
    })
  return <List key={list.id} header={list.header} cards={cards}/>;
})
  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {objectLists}
      </div>
    </main>
  );
}



export default App;