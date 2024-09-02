import { useEffect, useState } from 'react';
import { langEng, langSwe } from '../assets/translations';
import { useStore } from '../store/store';
import '../style/toggle.scss';

function Toggle() {
  const { updateLanguage } = useStore();

  return (
    <div className="language-toggle">
      <button className="toggle" onClick={() => updateLanguage(langSwe)}>
        <img src="src/assets/flagSwe.png" />
      </button>
      <button className="toggle" onClick={() => updateLanguage(langEng)}>
        <img src="src/assets/flagEng.png" />
      </button>
    </div>
  );
}

export default Toggle;
