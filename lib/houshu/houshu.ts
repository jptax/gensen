import calculator from "./calculator";

export function houshu(originZeikomi: number): Kingaku {
  return calculator.standard(originZeikomi);
}

/* tslint:disable */
export module houshu {
  export const banushi = calculator.banushi;
  export const bengoshiZeirishi = calculator.bengoshiZeirishi;
  export const gaikouin = calculator.gaikouin;
  export const genkouKouen = calculator.genkouKouen;
  export const hostess = calculator.hostess;
  export const koukokuSyoukin = calculator.koukokuSyoukin;
  export const proBoxer = calculator.proBoxer;
  export const senzokuKeiyakukin = calculator.senzokuKeiyakukin;
  export const shihoushoshi = calculator.shihoushoshi;
  export const shinryou = calculator.shinryou;
  export const standard = calculator.standard;
  export const tedori = calculator.tedori;
}

export default houshu;
