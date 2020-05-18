import React, { Component } from "react";
import { connect } from "react-redux";

class GioHang extends Component {
  renderGioHang = () => {
    return this.props.gioHang.map((sanPham, index) => {
      return (
        <tr key={index}>
          <td>{sanPham.maSP}</td>
          <td>
            <img
              src={sanPham.hinhAnh}
              alt={sanPham.maSP}
              style={{ width: 75 }}
            />
          </td>
          <td>{sanPham.tenSP}</td>
          <td>
            <button
              className="btn btn-primary mx-2"
              onClick={() => {
                this.props.tangGiamSoLuong(sanPham.maSP, true);
              }}
            >
              +
            </button>
            {sanPham.soLuong}
            <button
              className="btn btn-primary mx-2"
              onClick={() => {
                this.props.tangGiamSoLuong(sanPham.maSP, false);
              }}
            >
              -
            </button>
          </td>
          <td>{sanPham.gia}</td>
          <td>{sanPham.gia * sanPham.soLuong}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.xoaGioHang(sanPham.maSP);
              }}
            >
              Xoa
            </button>
          </td>
        </tr>
      );
    });
  };

  tinhTongTien = () => {
    return this.props.gioHang.reduce((tongTien, sanPhamGH, index) => {
      return (tongTien += sanPhamGH.soLuong * sanPhamGH.gia);
    }, 0);
  };

  render() {
    return (
      <div className="container pt-5">
        <h3>Gio Hang</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Ma SP</th>
              <th>Hinh Anh</th>
              <th>Ten</th>
              <th>So Luong</th>
              <th>Gia</th>
              <th>Thanh Tien</th>
              <th />
            </tr>
          </thead>
          <tbody>{this.renderGioHang()}</tbody>
          <tfoot>
            <tr>
              <td colSpan="6"></td>
              <td>{this.tinhTongTien().toLocaleString()}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gioHang: state.stateGioHang.gioHang,
  };
};
const mapDispacthToProps = (dispatch) => {
  return {
    xoaGioHang: (maSP) => {
      let action = {
        type: "XOA_SAN_PHAM",
        maSP,
      };
      dispatch(action);
    },
    tangGiamSoLuong: (maSP, tangGiam) => {
      let action = {
        type: "TANG_GIAM_SO_LUONG",
        tangGiam,
        maSP,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispacthToProps)(GioHang);
