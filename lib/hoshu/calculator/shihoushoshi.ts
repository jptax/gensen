import BN, {BigNumber} from 'bignumber.js'

export default function (originKingaku: number) : GensenReponse {
  let kingaku = new BigNumber(originKingaku);
  let gensen = kingaku.minus(10000).times(0.1021).floor().toNumber();

  if (gensen < 0) {
    gensen = 0
  }

  return {
    gensen: gensen,
    shiharai: originKingaku
  };
}
