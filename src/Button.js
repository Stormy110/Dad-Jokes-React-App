import React from 'react';

function Button(props) {
    return (
        <nav>
            <button onClick={
                props.getJoke
            }>See a joke</button>
        </nav>
    )
};

export default Button;