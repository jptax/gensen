import BN from "bignumber.js";

// No.2804　外交員等に支払う報酬・料金
// https://www.nta.go.jp/taxanswer/gensen/2804.htm

const GAIKOUIN_KYUYO_KOUJO_KINGAKU = 120000;

export default function(originZeikomi: number, originKyuyo: number = 0): Kingaku {
  const zeikomi = new BN(originZeikomi);
  let koujo = new BN(GAIKOUIN_KYUYO_KOUJO_KINGAKU);

  koujo = koujo.minus(originKyuyo);
  if (koujo.lessThan(0)) {
    koujo = new BN(0);
  }

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
