import BN from "bignumber.js";

const CHANGE_CALCULATE_LOGIC_LINE: number = 1000000;

export default function(originZeikomi: number): Kingaku {
  const zeikomi: BN = new BN(originZeikomi);
  const zei: BN = calculateZei(zeikomi);

  return {
    zei: zei.toNumber(),
    zeikomi: zeikomi.toNumber(),
    zeinuki: zeikomi.minus(zei).toNumber(),
  };
}

const calculateZei = (zeikomi: BN): BN => {
  return zeikomi.lte(CHANGE_CALCULATE_LOGIC_LINE) ?
    zeikomi.times(0.1021).floor() :
    zeikomi.minus(CHANGE_CALCULATE_LOGIC_LINE).times(0.2042).plus(102100).floor();
};
