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
  const handleClick = () => {
    if (!mark) {
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
