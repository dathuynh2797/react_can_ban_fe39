import React, { Component } from "react";
import Kinh from "./Kinh";

export default class DanhSachKinh extends Component {
  renderKinh = () => {
    return this.props.mangSP.map((sp, index) => {
      return (
        <div key={index} className="col-4">
          <Kinh mangSP={sp} />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderKinh()}</div>
      </div>
    );
  }
}
