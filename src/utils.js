import Axios from "axios";

export function Ps (itemLength,itemWidth) {
    return itemLength*itemWidth
}

export function pS (plancheL, plancheW) {
    return plancheL*plancheW
}

export function pSE (plancheL, plancheEsp) {
    return plancheL*plancheEsp
}
export function pST (Ps, coef ) {
    return Ps*coef
}

//CRUD Request

export const Del = (e) => {
    Axios.delete(`/api/${e.target.value}/delete`, { data: { id: e.target.id }}).then(
      (res) => {
        alert(res.data);
      }
    );
  };