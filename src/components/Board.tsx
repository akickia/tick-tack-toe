import { useEffect, useState } from 'react';
import { useStore } from '../store/store';
import Square from './Square';
import '../style/board.scss';

export default function Board({
  isStarted,
  setIsStarted,
}: {
  isStarted: boolean;
  setIsStarted: any;
  //Todo, check type
}) {
  const [squares, setSquares] = useState(Array(9).fill(''));
  const [winner, setWinner] = useState(false);
  const [isWinner, setIsWinner] = useState('');
  const { players, currentIndex, updateCurrentIndex, language } = useStore();

  useEffect(() => {
    //Check winner when squares change
    checkWinner();
    if (!winner) {
      //If no winner - change currentIndex
      handleCurrentIndex();
    }
  }, [squares]);

  const handleCurrentIndex = () => {
    currentIndex === 0 ? updateCurrentIndex(1) : updateCurrentIndex(0);
  };

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
        setIsWinner(players[currentIndex]);
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
    if (!squares[squareNo]) {
      const newSquares = [...squares];
      newSquares[squareNo] = mark;
      setSquares(newSquares);
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
