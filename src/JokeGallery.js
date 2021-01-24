import React from 'react';

function JokeGallery(props) {
    return (
        <section>
            <h3>All the jokes:</h3>
                {
                    props.jokes.map(joke => (
                        <p key={joke.id}>{joke.joke}<button onClick={() => {props.deleteJoke(joke.id)}}>X</button></p>
                ))
                }

        </section>
    )
};

export default JokeGallery;