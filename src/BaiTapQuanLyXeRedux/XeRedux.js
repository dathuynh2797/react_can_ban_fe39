import React, { Component } from "react";
import { connect } from "react-redux";

class XeRedux extends Component {
  render() {
    let { hinhAnh, tenSP, gia } = this.props.mangSP;
    return (
      <div>
        <div className="card text-left">
          <img
            className="card-img-top"
            src={hinhAnh}
            alt="123"
            style={{ width: "100%" }}
          />
          <div className="card-body">
            <h4 className="card-title">{tenSP}</h4>
            <p className="card-text">{gia}</p>
            <button
              className="btn btn-success"
              data-toggle="modal"
              data-target="#modelId"
              onClick={() => {
                this.props.xemChiTiet(this.props.mangSP);
              }}
            >
              Xem Chi Tiet
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//     return
// }
const mapDispatchtoProps = (dispatch) => {
  return {
    xemChiTiet: (thongTinXe) => {
      let action = {
        type: "XEM_CHI_TIET",
        thongTinXe: thongTinXe,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchtoProps)(XeRedux);
