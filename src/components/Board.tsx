import { useEffect, useState, useRef, useCallback } from 'react';
import { useStore } from '../store/store';
import Square from './Square';
import '../style/board.scss';

export default function Board({ mode }: { mode: string }) {
  const [squares, setSquares] = useState(Array(9).fill(''));
  const [winner, setWinner] = useState(false);
  const [isWinner, setIsWinner] = useState('');
  const [currentLocalIndex, setCurrentLocalIndex] = useState(0);
  const {
    players,
    marks,
    currentIndex,
    setIsStarted,
    updateCurrentIndex,
    language,
  } = useStore();
  console.log('Rerender: ' + squares);
  // console.log(currentIndex, currentLocalIndex);

  const isFirstRender = useRef(true);
  const winnerRef = useRef(winner);

  useEffect(() => {
    winnerRef.current = winner;
  }, [winner]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (!winnerRef.current) {
      checkWinner();
    }
    if (mode === 'locally') {
      setCurrentLocalIndex((prevState) => (prevState === 1 ? 0 : 1));
      updateCurrentIndex(currentIndex === 1 ? 0 : 1);
    }
  }, [squares]); // Trigger endast när squares uppdateras

  const checkWinner = () => {
    console.log('In winner function');
    if (winnerRef.current) return;
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
        setIsWinner(players[currentLocalIndex]);
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

  const computerMode = (squareNo: number) => {
    if (winnerRef.current) return; // Om vinnare finns, stoppa datorn från att spela
    updateCurrentIndex(1);
    setCurrentLocalIndex(1);
    let randomNumber;
    do {
      if (winnerRef.current) return;
      randomNumber = Math.floor(Math.random() * 9);
      console.log('randomNumber:', randomNumber, 'squareNo:', squareNo);
    } while (squares[randomNumber] || randomNumber === squareNo);

    // Datorn gör sitt drag
    changeMark(randomNumber, marks[1]);
    updateCurrentIndex(0);
    setCurrentLocalIndex(0);
  };

  const changeMark = (squareNo: number, mark: string) => {
    setSquares((prevSquares) => {
      // Kontrollera om rutan redan har en markering
      if (prevSquares[squareNo]) {
        return prevSquares;
      }

      // Uppdatera squares-arrayen med spelarens/datorns mark
      const newSquares = [...prevSquares];
      newSquares[squareNo] = mark;
      return newSquares;
    });
  };

  const runGame = (squareNo: number, mark: string) => {
    if (mode === 'locally') {
      changeMark(squareNo, mark);
    } else if (mode === 'computer') {
      changeMark(squareNo, marks[0]);
      setTimeout(() => {
        console.log('in timeout; ', winnerRef.current);
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
    <div className="board">
      {squares.map((square, i) => {
        return (
          <Square
            key={i}
            squareNo={i}
            mark={square}
            changeMark={runGame}
            currentIndex={currentLocalIndex}
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
  );
}
