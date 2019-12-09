import React from 'react';

const FilterBox = ( {searchChange} ) => {
  return (
    <div>
      <input
      className='pa3 ba b--black bg-light-silver'
      type='search'
      placeholder='Search Characters'
      onChange={searchChange}
      />
    </div>
  );
}

export default FilterBox;
