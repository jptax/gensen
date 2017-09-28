import calculator from "./calculator";

export function houshu(originZeikomi: number): Kingaku {
  return calculator.standard(originZeikomi);
}

/* tslint:disable */
export module houshu {
  export const banushi = calculator.banushi;
  export const gaikouin = calculator.gaikouin;
  export const hostess = calculator.hostess;
  export const koukokuShoukin = calculator.koukokuShoukin;
  export const proBoxer = calculator.proBoxer;
  export const shihoushoshi = calculator.shihoushoshi;
  export const shinryou = calculator.shinryou;
  export const standard = calculator.standard;
  export const tedori = calculator.tedori;
}

export default houshu;
