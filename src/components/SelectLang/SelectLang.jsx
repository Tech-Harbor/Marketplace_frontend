import { useState } from 'react';

import UA from '../../assets/svg/UA.svg';
import US from '../../assets/svg/US.svg';
import s from './SelectLang.module.scss';

const Languages = ['UA', 'US'];

const SelectLang = () => {
  const [toggle, setToggle] = useState(false);
  const [currentLang, setCurrentLang] = useState(Languages[0]);

  const showLanguage = () => {
    setToggle(!toggle);
  };

  const setLanguage = e => {
    setCurrentLang(Languages[Languages.indexOf(e.currentTarget.id)]);
  };

  const sortedLanguages = [currentLang, ...Languages.filter(i => i !== currentLang)];

  return (
    <div className={s.container}>
      <ul className={s.buttonLang__container} id="len" onClick={showLanguage}>
        {/* Default lang */}
        {!toggle && (
          <li className={s.buttonLang__language}>
            <img
              src={currentLang === 'UA' ? UA : US}
              alt={currentLang}
              className={s.buttonLang__flag}
            />
            <span className={s.buttonLang__text}>{currentLang}</span>
          </li>
        )}

        {/* Select lang list  */}
        {toggle &&
          sortedLanguages.map((i, idx) => (
            <li onClick={e => setLanguage(e)} className={s.buttonLang__language} key={idx} id={i}>
              <img src={i === 'UA' ? UA : US} alt={i} className={s.buttonLang__flag} />
              <span className={s.buttonLang__text}>{i}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SelectLang;
