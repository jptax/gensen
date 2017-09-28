import BN from "bignumber.js";

/** 二段階税率の適用の判定基準額 */
const TEDORI_NIDANKAI_ZEIRITSU_KINGAKU = 897900;

/**
 * 手取契約の場合の源泉徴収税額の計算
 * http://www.nta.go.jp/taxanswer/gensen/2792_qa.htm
 *
 * @param originZeinuki 手取り額
 * @return 計算結果額
 */
export default function(originZeinuki: number): Kingaku {
  const zeinuki: BN = new BN(originZeinuki);

  if (zeinuki.lte(TEDORI_NIDANKAI_ZEIRITSU_KINGAKU)) {
    // 二段階税率の適用がある場合
    const zeikomi: BN = zeinuki.dividedBy(0.8979).floor();

    return {
      zei: zeikomi.times(0.1021).floor().toNumber(),
      zeikomi: zeikomi.toNumber(),
      zeinuki: zeinuki.toNumber(),
    };
  } else {
    // 税率が10.21％の場合
    const zeikomi: BN = zeinuki.minus(102100).dividedBy(0.7958).floor();

    return {
      zei: zeikomi.times(0.1021).floor().toNumber(),
      zeikomi: zeikomi.toNumber(),
      zeinuki: zeinuki.toNumber(),
    };
  }
}
