import BN from "bignumber.js";

export default function(originZeikomi: number): Kingaku {
  const zeikomi = new BN(originZeikomi);
  let zei = zeikomi.minus(10000).times(0.1021).floor();

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
