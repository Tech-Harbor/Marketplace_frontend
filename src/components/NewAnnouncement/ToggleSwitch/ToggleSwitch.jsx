import { forwardRef } from 'react';
import { Input, Label, Slider, StyledText, Wrapper } from './ToggleSwitch.styled.js';

const ToggleSwitch = forwardRef(({ ...rest }, ref) => {
  return (
    <Wrapper>
      <StyledText>Можливий торг</StyledText>
      <Label>
        <Input type="checkbox" {...rest} ref={ref} defaultChecked={true} />
        <Slider />
      </Label>
    </Wrapper>
  );
});

ToggleSwitch.displayName = 'ToggleSwitch'; // TODO рішення помилки: при виконанні "git commit" отримав наступну помилку "Component definition is missing display name  react/display-name"

export default ToggleSwitch;
