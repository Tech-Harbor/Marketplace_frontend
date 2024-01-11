import { useState } from 'react';

import styles from './SelectLang.module.css';
import UA from '../../assets/svg/UA.svg';
import US from '../../assets/svg/US.svg';

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

  const sortedLanguages = [currentLang, ...Languages.filter(i => i !== currentLang )]

  return (
    <div className={styles.container}>
      <ul className={styles.buttonLang__container} id="len" onClick={showLanguage}>
        {/* Default lang */}
        {!toggle && (
          <li className={styles.buttonLang__language}>
            <img
              src={currentLang === 'UA' ? UA : US}
              alt={currentLang}
              className={styles.buttonLang__flag}
            />
            <span className={styles.buttonLang__text}>{currentLang}</span>
          </li>
        )}

        {/* Select lang list  */}
        {toggle &&
          sortedLanguages.map((i, idx) => (
            <li
              onClick={e => setLanguage(e)}
              className={styles.buttonLang__language}
              key={idx}
              id={i}
            >
              <img src={i === 'UA' ? UA : US} alt={i} className={styles.buttonLang__flag} />
              <span className={styles.buttonLang__text}>{i}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SelectLang;
