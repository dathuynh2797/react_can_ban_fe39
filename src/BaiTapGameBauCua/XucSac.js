import React, { Component } from "react";
import { connect } from "react-redux";
import { doXiNgau } from "../Redux/actions/BaiTapBauCuaAction";

class XucSac extends Component {
  renderXucXac = () => {
    let { xucSac } = this.props;
    return xucSac.map((xucSac, index) => {
      return (
        <img
          src={xucSac.hinhAnh}
          alt={xucSac.ma}
          key={index}
          style={{ width: 50 }}
        />
      );
    });
  };
  handlePlay = () => {
    this.props.dispatch(doXiNgau());
  };
  render() {
    return (
      <div className="container-fluid">
        <h3 className="text-center text-success">Bai Tap Game Bau Cua</h3>
        <div className="row">
          <div className="col-2">
            <button
              className="btn btn-success"
              onClick={() => {
                this.handlePlay();
              }}
            >
              Play Game
            </button>
          </div>
          <div className="col-8 text-center">{this.renderXucXac()}</div>
          <div className="col-2">
            <h3>{this.props.diemTong} $</h3>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    xucSac: state.gameState.dsXucSac,
    diemTong: state.gameState.tongDiem,
  };
};

export default connect(mapStateToProps)(XucSac);
