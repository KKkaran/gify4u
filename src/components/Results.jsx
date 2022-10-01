import React from 'react'

function Results({keyword}) {
  return (
    <div className='border border-dark p-3 m-2'>
        <h3>Results for {keyword}</h3>
        <h4>More Results for {keyword} </h4>
        <h4>More More Results...</h4>
    </div>
  )
}
export default Results
