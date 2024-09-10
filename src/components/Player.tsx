import { useState } from 'react';
import { useStore } from '../store/store';

export default function Player({
  player,
  currentUserIndex,
}: {
  player: string;
  currentUserIndex: number;
}) {
  const { players, updatePlayers, language } = useStore();
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //Changing name in playerlist in store
    const updatedUsers = [...players];
    updatedUsers[currentUserIndex] = e.target.value;
    setInputValue(e.target.value);
    updatePlayers(updatedUsers);
  };

  const handleSaveUser = () => {
    setIsEditing(false);
    setInputValue('');
  };

  return (
    <div>
      {isEditing ? (
        <div className="flex">
          <input
            placeholder={`${language.edit} ${player}`}
            value={inputValue}
            onChange={(e) => handleChange(e)}
          />
          <button onClick={() => handleSaveUser()}>{language.save}</button>
        </div>
      ) : (
        <div className="flex">
          <p>{player}</p>
          <button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            {language.edit}
          </button>
        </div>
      )}
    </div>
  );
}
