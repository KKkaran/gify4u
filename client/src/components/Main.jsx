import React, { useState, useEffect, useMemo } from 'react'
import HomeGifs from './HomeGifs'
import Results from './Results'
import RenderGifs from './RenderGifs'
import axios from 'axios'

function Main() {
    //api key from the .env folder
    const APIKEY = process.env.REACT_APP_APIKEY
    const [gifUrl,setGifUrl] = useState("")
    const [loading,setLoading] = useState(false)
    const [keyword, setKeyword] = useState("")
    const [userResults, setUserResults] = useState()
    const [readyImages, setReadyImages] = useState([])
     //the user passed input results will be saved in the userResults
    let images = [] //didnt make this a state var cuz everytime item is pushed no render but once the array is good we save the content to a state var so the final render is done once.
    useEffect(() => {
        if (userResults) {
            userResults.map(r => {
                //console.log(r.images.original.url)
                images.push(r.images.original.url)
            })
            setReadyImages(images)
        }
        //setLoaded(true)
    }, [userResults]) //this runs once the results are back and state changes
    const findGif = (event)=>{
        event.preventDefault()
        console.log("finding gifs...")
        //finding new gifs as per the result...
        setLoading(true)
        getData()
    }
    
    //this below method will call the api and get the related gifs
    const getData = async () => {
        console.log("in getting data")
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${keyword}`
        setGifUrl(url)
        try {
            const data = await axios.get(url)
            setUserResults(data.data.data)
        } catch (error) {
            console.log(error)
        }
    }
    // const go = useMemo(()=> {
    //     console.log("now gif changed")
    //     getData()
    // },[gifUrl])
  return (
    <div className='border border-dark p-3 bg-dark' style={{height:'88vh'}}>
        <form action="" onSubmit={findGif} className='p-2'>
              <input type="text" required value={keyword} onChange={(e) => { setKeyword(e.target.value) }} placeholder='Keyword for gifs...' /> <br /> <br />
            <input type="submit" className='btn btn-info' value='Search Gifs'/>
        </form>
        {loading ? <>
              <div className='d-flex border border-dark p-3 m-2 container'>
                  {/* {go} */}
                  {
                  <RenderGifs images={readyImages}/>
                  //console.log("input put")
                  }
        </div>
    </> : <HomeGifs/>}
    </div>
    )
}

export default Main