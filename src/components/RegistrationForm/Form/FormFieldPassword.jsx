import PropTypes from 'prop-types';

import {StyledFlexDiv} from '../RegistrationForm.styled.js';
import {StyledInput, StyledLabel} from './FormField.styled.js';
import {StyledIcon, StyledWrapperButton} from "./FormFieldPassword.styled.js";

export const FormFieldPassword = ({name, id, text, clsField}) => {
    return (
        <>
            <StyledLabel label={name} id={id} className={`icon-place ${clsField}`}>
                {text}
            </StyledLabel>

            <StyledFlexDiv className="icon-position">
                <StyledInput
                    name={name}
                    id={id}
                    className={`icon-place ${clsField}`}
                    // value={repeat-password}
                    // onChange={e => setPassword(e.target.value)}
                />

                <StyledWrapperButton>
                    <StyledIcon/>
                </StyledWrapperButton>
            </StyledFlexDiv>
        </>
    );
};


FormFieldPassword.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    clsField: PropTypes.string,
};
