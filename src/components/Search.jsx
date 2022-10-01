import React from 'react'

function Search() {
  return (
    <div className='border border-dark p-3 m-2'>
        <form action="" className='p-2'>
            <input type="text" placeholder='Type a word to find cool gifs' /> <br /> <br />
            <input type="submit" value='Find'/>
        </form>
    </div>
  )
}

export default Search