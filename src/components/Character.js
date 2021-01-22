//Write your Character component here
import React from 'react';

export default function Character(props) {
    const {character} = props;

    return (
        <div>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
            <p>{character.gender}</p>
        </div>
    )
}