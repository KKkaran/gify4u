import React, {useState} from 'react'

function Results({ keyword, search }) {
  
  const [gif, setgif] = useState(keyword)
  console.log(search + " is vlaue of search")
  search && setgif(keyword);


  return (
    <>
     <div className='border border-dark p-3 m-2'>
        <h3>Results for {gif}</h3>
        <h4>More Results for {gif} </h4>
        <h4>More More Results...</h4>
    </div>
    </>
  )
}
export default Results
