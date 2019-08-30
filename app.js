//基本設定用常數
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const gibberishGenerator = require('./gibberish_generator')
const Handlebars = require("handlebars")

const app = express()
const port = 3000

// const jobList = [
//   {
//     jobName: 'engineer',
//     img: 'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5668/angry-developer.jpg',
//     jobNameInChinese: '工程師'
//   },
//   {
//     jobName: 'designer',
//     img: 'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5667/angry-designer.jpg',
//     jobNameInChinese: '設計師'
//   },
//   {
//     jobName: 'entrepreneur',
//     img: 'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5669/angry-founder.jpg',
//     jobNameInChinese: '創業家'
//   },
// ]

// 設定靜態檔案位置
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

//定義模板引擎
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//自定義helper
Handlebars.registerHelper('if_equal', function (job, expectedJob, options) {
  if (job === expectedJob) {
    return options.fn(this);
  }
  return options.inverse(this);
});


//設定根目錄路由
app.get('/', (req, res) => {
  res.render('index')
})

//設定POST路由
app.post('/', (req, res) => {
  const job = req.body.target
  const gibberish = gibberishGenerator(req.body)
  res.render('index', { gibberish: gibberish, job: job })
})

//設定伺服器啟動
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})