import { useState } from 'react';

import DoneRoundedIcon from '@mui/icons-material/DoneRounded';

import {
  Check,
  RememberBlock,
  RememberText,
  SwitchOff,
  SwitchOn,
} from './CheckBoxRememberMe.styled.js';

export const CheckBoxRememberMe = () => {
  const [toggle, setToggle] = useState({
    toggleType: true,
    toggleRecovery: true,
    toggleCheckbox: false,
    toggleRegistration: false,
  });

  return (
    <RememberBlock>
      <Check
        type="checkbox"
        onChange={() =>
          setToggle(prevState => ({
            ...prevState,
            toggleCheckbox: !toggle.toggleCheckbox,
          }))
        }
      />
      {toggle.toggleCheckbox ? (
        <SwitchOn>
          <DoneRoundedIcon sx={{ fontSize: 16, color: '#fff' }} />
        </SwitchOn>
      ) : (
        <SwitchOff />
      )}
      <RememberText>Запам’ятати мене</RememberText>
    </RememberBlock>
  );
};
