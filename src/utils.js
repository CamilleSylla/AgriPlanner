import { MenuItem } from "@material-ui/core";
import Axios from "axios";

export function Ps (itemLength,itemWidth) {
    return itemLength*itemWidth
}

export function plancheCalc (data) {
  const Sp = data.lengthP*data.widthP
  const Sr = data.widthP*data.spaceRow
  const Npl = Sp/Sr
  const Qpl =  data.quantity/data.row
  const R = Qpl/Npl
  const round = Math.round(R * 100 )/100
  console.log(Sp/Sr);
  return round
}

// CRUD data management and opération
export function Variete(user, Legume, acc, set, setAcc) {
  if (user.legume) {
    const find = Legume.find((legume) => legume.name === user.legume);
    if (find && acc === 0) {
      set({
        ...user,
        price: find.price,
        unit: find.unit,
        growLength: find.growLength,
        color: find.color,
        fenetre: find.fenetre,
      });
      setAcc(1);
    }
    const vari = find.variete.map((details, i) => {
      return <MenuItem value={details}>{details}</MenuItem>;
    });
    return vari;
  } else {
    return <MenuItem>rien</MenuItem>;
  }
}
//CRUD Request

export const Del = (e) => {
    Axios.delete(`/api/${e.target.value}/delete`, { data: { id: e.target.id }}).then(
      (res) => {
        alert(res.data);
      }
    );
  };

