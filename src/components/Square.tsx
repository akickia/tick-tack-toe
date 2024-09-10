import { useStore } from '../store/store';
import '../style/square.scss';

export default function Square({
  squareNo,
  user,
  changeMark,
  mark,
}: {
  squareNo: number;
  user: number;
  changeMark: (squareNo: number, mark: string) => void;
  mark: string;
}) {
  const marks = useStore((state) => state.marks);

  const handleClick = () => {
    //Handle mark, check to refactor.
    if (!mark) {
      changeMark(squareNo, marks[user]);
      const newMark = user === 0 ? 'X' : '0';
      changeMark(squareNo, newMark);
    }
  };

  return (
    <button onClick={handleClick} className="square">
      {mark}
    </button>
  );
}
