# 幹話產生器
一個node.js,express.js,handlebars的綜合練習，製作可以隨機組合出幹話句子給特定職業的web app

練習過程可參考[Node.js實作-幹話產生器](https://medium.com/@tomatosoup/node-js%E5%AF%A6%E4%BD%9C-%E5%B9%B9%E8%A9%B1%E7%94%A2%E7%94%9F%E5%99%A8-1-b9b254bf99a6)

### 功能
- 使用者可以選擇講幹話的對象
- 按下按鈕後自動產生幹話


### 環境建置

- 使用終端機從github clone本專案
   ```
   $ git clone https://github.com/TomatoSoup0126/Gibberish_generator.git
   ```


- 移至本專案資料夾中 
  ```
  $cd [路徑名稱]
  ```
- 安裝相關聯npm檔案
  ```
  $ npm install
  ```
- 安裝nodemon (選擇性)
  ```
  $ npm install -g nodemon
  ```

### 啟動伺服器
```
$ npm run dev
```
若成功啟動，終端機會顯示
`Express is listening on localhost:3000`

### 連至網頁
於瀏覽器中輸入下列網址
```
localhost:3000
```
便可連至該專案網頁

### 關閉伺服器
於終端機中輸入`control`+`C`即可關閉伺服器結束本專案


## 使用工具
- [Node.js](https://nodejs.org/en/) - 伺服器建置
- [Express](https://www.npmjs.com/package/express) - 伺服器建置
- [handlebars](https://handlebarsjs.com/) - 網頁模版引擎
- [Bootstrap](https://getbootstrap.com/) - 前端樣式


