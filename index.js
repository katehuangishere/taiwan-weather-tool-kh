const http = require("http");
const taiwanWeather = require("./TaiwanWeather.js");
const readline = require("readline");

// 此函式用於詢問使用者授權金鑰 (API Key)
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
    const key = await askApiKey(); // 詢問使用者輸入API金鑰
    let data = await taiwanWeather(key, "新竹市"); // 使用taiwanWeather函數取得新竹市的天氣資訊
    console.log(data); // 輸出結果
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
