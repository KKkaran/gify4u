import React,{useEffect, useState} from 'react'
import axios from 'axios'
import RenderGifs from './RenderGifs'
import {motion} from 'framer-motion'
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
  let imagess = images.map(i=>i);
  return (
    <div className='text-light' style={{overflow:'hidden'}}>
      {loaded ? (
        <>
          <motion.div animate={{ x: -20000 }} transition={{ delay: 2, duration: 90 }} className='d-flex border border-dark p-3 m-2'>
          <RenderGifs images={images}/>
          </motion.div>
          <motion.div animate={{ x: -20000}} transition={{delay:2, duration:90}} className='d-flex border border-dark p-3 m-2' style={{ order: -1}}>
            <RenderGifs images={imagess.reverse()}  />
          </motion.div>
        </>

      ):(<h3>LOADING...</h3>)}
    </div>
  )
}

export default HomeGifs