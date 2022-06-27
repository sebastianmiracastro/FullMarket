import React from "react";
import "./Style.css";
import * as bootstrap from 'bootstrap';

export const InnerItem = ({ data }) => {
  return (
    <>
    <div className="carousel-inner">
      {data.map((item, key) =>
        key == 0 ? (
          <div className="carousel-item active" key={key}>
            <img src={item.imgProductURL} alt={item.name} />
            <div className="container">
              <div className="carousel-caption cont-title-text">
                {item.name ? <h1>{item.name}</h1> : ""}
                {item.description ? <p> {item.description} </p> : ""}
              </div>
            </div>
          </div>
        ) : key < 6 ? (
          <div className="carousel-item" key={key}>
            <img src={item.imgProductURL} alt={item.name} />
            <div className="container">
              <div className="carousel-caption cont-title-text">
                {item.name ? <h1>{item.name}</h1> : ""}
                {item.description ? <p> {item.description} </p> : ""}
              </div>
            </div>
          </div>
        )
        : ""
      )}
    </div>
  </>
  );
};
