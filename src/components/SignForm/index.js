import React from 'react';
// import PropTypes from 'prop-types';

const SignForm = () => {
    return (
        <form>
            <label>Pseudo
                <input
                    type="text"
                    className="chat-login"
                    value="salut"
                    onChange={(evt) => {
                        console.log(evt.target.value)
                    }}
                />
            </label>
            <button type="button">Entrer dans le chat</button>
        </form>
    );
};

export default SignForm;