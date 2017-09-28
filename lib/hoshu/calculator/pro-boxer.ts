import BN from "bignumber.js";

// プロボクサーの業務に関する報酬・料金
// http://www.nta.go.jp/shiraberu/ippanjoho/pamph/gensen/shikata2017/pdf/09.pdf

const BOXER_KOUJO_KINGAKU = 50000;

export default function(originZeikomi: number): Kingaku {
  const zeikomi: BN = new BN(originZeikomi);
  const zei: BN = calculateZei(zeikomi);

  return {
    zei: zei.toNumber(),
    zeikomi: zeikomi.toNumber(),
    zeinuki: zeikomi.minus(zei).toNumber(),
  };
}

const calculateZei = (zeikomi: BN): BN => (
  zeikomi.lte(BOXER_KOUJO_KINGAKU) ?
    new BN(0) :
    zeikomi.minus(BOXER_KOUJO_KINGAKU).times(0.1021).floor()
);
