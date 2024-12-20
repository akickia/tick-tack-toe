import { useStore } from '../store/store';
import '../style/square.scss';

export default function Square({
  squareNo,
  action,
  mark,
  currentIndex,
}: {
  squareNo: number;
  action: (squareNo: number, mark: string) => void;
  mark: string;
  currentIndex: number;
}) {
  const { marks } = useStore();

  const handleClick = () => {
    //Handle mark, check to refactor.
    if (!mark) {
      const newMark = marks[currentIndex];
      action(squareNo, newMark);
    }
  };

  return (
    <button onClick={handleClick} className="square">
      {mark}
    </button>
  );
}
