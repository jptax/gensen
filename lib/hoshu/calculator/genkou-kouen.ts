// https://www.nta.go.jp/taxanswer/gensen/2795.htm
import BN from "bignumber.js";

// 懸賞応募作品などの入選者に対する賞金や新聞、雑誌などの投稿欄への投稿の謝金などは、
// 原則として原稿料に含まれますが、一人に対して支払う賞金や謝金の金額が、1回5万円以下であれば、
// 源泉徴収をしなくてもよいことになっています。
const GENKO_KOUEN_MENZEI_KINGAKU = 50000;

export default function(originKingaku: number): Kingaku {
  const kingaku = new BN(originKingaku);
  let zei: number = 0;
  let zeinuki: number = 0;
  const zeikomi = originKingaku;

  if (kingaku.lte(GENKO_KOUEN_MENZEI_KINGAKU)) {
    zei = 0;
  } else if (kingaku.lte(1000000)) {
    zei = kingaku.times(0.1021).floor().toNumber();
  } else {
    zei = kingaku.minus(1000000).times(0.2042).add(102100).floor().toNumber();
  }

  zeinuki = kingaku.minus(zei).toNumber();

  return {
    zei,
    zeikomi,
    zeinuki,
  };
}
