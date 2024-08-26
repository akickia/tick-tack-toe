import { useStore } from '../store/store';
import '../style/square.css';
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
    if (!mark) {
      changeMark(squareNo, marks[user]);
      const newMark = user === 0 ? 'X' : '0';
      changeMark(squareNo, newMark);
      console.log('mark: ', mark, 'user: ', user, squareNo);
    }
  };
  return (
    <button onClick={handleClick} className="square">
      {mark}
    </button>
  );
}
