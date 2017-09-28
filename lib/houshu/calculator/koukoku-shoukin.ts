import BN from "bignumber.js";

// No.2813　広告宣伝のために支払う賞金等
// https://www.nta.go.jp/taxanswer/gensen/2813.htm

const KOUKOKU_SHOUKIN_KOUJO_KINGAKU = 500000;

export default function(originZeikomi: number): Kingaku {
  const zeikomi = new BN(originZeikomi);

  let zei;
  if (zeikomi.lte(KOUKOKU_SHOUKIN_KOUJO_KINGAKU)) {
    zei = new BN(0);
  } else {
    zei = zeikomi.minus(KOUKOKU_SHOUKIN_KOUJO_KINGAKU).times(0.1021).floor();
  }

  return {
    zei: zei.toNumber(),
    zeikomi: zeikomi.toNumber(),
    zeinuki: zeikomi.minus(zei).toNumber(),
  };
}
