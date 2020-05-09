import React, { Component } from "react";
import Data from "../../Data/DataFilms.json";

export default class BaiTapRenderFilms extends Component {
  renderFilms = () => {
    console.log(Data);
    let mangPhim = Data.map((phim, index) => {
      return (
        <div className="col-2 mt-5" key={index}>
          <div className="card text-dark bg-light">
            <img
              className="card-img-top"
              src={phim.hinhAnh}
              alt={phim.tenPhim}
              style={{ height: 400 }}
            />
            <div className="card-body" style={{ height: 150 }}>
              <h4 className="card-title" style={{ height: 50 }}>
                {phim.tenPhim}
              </h4>
              <p className="card-text">
                {phim.moTa.length > 40 ? (
                  <p> {phim.moTa.substr(0, 40)} ... </p>
                ) : (
                  <p>{phim.moTa}</p>
                )}
              </p>
            </div>
          </div>
        </div>
      );
    });
    return mangPhim;
  };
  render() {
    return (
      <div>
        <div style={{ background: "rgba(0,0,0,.5)" }}>
          <div className="container-fludid">
            <h3>List Films</h3>
            <div className="row px-5">{this.renderFilms()}</div>
          </div>
        </div>
      </div>
    );
  }
}
