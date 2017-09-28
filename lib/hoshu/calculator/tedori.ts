import BN from 'bignumber.js';

const TEDORI_NIDANKAI_ZEIRITSU_KINGAKU = 897900;

// 手取契約の場合の源泉徴収税額の計算
export default function (originZeinuki:number) : Kingaku {
  const zeinuki : BN = new BN(originZeinuki);

  if (zeinuki.lte(TEDORI_NIDANKAI_ZEIRITSU_KINGAKU)) {
    // 二段階税率の適用がある場合
    const zeikomi:BN = zeinuki.dividedBy(0.8979).floor();

    return {
      zei: zeinuki.times(0.1021).floor().toNumber(),
      zeinuki: zeinuki.toNumber(),
      zeikomi: zeikomi.toNumber()
    };
  } else {
    // 税率が10.21％の場合
    const zeikomi:BN = zeinuki.minus(102100).dividedBy(0.7958).floor();
    
    return {
      zei: zeikomi.times(0.1021).floor().toNumber(),
      zeinuki: zeinuki.toNumber(),
      zeikomi: zeikomi.toNumber()
    };
  }
}
