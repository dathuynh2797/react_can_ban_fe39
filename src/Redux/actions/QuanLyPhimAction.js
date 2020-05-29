import axios from "axios";

export const layDanhSachPhimAction = () => {
  return (dispacth) =>
    axios({
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
    })
      .then((response) =>
        dispacth({
          type: "LAY_DANH_SACH_PHIM",
          danhSachPhim: response.data,
        })
      )
      .catch((error) => console.log(error));
};
