import axios from "axios";

class PhimService {
  layDanhSachPhim = () => {
    return axios({
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
    });
  };
}

export const phimService = new PhimService();
// export const { layDanhSachPhim } = PhimService;
