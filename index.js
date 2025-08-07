import { tabletojson } from "tabletojson";

let apiUrl = "https://hf.go.kr/ko/sub02/sub02_01_07_01.do";
// let apiUrl = "https://api.scraperapi.com/?api_key=a6feef9544ee61c2d5b078836ca638f4&url=https%3A%2F%2Ffinance.naver.com%2Fsise%2Fsise_market_sum.naver";

async function main() {
  let table = "";
  await tabletojson.convertUrl(apiUrl, function (tablesAsJson) {
    console.log(
      "tablesAsJson => " + Object.prototype.toString.call(tablesAsJson),
    );
    console.log(tablesAsJson);
    console.log("tablesAsJson.length = " + tablesAsJson.length);
    table = tablesAsJson[0];
  });

  console.log("table => " + Object.prototype.toString.call(table));
  console.log(table);

  let table2 = table.filter(function (e) {
    return e.금융기관.startsWith("하나");
  });

  console.log("table2 => " + Object.prototype.toString.call(table2));
  console.log(table2);
}

main();
