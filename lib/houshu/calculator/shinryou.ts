import BN from "bignumber.js";

/** 社会保険診療報酬支払基金が支払う診療報酬に係る控除額 */
const SHINRYOU_KOUJO: number = 200000;

/**
 * 社会保険診療報酬支払基金が支払う診療報酬
 * https://www.nta.go.jp/publication/pamph/gensen/shikata2017/pdf/09.pdf
 * @param originZeikomi 支払金額
 */
export default function(originZeikomi: number): Kingaku {
  const zeikomi = new BN(originZeikomi);
  let zei = zeikomi.minus(SHINRYOU_KOUJO).times(0.1021).floor();

  if (zei.lessThan(0)) {
    zei = new BN(0);
  }

  const zeinuki = zeikomi.minus(zei);

  return {
    zei: zei.toNumber(),
    zeikomi: originZeikomi,
    zeinuki: zeinuki.toNumber(),
  };
}
