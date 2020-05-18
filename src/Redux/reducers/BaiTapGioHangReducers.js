const stateGioHang = {
  gioHang: [],
};

const BaiTapGioHangReducers = (state = stateGioHang, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      let gioHangUpdate = [...state.gioHang];
      let index = gioHangUpdate.findIndex(
        (sanPham) => sanPham.maSP === action.spGioHang.maSP
      );
      if (index !== -1) {
        gioHangUpdate[index].soLuong += 1;
      } else {
        gioHangUpdate.push(action.spGioHang);
      }
      state.gioHang = gioHangUpdate;
      return { ...state };
    }

    case "XOA_SAN_PHAM": {
      let gioHangUpdate = [...state.gioHang];
      let index = gioHangUpdate.findIndex(
        (sanPham) => sanPham.maSP === action.maSP
      );
      if (index !== -1) {
        gioHangUpdate.splice(index, 1);
      }
      state.gioHang = gioHangUpdate;
      return { ...state };
    }
    case "TANG_GIAM_SO_LUONG": {
      let gioHangUpdate = [...state.gioHang];
      let index = gioHangUpdate.findIndex(
        (sanPham) => sanPham.maSP === action.maSP
      );
      if (index !== -1 && action.tangGiam) {
        gioHangUpdate[index].soLuong += 1;
      } else if (index !== -1 && !action.tangGiam) {
        if (gioHangUpdate[index].soLuong === 0) {
          alert("err");
        } else {
          gioHangUpdate[index].soLuong -= 1;
        }
      }
      state.gioHang = gioHangUpdate;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default BaiTapGioHangReducers;
