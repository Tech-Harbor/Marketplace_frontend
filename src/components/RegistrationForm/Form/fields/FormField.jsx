import PropTypes from 'prop-types';

import {StyledInput, StyledLabel} from './fields.styled.js';

export const FormField = ({name, id, text}) => {
    return (
        <>
            <StyledLabel label={name} id={id}>
                {text}
            </StyledLabel>

            <StyledInput
                name={name}
                id={name}
                // value={name}
                // onChange={e => setName(e.target.value)}
            />
        </>
    );
};


FormField.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    clsField: PropTypes.string,
};


