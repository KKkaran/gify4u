import React, { useState } from 'react'
import HomeGifs from './HomeGifs'
import Results from './Results'

function Main() {

    const [loading,setLoading] = useState(false)
    const [keyword,setKeyword] = useState("")

    const findGif = (event)=>{
        event.preventDefault()
        console.log("finding gifs...")
        //finding new gifs as per the result...
        setLoading(true)
    }
  return (
    <div className='border border-dark p-3 m-2'>
        <form action="" onSubmit={findGif} className='p-2'>
            <input type="text" required value={keyword} onChange={(e)=>{setKeyword(e.target.value)}} placeholder='Keyword for gifs...' /> <br /> <br />
            <input type="submit" className='btn btn-info' value='Search Gifs'/>
        </form>
        {loading ? <Results keyword={keyword}></Results> : <HomeGifs/>}
    </div>
    )
}

export default Main