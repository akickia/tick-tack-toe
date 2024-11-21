import { useEffect, useState, useRef, useCallback } from 'react';
import { useStore } from '../store/store';
import Square from './Square';
import '../style/board.scss';
import { langEng } from '../assets/translations';

export default function Board({ mode }: { mode: string }) {
  const [squares, setSquares] = useState(Array(9).fill(''));
  const [winner, setWinner] = useState(false);
  const [isWinner, setIsWinner] = useState('');
  const {
    players,
    marks,
    currentIndex,
    options,
    setIsStarted,
    updateCurrentIndex,
    language,
  } = useStore();

  const isFirstRender = useRef(true);
  const winnerRef = useRef(winner);

  function getWins() {
    let localWins = localStorage.getItem('wins');
    if (localWins) {
      return parseInt(localWins);
    } else {
      return 0;
    }
  }

  let wins = getWins();

  useEffect(() => {
    //Make sure winnerState is correct using ref
    winnerRef.current = winner;
  }, [winner]);

  useEffect(() => {
    //Avoid running when rendering component
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    //Check for winner when squares changes
    if (!winnerRef.current) {
      checkWinner();
    }
    //Update turn
    updateCurrentIndex(currentIndex === 1 ? 0 : 1);
    console.log('wins: ', wins);
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
        if (mode === options[0] && currentIndex === 1) {
          setIsWinner(language.computer);
        } else {
          setIsWinner(players[currentIndex]);
          localStorage.setItem('wins', (wins + 1).toString());
        }
        setWinner(true);
        return;
      }
    }
    //Check for draw
    if (!squares.includes('')) {
      setIsWinner(language.draw);
      setWinner(true);
      return;
    }
  };

  const computerMode = (squareNo: number) => {
    //TODO: Make computer smarter instead of random marks.
    let randomNumber;
    //Loop to find empty square
    do {
      //Stop loop if winner
      if (winnerRef.current) return;
      randomNumber = Math.floor(Math.random() * 9);
    } while (squares[randomNumber] || randomNumber === squareNo);
    //Make turn for computer
    changeMark(randomNumber, marks[1]);
  };

  const changeMark = (squareNo: number, mark: string) => {
    setSquares((prevSquares) => {
      //Check for marks
      if (prevSquares[squareNo]) {
        return prevSquares;
      }
      //Update squares with new array
      const newSquares = [...prevSquares];
      newSquares[squareNo] = mark;
      return newSquares;
    });
  };

  const runGame = (squareNo: number, mark: string) => {
    if (mode === options[1]) {
      //Local mode = run changeMark onClick
      changeMark(squareNo, mark);
    } else if (mode === options[0]) {
      //Computer mode = run changeMark onClick for player
      changeMark(squareNo, marks[0]);
      //After timeout, if no winner run computerMode
      setTimeout(() => {
        if (!winnerRef.current) {
          computerMode(squareNo);
        }
      }, 500);
    } else {
      console.log('else');
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
    <>
      <div className="board">
        {squares.map((square, i) => {
          return (
            <Square
              key={i}
              squareNo={i}
              mark={square}
              action={runGame}
              currentIndex={currentIndex}
            />
          );
        })}
        {winner && (
          <div className="winning-container">
            <h1 className="win">
              {isWinner.toLocaleUpperCase()} {language.win}
            </h1>
            <button onClick={resetGame}>{language.restart}</button>
          </div>
        )}
      </div>
      <h3>
        {wins}{' '}
        {wins === 1
          ? language.wins
          : language === langEng
          ? language.wins + 's'
          : language.wins + 'er'}
      </h3>
    </>
  );
}
