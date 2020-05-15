import React, { Component } from "react";
import DanhSachKinh from "./DanhSachKinh";
import { connect } from "react-redux";

class BaiTapThuKinh extends Component {
  mangSP = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 4,
      price: 30,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 5,
      price: 30,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 6,
      price: 30,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 7,
      price: 30,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 8,
      price: 30,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 9,
      price: 30,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  render() {
    const keyFrame = `@keyframes changeGlass${Date.now()}{
        from{
            width: 0;
        }
        to{
            width: 150;
        }
    }`;

    const styleGlasses = {
      width: 200,
      position: "absolute",
      top: 127,
      left: 114,
      opacity: 0.8,
      animation: `changeGlass${Date.now()} 1s`,
    };

    return (
      <div style={{ backgroundImage: "url(./glassesImage/backgroud.jpg)" }}>
        <div style={{ backgroundColor: "rgba(0,0,0,.5)", minHeight: 2000 }}>
          <h3>Bai Tap Thu Kinh</h3>
          <div className="container-fluid row">
            <div className="col-6">
              <img
                src="./glassesImage/model.jpg"
                style={{ width: 400 }}
                alt="123"
              />
              <style>{keyFrame}</style>
              <img
                src={this.props.thongTinKinh.url}
                style={styleGlasses}
                alt="123"
              />
            </div>
            <div className="col-6">
              <DanhSachKinh mangSP={this.mangSP} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    thongTinKinh: state.stateKinh.thongTinKinh,
  };
};

export default connect(mapStateToProps, null)(BaiTapThuKinh);
