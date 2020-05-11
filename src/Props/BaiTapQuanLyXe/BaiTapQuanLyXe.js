import React, { Component } from "react";
import DanhSachXe from "./DanhSachXe";
import Modal from "./Modal";

export default class BaiTapQuanLyXe extends Component {
  state = {
    thongTinXe: {
      maSP: "",
      tenSP: "",
      hinhAnh: "",
      gia: "",
    },
  };
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
      maSP: 3,
      tenSP: "Steel car",
      hinhAnh: "./CarBasic/products/steel-car.jpg",
      gia: 3000,
    },
  ];

  chonXe = (xeChiTiet) => {
    this.setState({
      thongTinXe: xeChiTiet,
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <h3 className="text-center">Danh Sach Xe</h3>
        <DanhSachXe mangXe={this.mangSP} chiTiet={this.chonXe} />
        <Modal thongTin={this.state.thongTinXe} />
      </div>
    );
  }
}
