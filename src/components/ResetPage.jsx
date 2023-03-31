import React from 'react'

const ResP= () =>{
  window.location.reload(false)
}

export const ResetPage = () => {
  return (
    <button className='btnres' onClick={ResP}>Reset</button>
  )
}
