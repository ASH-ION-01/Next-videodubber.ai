import React from 'react'
import Dropdown from './Dropdown'

const Heading = () => {
  return (
    <div>
      <div>
        <img src='/3153ed76-d013-4a2b-a7ac-f2f4cbfc3cc4.avif' alt=''></img>
      </div>
      <div className=' flex flex-row '>
        <p className=' font-extrabold'>VideoDubber - Fast Video Translator</p>
        <Dropdown/>  
      </div>
    </div>
  )
}

export default Heading
