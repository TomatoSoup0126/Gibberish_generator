// const userPick = { target: 'designer' } //先用這個假資料當作req.body回傳的值
// const job = userPick.target //撈出target = 'designer'

const task = {
  engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
}
const phrase = ['很簡單', '很容易', '很快', '很正常']



function randomTask(job) {
  randomIndex = Math.floor(Math.random() * task[job].length)
  return task[job][randomIndex]
}

function randomPhrase() {
  randomIndex = Math.floor(Math.random() * phrase.length)
  return phrase[randomIndex]
}


function gibberishGenerator(userPick) {
  if (userPick.target !== 'engineer' && userPick.target !== 'designer' && userPick.target !== 'entrepreneur') {
    return '你還沒選擇對誰說幹話喔XD'
  }

  //幹話由三句話串連而成：
  //身為一個工程師，隨手寫個APP，很容易吧？  
  //身為一個{{target}}，{{task}}，{{phrase}}
  const job = userPick.target

  let gibberish = '身為一個'

  //target可以導入使用者勾選的目標，加到幹話中
  if (userPick.target === 'engineer') {
    gibberish += '工程師，'
  }

  if (userPick.target === 'designer') {
    gibberish += '設計師，'
  }

  if (userPick.target === 'entrepreneur') {
    gibberish += '創業家，'
  }

  //task可以從task陣列中隨機選出一句話，加到幹話中
  gibberish += randomTask(job)
  gibberish += '，'

  //phrase可以從phrase陣列中隨機選出一句話，加到幹話中
  gibberish += randomPhrase()
  gibberish += '吧？'

  //回傳幹話
  return gibberish
}

//匯出功能
module.exports = gibberishGenerator



