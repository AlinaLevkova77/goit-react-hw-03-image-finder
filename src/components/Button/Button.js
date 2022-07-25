import React from "react"; 
import PropTypes from 'prop-types';
import { ButtonWrapper,Btn } from 'components/Button/Button.styled.js';

export const Button = ({ onClick }) => {
     return(
    <ButtonWrapper>
        <Btn type="submit" onClick={onClick}>
            Load more
        </Btn>
        </ButtonWrapper>
     )
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};

