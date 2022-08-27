let fs = require('fs')

/**
 * 异步写入文件内容：
 * fs.writeFile(filename, data[, options], callback)
 * writeFile 直接打开文件默认是 w 模式，所以如果文件存在，该方法写入的内容会覆盖旧的文件内容
 * 可以修改默认的options对象，来达到追加的效果
 * - options: { flag: 'a' },
 */
let writeFile = (filepath) => {
  console.log(`准备写入文件,文件路径: ${filepath}`)
  fs.writeFile(filepath, '\n我是通过 fs.writeFile 写入文件的内容', (err) => {
    if (err) return console.error(err)
    console.log('写入数据成功！')
    console.log('__________分割线————————')
    console.log('读取写入的数据！')
    fs.readFile(filepath, (err, data) => {
      if (err) return console.error(err)
      console.log('异步读取文件数据：' + data.toString())
    })
  })
}
// 异步追加文件内容： fs.appendFile(filename, data[, options], callback)
let writeAppend = (filepath) => {
  fs.appendFile(filepath, '\n我是通过 fs.appendFile 追加文件的内容', (err) => {
    if (err) throw err
    console.log('追加数据成功')
  })
}
writeFile('./tmp/create.md')
writeAppend('./tmp/create.md')
