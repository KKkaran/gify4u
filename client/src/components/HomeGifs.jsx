import React,{useEffect, useState} from 'react'
import axios from 'axios'
import RenderGifs from './RenderGifs'

function HomeGifs() {
  const Trending_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_APIKEY}`
  const [results, setResults] = useState()
  const [loaded,setLoaded] = useState(false)
  const [images,setImages] = useState([])
  let html
  useEffect(() => {
    getTrendingGifs()
  }, []) //this runs on initial render to get the gifs
  
  useEffect(() => {
    if (results) {
      results.map((r,index) => {
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
 
  return (
    <div className=''>
      {loaded ? (
        
        <div className='d-flex border border-dark p-3 m-2'>
          <RenderGifs images={images} />  
        </div>
  

      ):(<h3>LOADING...</h3>)}
    </div>
  )
}

export default HomeGifs