import React, { Component } from "react";
import Film from "./Film";

export default class DanhSachPhim extends Component {
  //Sự khác biệt giữ state và props

  //State dùng để lưu trữ giá trị thay đổi trong components

  //Props dùng để nhận giá trị từ comp cha, và không thể gán lại giá trị

  renderFilm = () => {
    let Data = this.props.mangPhim;
    let arr = Data.map((phim, index) => {
      return (
        <div className="col-2 mt-5" key={index}>
          <Film obPhim={phim} />
        </div>
      );
    });
    return arr;
  };

  render() {
    return (
      <div className="container-fluid">
        <h3 className="text-center">Danh Sach Phim</h3>
        <div className="row">{this.renderFilm()}</div>
      </div>
    );
  }
}
