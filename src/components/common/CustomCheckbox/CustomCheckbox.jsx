import { useState } from 'react';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import { Check, SwitchOff, SwitchOn, Wrapper } from './CustomCheckbox.styled.js';

export const CustomCheckbox = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);

  return (
    <Wrapper>
      <Check type="checkbox" onChange={() => setIsToggleOn(prevState => !prevState)} />
      {!isToggleOn && <SwitchOff />}
      {isToggleOn && (
        <SwitchOn>
          <DoneRoundedIcon sx={{ fontSize: 16, color: '#fff' }} />
        </SwitchOn>
      )}
    </Wrapper>
  );
};
