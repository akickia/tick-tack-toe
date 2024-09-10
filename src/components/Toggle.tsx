import { useStore } from '../store/store';
import { langEng, langSwe } from '../assets/translations';
import '../style/toggle.scss';

export default function Toggle() {
  const { updateLanguage } = useStore();

  return (
    <div className="language-toggle">
      <button className="toggle" onClick={() => updateLanguage(langSwe)}>
        <img src="/flagSwe.png" />
      </button>
      <button className="toggle" onClick={() => updateLanguage(langEng)}>
        <img src="/flagEng.png" />
      </button>
    </div>
  );
}
