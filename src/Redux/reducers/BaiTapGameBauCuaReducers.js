import { DO_XI_NGAU, CHON_QUAN_CUOC } from "../constants/GameBauCuaConstants";

const gameState = {
  tongDiem: 100,
  danhSachCuoc: [
    { ma: "bau", hinhAnh: "./gameImg/bau.PNG", diemCuoc: 0 },
    { ma: "cua", hinhAnh: "./gameImg/cua.PNG", diemCuoc: 0 },
    { ma: "tom", hinhAnh: "./gameImg/tom.PNG", diemCuoc: 0 },
    { ma: "ca", hinhAnh: "./gameImg/ca.PNG", diemCuoc: 0 },
    { ma: "ga", hinhAnh: "./gameImg/ga.PNG", diemCuoc: 0 },
    { ma: "nai", hinhAnh: "./gameImg/nai.PNG", diemCuoc: 0 },
  ],
  dsXucSac: [
    { ma: "bau", hinhAnh: "./gameImg/bau.PNG" },
    { ma: "bau", hinhAnh: "./gameImg/bau.PNG" },
    { ma: "bau", hinhAnh: "./gameImg/bau.PNG" },
  ],
};

export default (state = gameState, action) => {
  switch (action.type) {
    case CHON_QUAN_CUOC:
      let danhSachCuocMoi = [...state.danhSachCuoc];
      let index = danhSachCuocMoi.findIndex(
        (quanCuoc) => quanCuoc.ma === action.ma
      );
      if (index !== -1) {
        if (state.tongDiem > 0) {
          danhSachCuocMoi[index].diemCuoc += 10;
          state.tongDiem -= 10;
        }
      }
      state.danhSachCuoc = danhSachCuocMoi;
      return { ...state };

    case DO_XI_NGAU:
      let mangXucSacNgauNhien = [];
      for (let i = 0; i < 3; i++) {
        let soNgauNhien = Math.floor(Math.random() * 6);
        let xsNgauNhien = {
          ma: state.danhSachCuoc[soNgauNhien].ma,
          hinhAnh: state.danhSachCuoc[soNgauNhien].hinhAnh,
        };
        mangXucSacNgauNhien.push(xsNgauNhien);
      }
      state.dsXucSac = mangXucSacNgauNhien;
      mangXucSacNgauNhien.forEach((xsNgauNhien, index) => {
        let iQuanCuoc = state.danhSachCuoc.findIndex(
          (quanCuoc) => quanCuoc.ma === xsNgauNhien.ma
        );
        if (iQuanCuoc !== -1) {
          state.tongDiem += state.danhSachCuoc[iQuanCuoc].diemCuoc;
        }
      });
      state.danhSachCuoc.forEach((quanCuoc, index) => {
        let iXucSac = mangXucSacNgauNhien.findIndex(
          (xsNgauNhien) => xsNgauNhien.ma === quanCuoc.ma
        );
        if (iXucSac !== -1) {
          state.tongDiem += quanCuoc.diemCuoc;
        }
      });
      state.danhSachCuoc = state.danhSachCuoc.map((quanCuoc, index) => {
        return { ...quanCuoc, diemCuoc: 0 };
      });
      return { ...state };

    default:
      return state;
  }
};
