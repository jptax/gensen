# Gensen [![CircleCI](https://circleci.com/gh/jptax/gensen/tree/master.svg?style=svg)](https://circleci.com/gh/jptax/gensen/tree/master) [![Coverage Status](https://coveralls.io/repos/github/jptax/gensen/badge.svg?branch=add_coverage)](https://coveralls.io/github/jptax/gensen?branch=add_coverage)

[![Join the chat at https://gitter.im/jptax/gensen](https://badges.gitter.im/jptax/gensen.svg)](https://gitter.im/jptax/gensen?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

`gensen` は日本の源泉徴収税計算用のライブラリです。

## 説明
[国税庁の資料](https://www.nta.go.jp/shiraberu/ippanjoho/pamph/gensen/shikata2017/01.htm)を元にした実装になっています。

## 導入方法

```
npm install --save gensen
```

```js
import gensen from "gensen";

const gensenTyoshu = gensen.houshu(100000).zei;
```

## 使い方

### 報酬・料金などの源泉徴収の計算を行いたい場合

```js
import gensen from "gensen";

// 報酬に対する源泉徴収の計算を行います
gensen.houshu(100000);
// => { zei: 10210, zeikomi: 100000,zeinuki: 89790 }

// 外交員、集金人、電力量計の検針人の業務に関する報酬・料金についての源泉徴収の計算を行いたい場合
gensen.houshu.gaikouin(200000);
// => { zei: 8168, zeikomi: 200000, zeinuki: 191832 }
```

#### 馬主に支払われる競馬の賞金
`gensen.houshu.banushi`

#### 外交員、集金人、電力量計の検針人の業務に関する報酬・料金
`gensen.houshu.gaikouin`

#### バー・キャバレー等のホステス、バンケットホステス・コンパニオン等の業務に関する報酬・料金
`gensen.houshu.hostess`

#### 事業の広告宣伝のための賞金
`gensen.houshu.koukokuShoukin`

#### プロボクサーの業務に関する報酬・料金
`gensen.houshu.proBoxer`

#### 司法書士、土地家屋調査士、海事代理士の業務に関する報酬・料金
`gensen.houshu.shihoushoshi`

#### 社会保険診療報酬支払基金が支払う診療報酬
`gensen.houshu.shinryou`

#### 手取契約の場合の源泉徴収税額の計算[^1]
`gensen.houshu.tedori`

[^1]: http://www.nta.go.jp/taxanswer/gensen/2792_qa.htm
