import React, { useState } from 'react'
import HomeGifs from './HomeGifs'
import Results from './Results'

function Main() {
    //api key from the .env folder
    const APIKEY = process.env.REACT_APP_APIKEY

    console.log(process.env.REACT_APP_APIKEY)
    const [loading,setLoading] = useState(false)
    const [keyword,setKeyword] = useState("")
    const findGif = (event)=>{
        event.preventDefault()
        console.log("finding gifs...")
        //finding new gifs as per the result...
        setLoading(true)
        getData();
    }
    //this below method will call the api and get the related gifs
    const getData = () => {
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${keyword}`
        console.log(url)
    }
  return (
    <div className='border border-dark p-3 m-2' style={{height:'82vh'}}>
        <form action="" onSubmit={findGif} className='p-2'>
              <input type="text" required value={keyword} onChange={(e) => { setKeyword(e.target.value) }} placeholder='Keyword for gifs...' /> <br /> <br />
            <input type="submit" className='btn btn-info' value='Search Gifs'/>
        </form>
        {loading ? <>
        <div className='border border-dark p-3 m-2'>
            <h3>Results for {keyword}</h3>
            <h4>More Results for {keyword} </h4>
            <h4>More More Results...</h4>
        </div>
    </> : <HomeGifs/>}
    </div>
    )
}

export default Main