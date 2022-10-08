import React from 'react'

function RenderGifs({images}) {
  
    return images.map(image => {
          return (
                <div className='p-2' >
              <img src={image} width='300px' height='250px' alt="Logo" />
                </div>
          )
    })
  }
export default RenderGifs