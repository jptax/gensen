import BN from "bignumber.js";
import standard from "./standard";

// No.2798　弁護士や税理士等に支払う報酬・料金
// https://www.nta.go.jp/taxanswer/gensen/2798.htm

export default function(originZeikomi: number): Kingaku {
  return standard(originZeikomi);
}
