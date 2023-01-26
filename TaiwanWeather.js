// 引用 node-fetch
const fetch = require("node-fetch").default;

module.exports = async (key, city) => {
  // 用 encodeURI 將中文編碼
  let url = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${key}&locationName=${encodeURI(
    city
  )}`;

  let response = await fetch(url);

  // response 的資料須轉譯成 json 格式
  let data = await response.json();

  // 取當下的天氣狀況資料
  let { weatherElement } = data.records.location[0];
  let [Wx, PoP, MinT, CI, MaxT] = weatherElement.map((i) => {
    return i.time[0].parameter.parameterName;
  });
  return {
    city,
    degree: {
      min: MinT,
      max: MaxT,
    },
    weather: Wx,
    feeling: CI,
    chance: PoP,
  };
};
