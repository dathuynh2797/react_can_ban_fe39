import { DO_XI_NGAU, CHON_QUAN_CUOC } from "../constants/GameBauCuaConstants";

export const chonQuanCuoc = (ma) => ({ type: CHON_QUAN_CUOC, ma });
export const doXiNgau = () => ({ type: DO_XI_NGAU });
