import BN from 'bignumber.js';

const TEDORI_NIDANKAI_ZEIRITSU_KINGAKU = 897900;

// 手取契約の場合の源泉徴収税額の計算
export default function (tedori:number) : Kingaku {
  const t : BN = new BN(tedori);

  if (t.lte(TEDORI_NIDANKAI_ZEIRITSU_KINGAKU)) {
    // 二段階税率の適用がある場合
    const shiharai:BN = t.dividedBy(0.8979).floor();

    return {
      shiharai: shiharai.toNumber(),
      gensen: shiharai.times(0.1021).floor().toNumber()
    };
  } else {
    // 税率が10.21％の場合
    const shiharai:BN = t.minus(102100).dividedBy(0.7958).floor();
    
    return {
      shiharai: shiharai.toNumber(),
      gensen: shiharai.times(0.1021).floor().toNumber()
    };
  }
}
