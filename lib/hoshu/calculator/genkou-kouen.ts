// https://www.nta.go.jp/taxanswer/gensen/2795.htm
import BN from "bignumber.js";

export default function (originKingaku: number) : GensenReponse {
  const kingaku = new BN(originKingaku);
  let gensen: number = 0;
  let shiharai: number = 0;
  if(originKingaku <= 50000) {
    // (3)　懸賞応募作品などの入選者に対する賞金や新聞、雑誌などの投稿欄への投稿の謝金などは、
    // 原則として原稿料に含まれますが、一人に対して支払う賞金や謝金の金額が、1回5万円以下であれば、
    // 源泉徴収をしなくてもよいことになっています。
    shiharai = originKingaku;
  } else if(originKingaku <= 1000000) {
    gensen = kingaku.times(0.1021).floor().toNumber();
    shiharai = originKingaku - gensen;
  } else {
    gensen = kingaku.minus(1000000).times(0.2042).add(102100).floor().toNumber();
    shiharai = originKingaku - gensen;
  }
  return {
    gensen,
    shiharai
  };
}
