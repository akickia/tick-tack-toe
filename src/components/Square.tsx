import { useStore } from '../store/store';
import '../style/square.scss';

export default function Square({
  squareNo,
  changeMark,
  mark,
}: {
  squareNo: number;
  changeMark: (squareNo: number, mark: string) => void;
  mark: string;
}) {
  const { marks, currentIndex } = useStore();

  const handleClick = () => {
    //Handle mark, check to refactor.
    if (!mark) {
      const newMark = marks[currentIndex];
      changeMark(squareNo, newMark);
    }
  };

  return (
    <button onClick={handleClick} className="square">
      {mark}
    </button>
  );
}
