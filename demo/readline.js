/**
 * Node.js 逐行读取
 */

const readline = require('readline')
// 逐行读取（Readline）可以逐行读取流（比如process.stdin）。standard input 标准输入流
// 创建一个逐行读取（Readline）Interface实例
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  completer,
})

rl.question("what's you name ?", (answer) => {
  console.log('my name is :', answer)
  // 一旦你开启了这个模块，node程序将不会终止，直到你关闭接口
  rl.close()
})

// completer- 用于Tab自动补全的可选函数
function completer(line) {
  let completions = ['joker', 'riddler', 'avatar', 'jojo', 'shaco']
  let hits = completions.filter((ele) => {
    return ele.indexOf(line) == 0
  })
  return [hits.length ? hits : completions, line]
}
