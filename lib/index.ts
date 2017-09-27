type GensenReponse = {
  gensen: number;
  shiharai: number;
}

export default function gensen(kingaku: number) : GensenReponse {
  return {
    gensen: 100,
    shiharai: 2000
  };
}
