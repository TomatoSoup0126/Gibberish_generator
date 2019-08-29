//基本設定用常數
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const gibberishGenerator = require('./gibberish_generator')

const app = express()
const port = 3000

// 設定靜態檔案位置
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

//定義模板引擎
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//設定根目錄路由
app.get('/', (req, res) => {
  res.render('index')
})

//設定POST路由
app.post('/', (req, res) => {
  console.log('get form POST request')
  const gibberish = gibberishGenerator(req.body)
  res.render('index', { gibberish: gibberish })
})

//設定伺服器啟動
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})