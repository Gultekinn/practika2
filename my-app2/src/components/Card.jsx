import React, { useContext, useEffect, useState } from "react";
import "../components/Card.scss";
import axios from "axios";
import { MainContext } from "../context/context";
import { Link } from "react-router-dom";
const Card = () => {
  const [data, setData] = useState([]);
  const { wishlistItem, SetwishlistItem } = useContext(MainContext);
  useEffect(() => {
    axios.get("http://localhost:8080/").then((res) => {
      setData((res.data));
    }, []);
  });
  return (
    <div>
      <div className="cards">
        {data &&
          data.map((item, index) => {
            return (
              <div className="card">
                <div className="card__img">
                  <img
                    src="https://preview.colorlib.com/theme/adopted/img/work_thumb_2.jpg"
                    alt=""
                  />
                </div>
                <h2>{item.name}</h2>
                <p>{item.price}azn</p>
                <button
                  onClick={() => {
                    SetwishlistItem([...wishlistItem, item]);
                  }}
                  id="btnn"
                >
                  Wishlist
                </button>
                <button
                  id="btnn"
                  onClick={() => {
                    axios
                      .delete(`http://localhost:8080/${item._id}`)
                      .then((res) => {
                        console.log("delete");
                      });
                  }}
                >
                  delete
                </button>
               
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Card;
