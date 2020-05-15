import { combineReducers } from "redux";
import BaiTapQuanLyXeReducer from "./BaiTapQuanLyXeReducer";
import stateKinh from "./BaiTapKinhReducers";

//rootReducers là state tông của toàn ứng dụng quản lý các state con
const rootReducer = combineReducers({
  stateModal: BaiTapQuanLyXeReducer,
  //ES6 impport
  stateKinh,
});

export default rootReducer;
