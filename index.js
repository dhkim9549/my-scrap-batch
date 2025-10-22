import { tabletojson } from "tabletojson";

const apiUrl = "https://hf.go.kr/ko/sub02/sub02_01_07_01.do";

async function main() {
  let table = "";
  await tabletojson.convertUrl(apiUrl, (tablesAsJson) => {
    console.log(
      "tablesAsJson => " + Object.prototype.toString.call(tablesAsJson),
    );
    console.log(tablesAsJson);
    console.log("tablesAsJson.length = " + tablesAsJson.length);
    table = tablesAsJson[0];
  });

  console.log("table => " + Object.prototype.toString.call(table));
  console.log(table);

  const table2 = table.filter((e) => e.금융기관.startsWith("하나"));

  console.log("table2 => " + Object.prototype.toString.call(table2));
  console.log(table2);
}

main();
