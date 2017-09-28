import BN from "bignumber.js";
import standard from "./standard";

// No.2810　専属契約等で支払う契約金
// https://www.nta.go.jp/taxanswer/gensen/2810.htm

export default function(originZeikomi: number): Kingaku {
  return standard(originZeikomi);
}
