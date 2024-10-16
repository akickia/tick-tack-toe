import { useStore } from '../store/store';

export default function Options() {
  const { language, options, chosenOption, setChosenOption } = useStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChosenOption(e.target.value);
  };
  return (
    <section>
      <form>
        <h4>{language.playertype}:</h4>
        <input
          type="radio"
          id="computer"
          value={options[0]}
          checked={chosenOption === options[0]}
          onChange={handleChange}
        ></input>
        <label htmlFor="computer">{language.computer}</label>
        <input
          type="radio"
          id="locally"
          value={options[1]}
          checked={chosenOption === options[1]}
          onChange={handleChange}
        ></input>
        <label htmlFor="locally">{language.locally}</label>
        {/* <input
          type="radio"
          id="online"
          value={options[2]}
          checked={chosenOption === options[2]}
          onChange={handleChange}
        ></input>
        <label htmlFor="online">{language.online}</label> */}
      </form>
      <p>{chosenOption}</p>
    </section>
  );
}
