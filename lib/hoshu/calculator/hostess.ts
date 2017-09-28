import BN from "bignumber.js";

const HOSTESS_KOUJO_OF_DAY: number = 5000;

export default function(originZeikomi: number, nissu: number): Kingaku {
  const koujo: number = HOSTESS_KOUJO_OF_DAY * nissu;
  const zeikomi: BN = new BN(originZeikomi);

  const zei = calculateZei(zeikomi, nissu);

  return {
    zei: zei.toNumber(),
    zeikomi: zeikomi.toNumber(),
    zeinuki: zeikomi.minus(zei).toNumber(),
  };
}

const calculateZei = (zeikomi: BN, nissu: number): BN => {
  const base: BN = zeikomi.minus(HOSTESS_KOUJO_OF_DAY * nissu);

  if (base.lte(0)) {
    return new BN(0);
  }

  return base.times(0.1021).floor();
};
