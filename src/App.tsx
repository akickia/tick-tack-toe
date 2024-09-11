import { useState } from 'react';
import { useStore } from './store/store';
import Board from './components/Board';
import Toggle from './components/Toggle';
import Player from './components/Player';
import Footer from './components/Footer';

export default function App() {
  const { language, players, currentIndex, updateCurrentIndex } = useStore();
  const [isStarted, setIsStarted] = useState(false);

  const startGame = () => {
    //Handle starting options
    updateCurrentIndex(0);
    setIsStarted(true);
  };

  return (
    <>
      <main>
        <div className="App">
          <h1>{language.heading}</h1>
          {isStarted ? (
            <p>{players[currentIndex]}</p>
          ) : (
            players.map((player, i) => (
              <Player key={i} player={player} currentUserIndex={i} />
            ))
          )}
          <div className="card">
            {!isStarted && (
              <button onClick={() => startGame()}>{language.start}</button>
            )}
            <Board isStarted={isStarted} setIsStarted={setIsStarted}></Board>
          </div>
          <Toggle />
        </div>
      </main>
      <Footer />
    </>
  );
}
