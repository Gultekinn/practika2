import React, { useContext, useEffect } from 'react'
import { MainContext } from '../../../context/context'
import axios from 'axios'
const Wishlist = () => {
    const {wishlistItem,SetwishlistItem}=useContext(MainContext)
   
    useEffect=(()=>{
        axios.get("http://localhost:8080/").then((res)=>{
            console.log(res.data)
        })
    })
  return (
    <div>
      {
        wishlistItem.map((item,index)=>{
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

export default Wishlist
