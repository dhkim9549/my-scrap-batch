import { tabletojson } from "tabletojson";

// let apiUrl = "https://www.hf.go.kr/ko/sub01/sub01_01_04.do";
let apiUrl = "https://api.scraperapi.com/?api_key=a6feef9544ee61c2d5b078836ca638f4&url=https%3A%2F%2Ffinance.naver.com%2Fsise%2Fsise_market_sum.naver";

async function main() {
  let table = "";
  await tabletojson.convertUrl(apiUrl, function (tablesAsJson) {
    console.log(
      "tablesAsJson => " + Object.prototype.toString.call(tablesAsJson),
    );
    console.log("tablesAsJson.length = " + tablesAsJson.length);
    table = tablesAsJson[1];
  });

  console.log("table => " + Object.prototype.toString.call(table));
  // console.log(table);

  let table2 = [];

  for await (const e of table) {
    if (Number(e.N) == 0) {
      continue;
    }
    // console.log("e => " + Object.prototype.toString.call(e));
    // console.log(e);
    let eX = {};
    eX.N = Number(e.N);
    eX.stockNm = e.종목명;
    eX.mktCap= Number(e.시가총액.replaceAll(",", ""));
    eX.Price = Number(e.현재가.replaceAll(",", ""));
    eX.change = e.등락률;
    eX.PER = Number(e.PER);
    console.log("eX => " + Object.prototype.toString.call(eX));
    // console.log({eX});
    table2.push(eX);
  }

  table2 = table2.filter(function(e) {
    return e.stockNm.startsWith("삼성전");
  });

  console.log("table2 => " + Object.prototype.toString.call(table2));
  console.log("table2 = " + JSON.stringify(table2, null, 2));
}

main();
