import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  DropDownMenu,
  TopBlock,
  TitleText,
  OpenArrow,
  BottomBlock,
  InformativeLink,
} from './FooterDropDownMenu.styled.js';

export const FooterDropDownMenu = ({ title, list }) => {
  const [open, setOpen] = useState(false);

  return (
    <DropDownMenu $show={open}>
      <TopBlock>
        <TitleText>{title}</TitleText>

        <OpenArrow $show={open} onClick={() => setOpen(!open)} />
      </TopBlock>

      {open && (
        <BottomBlock $show={open}>
          {list.map((element, index) => (
            <InformativeLink key={index} href={element.link}>
              {element.text}
            </InformativeLink>
          ))}
        </BottomBlock>
      )}
    </DropDownMenu>
  );
};

FooterDropDownMenu.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
};
