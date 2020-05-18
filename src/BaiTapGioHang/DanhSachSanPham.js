import React, { Component } from "react";
import SanPham from "./SanPham";

export default class DanhSachSanPham extends Component {
  mangSP = [
    {
      maSP: 1,
      tenSP: "black car",
      hinhAnh: "./CarBasic/products/black-car.jpg",
      gia: 1000,
    },
    {
      maSP: 2,
      tenSP: "red car",
      hinhAnh: "./CarBasic/products/red-car.jpg",
      gia: 2000,
    },
    {
      maSP: 3,
      tenSP: "silver car",
      hinhAnh: "./CarBasic/products/silver-car.jpg",
      gia: 3000,
    },
    {
      maSP: 4,
      tenSP: "Steel car",
      hinhAnh: "./CarBasic/products/steel-car.jpg",
      gia: 3000,
    },
  ];

  renderSanPham = () => {
    return this.mangSP.map((sanPham, index) => {
      return (
        <div className="col-3" key={index}>
          <SanPham mangSp={sanPham} />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <h3 className="text-center">Danh Sach San Pham</h3>
        <div className="row">{this.renderSanPham()}</div>
      </div>
    );
  }
}
