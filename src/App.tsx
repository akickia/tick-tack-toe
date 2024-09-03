import { useState } from 'react';
import Board from './components/Board';
import { useStore } from './store/store';

import Toggle from './components/Toggle';
import Player from './components/Player';

function App() {
  //Note to self: Refactored players. Check the complicity, feels overcomplicated. Fix error with showing wrong winner. What should go in what component and what should be in the store.

  const { language, players } = useStore();
  const [isStarted, setIsStarted] = useState(false);
  const [currentUserIndex, setCurrentUserIndex] = useState(0);

  const startGame = () => {
    setCurrentUserIndex(0);
    setIsStarted(true);
  };

  const handleCurrentUser = () => {
    if (currentUserIndex === 0) {
      setCurrentUserIndex(1);
    } else {
      setCurrentUserIndex(0);
    }
    console.log(
      'Current player: ',
      players[currentUserIndex],
      currentUserIndex
    );
  };

  return (
    <div className="App">
      <h1>{language.heading}</h1>
      {isStarted ? (
        <p>{players[currentUserIndex]}</p>
      ) : (
        players.map((player, i) => (
          <Player key={i} player={player} currentUserIndex={i} />
        ))
      )}
      <div className="card">
        {!isStarted && (
          <button onClick={() => startGame()}>{language.start}</button>
        )}
        <Board
          isStarted={isStarted}
          user={currentUserIndex}
          action={handleCurrentUser}
          setIsStarted={setIsStarted}
        ></Board>
      </div>
      <Toggle />
    </div>
  );
}

export default App;
