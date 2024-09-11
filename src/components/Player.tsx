import { useState } from 'react';
import { useStore } from '../store/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

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

  const handleChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //Changing name in playerlist in store
    const updatedUsers = [...players];
    updatedUsers[currentUserIndex] = inputValue;
    updatePlayers(updatedUsers);
    if (e.key === 'Enter') {
      stopEditing();
    }
  };

  const stopEditing = () => {
    const updatedUsers = [...players];
    updatedUsers[currentUserIndex] = inputValue;
    updatePlayers(updatedUsers);
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
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => handleChange(e)}
          />
          <FontAwesomeIcon
            icon={faCheck}
            onClick={() => stopEditing()}
          ></FontAwesomeIcon>
        </div>
      ) : (
        <div className="flex">
          <p>{player}</p>

          <FontAwesomeIcon
            icon={faEdit}
            color="FFFFFF"
            onClick={() => {
              setIsEditing(true);
            }}
          />
        </div>
      )}
    </div>
  );
}
