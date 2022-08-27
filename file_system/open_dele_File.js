let fs = require('fs')
/**
 * 打开文件 fs.open
 */
console.log('准备打开文件')
// r+ :以读写模式打开文件。如果文件不存在抛出异常。
fs.open('./tmp/input.txt', 'r+', (err, fd) => {
  if (err) throw err
  console.log('open success')
})
// w+ : 以读写模式打开文件，如果文件不存在则创建。
fs.open('./tmp/create.md', 'w+', (err, fd) => {
  if (err) throw err
  console.log('创建成功')
})

/**
 * 删除文件 fs.unlink(path, callback)
 */
// console.log('准备删除文件')
// fs.unlink('./tmp/create.md', (err) => {
//   if (err) return console.error(err)
//   console.log('文件删除成功！')
// })
