import React, { Component } from "react";
import DanhSachCuoc from "./DanhSachCuoc";
import XucSac from "./XucSac";

export default class BaiTapGameBauCua extends Component {
  render() {
    return (
      <div className="container-fluid">
        <XucSac />
        <DanhSachCuoc />
      </div>
    );
  }
}
