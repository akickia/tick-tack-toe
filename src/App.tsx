import { useEffect, useState } from 'react';
import Board from './components/Board';
import { useStore } from './store/store';

function App() {
  //TODO: Change input and edit structure.
  //TODO: Add toggle for language
  // localStorage.setItem('language', 'English');

  const { players, updatePlayers, language } = useStore();
  const [currentUserIndex, setCurrentUserIndex] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isStarted, setIsStarted] = useState(false);
  const [playerLanguage, setPlayerLanguage] = useState('English');

  useEffect(() => {
    localStorage.setItem('language', playerLanguage);
    //Uppdaterar localstorage men localstorage hämtar inte igen. Fundera igen.
  }, [playerLanguage, language]);

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

  const toggleLanguage = () => {
    if (playerLanguage === 'English') {
      setPlayerLanguage('Swedish');
    } else {
      setPlayerLanguage('English');
    }
  };

  return (
    <div className="App">
      <h1>{language.heading}</h1>
      {!isStarted && (
        <input
          placeholder={`${language.edit} ${currentUserIndex + 1}`}
          value={inputValue}
          onChange={(e) => handleChange(e)}
        ></input>
      )}
      {isEditing && (
        <button onClick={() => handleSaveUser()}>{language.save}</button>
      )}
      {isStarted ? (
        <p>{players[currentUserIndex]}</p>
      ) : (
        players.map((user, i) => <p key={i}>{user}</p>)
      )}
      <div className="card">
        {!isStarted && (
          <button onClick={() => startGame()}>{language.start}</button>
        )}
        <Board
          isStarted={isStarted}
          user={currentUserIndex}
          users={players}
          action={handleCurrentUser}
          setIsStarted={setIsStarted}
        ></Board>
      </div>
      <button onClick={() => toggleLanguage()}>Toggla</button>
    </div>
  );
}

export default App;
