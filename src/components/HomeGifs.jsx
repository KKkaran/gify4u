import React,{useEffect, useState} from 'react'
import axios from 'axios'

function HomeGifs() {
  const Trending_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_.APIKEY}`
  const [results, setResults] = useState()
  const [loaded,setLoaded] = useState(false)
  const [images,setImages] = useState([])
  let html
  useEffect(() => {
    getTrendingGifs()
  }, []) //this runs on initial render to get the gifs
  
  useEffect(() => {
    if (results) {
      results.map(r => {
        //console.log(r.images.original.url)
        setImages(i=>[...i,r.images.original.url])
      })
      
    }
    setLoaded(true)
  }, [results]) //this runs once the results are back and state changes
  
  const getTrendingGifs = async () => {
    try {
      const data = await axios.get(Trending_URL)
      setResults(data.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  const renderGifs = () => {
    return images.map(image => {
              return (
                <div>
                  <img src={image} alt="Logo" /> 
                </div>
              )
            })
  }
  return (
    <>
      {loaded ? (
        <div className='border border-dark d-flex  '>
          {
            renderGifs()
          }
        </div>

      ):(<h3>LOADING...</h3>)}
    </>
  )
}

export default HomeGifs