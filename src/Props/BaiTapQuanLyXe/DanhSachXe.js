import React, { Component } from "react";
import Xe from "./Xe";

export default class DanhSachXe extends Component {
  renderXe = () => {
    let mangXe = this.props.mangXe;
    let mangData = mangXe.map((xe, index) => {
      return (
        <div className="col-3 p-4" key={index}>
          <Xe obXe={xe} chonXe={this.props.chonXe} />
        </div>
      );
    });
    return mangData;
  };

  render() {
    return <div className="row">{this.renderXe()}</div>;
  }
}