import React from 'react';

const Character = ( { name, image, status }) => {
  return (
    <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='character' src={`${image}`} />
      <div>
        <h2>{name}</h2>
        <p>{status}</p>
      </div>
    </div>
  );
}

export default Character;
