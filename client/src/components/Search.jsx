import React from 'react'

function Search() {
    const findGif = (event)=>{
        event.preventDefault()
        console.log("finding gifs...")
    }
  return (
    <div className='border border-dark p-3 m-2'>
        <form action="" onSubmit={findGif} className='p-2'>
            <input type="text" required placeholder='Search gifs' /> <br /> <br />
            <input type="submit" value='Find'/>
        </form>
    </div>
  )
}

export default Search