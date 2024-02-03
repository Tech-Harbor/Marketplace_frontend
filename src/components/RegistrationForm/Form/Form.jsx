import {FormField} from './FormField.jsx';
import {FormFieldPassword} from "./FormFieldPassword.jsx";

import {StyledForm, StyledButton} from './Form.styled';


export const Form = () => {
    return (
        <StyledForm>
            <FormField name="name" id="name" text="Ваше ім’я"/>
            <FormField name="surname" id="surname" text="Ваше прізвище"/>
            <FormField name="login" id="login" text="Введіть електронну пошту чи номер телефону"/>

            <FormFieldPassword
                name="password"
                id="password"
                text="Пароль"
                clsField="password"
            />
            <FormFieldPassword
                name="repeat-password"
                id="repeat-password"
                text="Повторіть пароль"
                clsField="repeat-password"
            />

            <StyledButton>
                Зареєструватися
            </StyledButton>
        </StyledForm>
    );
};
