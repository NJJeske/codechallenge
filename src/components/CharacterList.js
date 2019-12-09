import React from 'react';
import Character from './Character';

const CharacterList = ({ characterList }) => {
  const sortCharacters = characterList.sort((a, b) => {
      return a.name.localeCompare(b.name);
  })
  return (
    <div>
      {
        characterList.map((character, i) => {
          return (
            <Character
            name={ sortCharacters[i].name }
            image={ sortCharacters[i].image }
            status={ sortCharacters[i].status }
            />
            );
          })
        }
    </div>
  );
}

export default CharacterList;
