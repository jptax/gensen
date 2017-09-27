import BN  from 'bignumber.js'

export default function (originKingaku: number) : GensenReponse {
  let kingaku : BN = new BN(originKingaku);
  let gensen = kingaku.minus(10000).times(0.1021).floor().toNumber();

  if (gensen < 0) {
    gensen = 0
  }

  return {
    gensen: gensen,
    shiharai: originKingaku
  };
}
