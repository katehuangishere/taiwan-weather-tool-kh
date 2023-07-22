# taiwan-weather-tool-kh
## Installation

```bach
npm install --save taiwan-weather-tool-kh
```
## Requirements
首先申請中央氣象局 open data 的帳號並得授權碼

## Sample Code
```js
// 引用套件
const http = require("http");
const taiwanWeather = require("xxx");  // xxx為套件名稱
const readline = require("readline");

const askApiKey = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question("請輸入您的授權金鑰 (API Key): ", (apiKey) => {
      rl.close();
      resolve(apiKey);
    });
  });
};

const main = async () => {
  try {
    const key = await askApiKey();
    let data = await taiwanWeather(key, "新竹市");  // "新竹市" 可以換成其他中央氣象局授受的城市名稱
    console.log(data);
  } catch (error) {
    console.error("取得天氣資訊時發生錯誤：", error);
  }

  // create a server object
  http
    .createServer(function (req, res) {
      res.write("Hello from CodeSandbox!"); // write a response to the client
      res.end(); // end the response
    })
    .listen(8080); // the server object listens on port 8080
};

main();
```

## notice
此開源套件有額外安裝 node-fetch 以及 readline 套件

# License
The MIT license
