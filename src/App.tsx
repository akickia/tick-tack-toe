import { useState } from 'react';
import { useStore } from './store/store';
import Board from './components/Board';
import Toggle from './components/Toggle';
import Player from './components/Player';
import Footer from './components/Footer';
import Options from './components/Options';

export default function App() {
  const {
    language,
    isStarted,
    players,
    currentIndex,
    setIsStarted,
    updateCurrentIndex,
  } = useStore();

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
          <Options />
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
            <Board></Board>
          </div>
          <Toggle />
        </div>
      </main>
      <Footer />
    </>
  );
}
