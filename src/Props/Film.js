import React, { Component } from "react";

export default class Film extends Component {
  render() {
    let phim = this.props.obPhim;
    return (
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
    );
  }
}
