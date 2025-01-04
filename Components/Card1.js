import React from 'react'
import { CDN_LINK } from '../Constant/Logo'

const Card1 = (props) => {
let {cloudinaryImageId,name,avgRating,sla,cuisines,areaName} = props.resData.info
  return (
    <div className='card'>
      <div className="img">
        <img src={CDN_LINK + cloudinaryImageId} alt="" />
      </div>
      <div className="content">
        <h3>{name}</h3>
        <p>
          <span>{avgRating}</span>.{sla.slaString}
        </p>
        <p>{cuisines}</p>
        <p>{areaName}</p>
      </div>
    </div>
  )
}

export default Card1
