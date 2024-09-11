import { useEffect, useState } from 'react';
import { useStore } from '../store/store';
import Square from './Square';
import '../style/board.scss';

export default function Board({
  isStarted,
  user,
  action,
  setIsStarted,
}: {
  isStarted: boolean;
  user: number;
  action: () => void;
  setIsStarted: any;
  //Todo, check type
}) {
  const [squares, setSquares] = useState(Array(9).fill(''));
  const [winner, setWinner] = useState(false);
  const [isWinner, setIsWinner] = useState('');
  const mark = useStore((state) => state.marks[user]);
  const { language, players } = useStore();

  useEffect(() => {
    //Check winner when squares change
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
        setIsWinner(squares[a] === mark ? players[1] : players[0]);
        setWinner(true);
        return;
      } else {
        //Check for draw
        if (!squares.includes('')) {
          setIsWinner(language.draw);
          setWinner(true);
          return;
        }
      }
    }
  };

  const changeMark = (squareNo: number, mark: string) => {
    //Handle logic for squares. Check to refactor.
    if (!squares[squareNo]) {
      const newSquares = [...squares];
      newSquares[squareNo] = mark;
      setSquares(newSquares);
      action();
    }
  };

  const resetGame = () => {
    //Resets all necessary options
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
              <h1 className="win">
                {isWinner.toLocaleUpperCase()} {language.win}
              </h1>
              <button onClick={resetGame}>{language.restart}</button>
            </div>
          )}
    </div>
  );
}
