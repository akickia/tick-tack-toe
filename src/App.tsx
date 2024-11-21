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
    //Handle starting settings
    updateCurrentIndex(0);
    setIsStarted(true);
  };
  return (
    <>
      <main>
        <div className="App">
          <h1>{language.heading}</h1>
          {!isStarted && <Options />}
          {!isStarted && chosenOption === 'locally' ? (
            players.map((player, i) => (
              <Player key={i} player={player} currentUserIndex={i} />
            ))
          ) : !isStarted &&
            (chosenOption === 'computer' || chosenOption === 'online') ? (
            <Player player={players[0]} currentUserIndex={0}></Player>
          ) : isStarted && chosenOption === 'locally' ? (
            <p>{players[currentIndex]}</p>
          ) : (
            <p>{players[0]}</p>
          )}
          <div className="card">
            {!isStarted ? (
              <button onClick={() => startGame()}>{language.start}</button>
            ) : (
              <Board mode={chosenOption}></Board>
            )}
          </div>
          <Toggle />
        </div>
      </main>
      <Footer />
    </>
  );
}
