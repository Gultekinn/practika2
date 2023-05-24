import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const {id}=useParams()
    const [detailItem,SetdetailItem]=useState([])
    axios.get(`http://localhost:8080/${id}`).then((res)=>{
        SetdetailItem(res.data)
    })
  return (
    <div>
      {
        detailItem.map((item,index)=>{
            return(
                <div key={index} className="card">
                <div className="card__img">
                    <img src="https://preview.colorlib.com/theme/adopted/img/work_thumb_2.jpg" alt="" />
               
                </div>
                <h2>{item.name}</h2>
                <p>{item.price}azn</p>

            </div>
            )
        })
      }
    </div>
  )
}

export default Detail
