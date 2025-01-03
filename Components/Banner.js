import React from 'react'
import { CDN_LINK } from '../Constant/Logo'

const Banner = (props) => {
    
  return (
   <div className="img_card">
    <img src={ CDN_LINK + props.resData.imageId} alt="" />
   </div>
  )
}

export default Banner
