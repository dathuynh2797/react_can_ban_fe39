import React, { Component } from "react";
import { connect } from "react-redux";
import { chonQuanCuoc } from "../Redux/actions/BaiTapBauCuaAction";

class DanhSachCuoc extends Component {
  tangDiemCuoc = (ma) => {
    this.props.dispatch(chonQuanCuoc(ma));
  };
  renderDanhSachCuoc = () => {
    let { danhSachCuoc } = this.props;
    return danhSachCuoc.map((ob, index) => {
      return (
        <div
          className="col-4 text-center border border-dark"
          key={index}
          onClick={() => {
            this.tangDiemCuoc(ob.ma);
          }}
          style={{ cursor: "pointer" }}
        >
          <img src={ob.hinhAnh} alt={ob.ma} />
          <div className="text-center">
            <h4 className="">{ob.diemCuoc}</h4>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container-fluid row">{this.renderDanhSachCuoc()}</div>
    );
  }
}

const mapStateToProps = (state) => ({
  danhSachCuoc: state.gameState.danhSachCuoc,
});

export default connect(mapStateToProps)(DanhSachCuoc);
