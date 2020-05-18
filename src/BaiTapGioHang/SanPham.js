import React, { Component } from "react";
import { connect } from "react-redux";

class SanPham extends Component {
  render() {
    let { hinhAnh, gia, tenSP } = this.props.mangSp;
    return (
      <div className="card text-dark">
        <img className="card-img-top" src={hinhAnh} alt={tenSP} />
        <div className="card-body">
          <h4 className="card-title">{tenSP}</h4>
          <p className="card-text">{gia}</p>
          <button
            className="btn btn-success"
            onClick={() => {
              this.props.themGioHang(this.props.mangSp);
            }}
          >
            Them gio hang
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    themGioHang: (sanPham) => {
      let action = {
        type: "THEM_GIO_HANG",
        //Payload dung toan tu "..."
        spGioHang: {
          ...sanPham,
          soLuong: 1,
        },
        //Payload day du
        // spGioHang: {
        //   maSP: sanPham.maSP,
        //   tenSP: sanPham.tenSP,
        //   gia: sanPham.gia,
        //   hinhAnh: sanPham.hinhAnh,
        //   soLuong: 1,
        // },
      };
      dispatch(action);
      //   console.log(sanPham);
    },
  };
};

export default connect(null, mapDispatchToProps)(SanPham);
