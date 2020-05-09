import React, { Component } from "react";

export default class BaiTapState extends Component {
  state = {
    srcImg: "./CarBasic/products/red-car.jpg",
  };
  changeColor = (imgSrcColor) => {
    this.setState({
      srcImg: imgSrcColor,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img
              src={this.state.srcImg}
              alt="red-car"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-6">
            <div className="card text-primary bg-light">
              <div className="card-header">Hãy Chọn Màu Xe</div>
              <div className="card-body">
                <div
                  className="row border border-success mt-2 pt-2 pb-2"
                  onClick={() => {
                    this.changeColor("./CarBasic/products/red-car.jpg");
                  }}
                >
                  <div className="col-2">
                    <img
                      src="./CarBasic/icons/icon-red.jpg"
                      alt="red-icon"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="col-10 text-dark">
                    <h3>Màu sơn đỏ</h3>
                    <p>Xe được phủ sơn đỏ ...</p>
                  </div>
                </div>

                <div
                  className="row border border-success mt-2 pt-2 pb-2"
                  onClick={() => {
                    this.changeColor("./CarBasic/products/black-car.jpg");
                  }}
                >
                  <div className="col-2">
                    <img
                      src="./CarBasic/icons/icon-black.jpg"
                      alt="red-icon"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="col-10 text-dark">
                    <h3>Màu sơn đen</h3>
                    <p>Xe được phủ sơn đen ...</p>
                  </div>
                </div>

                <div
                  className="row border border-success mt-2 pt-2 pb-2"
                  onClick={() => {
                    this.changeColor("./CarBasic/products/steel-car.jpg");
                  }}
                >
                  <div className="col-2">
                    <img
                      src="./CarBasic/icons/icon-steel.jpg"
                      alt="red-icon"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="col-10 text-dark">
                    <h3>Màu sơn steel</h3>
                    <p>Xe được phủ sơn steel ...</p>
                  </div>
                </div>

                <div
                  className="row border border-success mt-2 pt-2 pb-2"
                  onClick={() => {
                    this.changeColor("./CarBasic/products/silver-car.jpg");
                  }}
                >
                  <div className="col-2">
                    <img
                      src="./CarBasic/icons/icon-silver.jpg"
                      alt="red-icon"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="col-10 text-dark">
                    <h3>Màu sơn bạc</h3>
                    <p>Xe được phủ sơn bạc ...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
