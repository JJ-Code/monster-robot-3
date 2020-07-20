import React from 'react'

const SearchBox = ({ onSearchChange }) => {
  return (
    <div className='p2'>
      <input
        aria-label='Search Robots'
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='Search Robots'
        onChange={onSearchChange} />
    </div>
  )
}

export default SearchBox

//use for screen readers aria-label='Search Robots'
