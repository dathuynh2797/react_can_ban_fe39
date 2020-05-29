import { combineReducers } from "redux";
import BaiTapQuanLyXeReducer from "./BaiTapQuanLyXeReducer";
import stateKinh from "./BaiTapKinhReducers";
import stateGioHang from "./BaiTapGioHangReducers";
import gameState from "./BaiTapGameBauCuaReducers";
import phimState from "./BaiTapQuanLyPhimReducers";

//rootReducers là state tông của toàn ứng dụng quản lý các state con
const rootReducer = combineReducers({
  stateModal: BaiTapQuanLyXeReducer,
  //ES6 impport
  stateKinh,
  stateGioHang,
  gameState,
  phimState,
});

export default rootReducer;
