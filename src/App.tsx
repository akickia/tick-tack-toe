import { useState } from 'react';
import { useStore } from './store/store';
import Board from './components/Board';
import Toggle from './components/Toggle';
import Player from './components/Player';
import Footer from './components/Footer';

export default function App() {
  const { language, players } = useStore();
  const [isStarted, setIsStarted] = useState(false);
  const [currentUserIndex, setCurrentUserIndex] = useState(0);

  const startGame = () => {
    //Handle starting options
    setCurrentUserIndex(0);
    setIsStarted(true);
  };

  const handleCurrentUser = () => {
    if (currentUserIndex === 0) {
      setCurrentUserIndex(1);
    } else {
      setCurrentUserIndex(0);
    }
  };

  return (
    <>
      <main>
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
      </main>
      <Footer />
    </>
  );
}
