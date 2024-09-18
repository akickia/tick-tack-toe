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
    chosenOption,
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
          {!isStarted && chosenOption === 'locally' ? (
            players.map((player, i) => (
              <Player key={i} player={player} currentUserIndex={i} />
            ))
          ) : !isStarted &&
            (chosenOption === 'computer' || chosenOption === 'online') ? (
            <Player player={players[0]} currentUserIndex={0}></Player>
          ) : (
            <p>{players[currentIndex]}</p>
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
