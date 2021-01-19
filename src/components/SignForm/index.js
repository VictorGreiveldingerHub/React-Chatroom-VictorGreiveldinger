import React from 'react';
// import PropTypes from 'prop-types';

const SignForm = () => {
    return (
        <form>
            <span>Pseudo :</span>
            <input placeholder="Saisir un pseudo" />
            <button type="button">Entrer dans le chat</button>
        </form>
    );
};

export default SignForm;