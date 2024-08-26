import { useState } from 'react';
import './App.css';
import Board from './components/Board';
import { useStore } from './store/store';

function App() {
  //TODO:  ts fix event
  //TODO: Disable input on start - CHECK
  //TODO: Start game - CHECK
  //TODO: State management for users and current user
  //TODO: Change input and edit structure.

  const { marks, players, test, increaseTest, updatePlayers } = useStore();

  console.log(players);
  const [currentUserIndex, setCurrentUserIndex] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isStarted, setIsStarted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsEditing(true);
    const updatedUsers = [...players];
    updatedUsers[currentUserIndex] = e.target.value;
    setInputValue(e.target.value);
    console.log('updated: ', updatedUsers);
    updatePlayers(updatedUsers);
  };

  const handleSaveUser = () => {
    setIsEditing(false);
    handleCurrentUser();
    setInputValue('');
  };
  const startGame = () => {
    setIsEditing(false);

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
    <div className="App">
      <h1>TICK TACK TOE</h1>
      {!isStarted && (
        <input
          placeholder={`Redigera spelare ${currentUserIndex + 1}`}
          value={inputValue}
          onChange={(e) => handleChange(e)}
        ></input>
      )}
      {isEditing && <button onClick={() => handleSaveUser()}>save</button>}
      {isStarted ? (
        <p>{players[currentUserIndex]}</p>
      ) : (
        players.map((user, i) => <p key={i}>{user}</p>)
      )}
      <div className="card">
        {!isStarted && (
          <button onClick={() => startGame()}>Starta spelet</button>
        )}
        <Board
          isStarted={isStarted}
          user={currentUserIndex}
          users={players}
          action={handleCurrentUser}
          setIsStarted={setIsStarted}
        ></Board>
      </div>
    </div>
  );
}

export default App;
