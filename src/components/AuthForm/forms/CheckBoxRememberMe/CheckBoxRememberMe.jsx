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
  const [isToggleOn, setIsToggleOn] = useState(false);

  return (
    <RememberBlock>
      <Check type="checkbox" onChange={() => setIsToggleOn(prevState => !prevState)} />

      {!isToggleOn && <SwitchOff />}

      {isToggleOn && (
        <SwitchOn>
          <DoneRoundedIcon sx={{ fontSize: 16, color: '#fff' }} />
        </SwitchOn>
      )}

      <RememberText>Запам’ятати мене</RememberText>
    </RememberBlock>
  );
};
