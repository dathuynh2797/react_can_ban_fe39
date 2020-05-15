import React, { Component } from "react";

export default class Xe extends Component {
  render() {
    let { hinhAnh, tenSP, gia } = this.props.obXe;
    return (
      <div className="card text-left">
        <img
          className="card-img-top"
          src={hinhAnh}
          alt="123"
          style={{ width: "100%" }}
        />
        <div className="card-body">
          <h4 className="card-title">{tenSP}</h4>
          <p className="card-text">{gia}</p>
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelId"
            onClick={() => {
              this.props.chonXe(this.props.obXe);
            }}
          >
            Xem Chi Tiet
          </button>
        </div>
      </div>
    );
  }
}
