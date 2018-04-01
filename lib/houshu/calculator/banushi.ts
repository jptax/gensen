import BN from "bignumber.js";

// P21 13 馬主に支払う競馬の賞金
// https://www.nta.go.jp/publication/pamph/gensen/shikata2017/pdf/09.pdf
// {支払金額 - (支払金額 * 20% + 60万)} * 10.21%

const BANUSHI_KOUJO_BASE = new BN(600000);
const BANUSHI_KOUJO_RATE = new BN(0.20);

export default function(originZeikomi: number): Kingaku {
  const zeikomi = new BN(originZeikomi);
  const koujo = zeikomi.times(BANUSHI_KOUJO_RATE).add(BANUSHI_KOUJO_BASE);

  let zei = zeikomi.minus(koujo);
  if (zei.lessThan(0)) {
    zei = new BN(0);
  } else {
    zei = zei.times(0.1021).floor();
  }

  return {
    zei: zei.toNumber(),
    zeikomi: zeikomi.toNumber(),
    zeinuki: zeikomi.minus(zei).toNumber(),
  };
}
