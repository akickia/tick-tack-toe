import Square from './Square';
import '../style/board.css';
import { useEffect, useState } from 'react';
export default function Board({
  isStarted,
  user,
  action,
  users,
  setIsStarted,
}: {
  isStarted: boolean;
  user: number;
  action: () => void;
  users: string[];
  setIsStarted: any;
}) {
  const [squares, setSquares] = useState(Array(9).fill(''));
  const [winner, setWinner] = useState(false);
  const [isWinner, setIsWinner] = useState('');

  useEffect(() => {
    checkWinner();
  }, [squares]);

  const checkWinner = () => {
    //Specify combinations
    const winnerCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    //Iterating winnerCombinations to see if squares have content to match it.
    for (let combination of winnerCombinations) {
      const [a, b, c] = combination;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        setIsWinner(squares[a] === 'X' ? users[0] : users[1]);
        setWinner(true);
        return;
      }
    }
  };

  const changeMark = (squareNo: number, mark: string) => {
    if (!squares[squareNo]) {
      const newSquares = [...squares];
      newSquares[squareNo] = mark;
      setSquares(newSquares);
      action();
    }
  };

  const resetGame = () => {
    setIsWinner('');
    setWinner(false);
    setIsStarted(false);
    setSquares(Array(9).fill(''));
  };

  return (
    <div className="board">
      {isStarted && !winner
        ? squares.map((square, i) => {
            return (
              <Square
                key={i}
                squareNo={i}
                user={user}
                mark={square}
                changeMark={changeMark}
              />
            );
          })
        : winner && (
            <div className="winning-container">
              <h1 className="win">{isWinner.toLocaleUpperCase()} VANN!</h1>
              <button onClick={resetGame}>Börja om</button>
            </div>
          )}
    </div>
  );
}
