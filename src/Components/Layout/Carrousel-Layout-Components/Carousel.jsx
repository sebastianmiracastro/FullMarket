import React, { useEffect, useState } from "react";
import "./Style.css";
import data from "./data.json";
import { InnerItem } from "./InnerItem";
import { IdicatorsButton } from "./IdicatorsButton";
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Carousel = () => {


  // const URL = "https://fullmarket-provitional-backend.herokuapp.com/products/getallproducts";
  
  // const [dataAPI, setDataAPI] = useState([]);
  
  // const cargarProductos = async () => {
  //   await fetch(URL)
  //   .then((res) => res.json())
  //   .then((data) => setDataAPI(data));
  // };
  // useEffect(() => {
  //   cargarProductos();
  // }, []);

  return (
    <div
      id="myCarousel"
      className="carousel slide my-0"
      data-bs-ride="carousel"
    >

      <InnerItem data={data.sliders} />

      <IdicatorsButton data={data.sliders} />

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
