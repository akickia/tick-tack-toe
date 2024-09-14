import { useStore } from '../store/store';

export default function Options() {
  const { language, options } = useStore();

  const handleChange = (e) => {
    console.log(e.target);
  };
  return (
    <section>
      <form
        onChange={(e) => {
          handleChange(e);
        }}
      >
        <h4>{language.playertype}:</h4>
        <input type="radio" id="computer" value={options[0]}></input>
        <label htmlFor="computer">{language.computer}</label>
        <input
          type="radio"
          id="locally"
          defaultChecked
          value={options[1]}
        ></input>
        <label htmlFor="locally">{language.locally}</label>
        <input type="radio" id="online" value={options[2]}></input>
        <label htmlFor="online">{language.online}</label>
      </form>
    </section>
  );
}
