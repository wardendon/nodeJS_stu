let fs = require('fs')

// 异步读取
// fs.readFile('./tmp/input.txt', (err, data) => {
//   if (err) return console.error(err)
//   console.log('异步读取：' + data.toString())
// })

// 同步读取
// let data = fs.readFileSync('./tmp/input.txt')
// console.log('同步读取：' + data.toString())
// console.log('程序执行完毕')

/** 读取文件
 * fs.read(fd, buffer, offset, length, position, callback)
 */

let buf = new Buffer.alloc(1024)
console.log('准备打开文件')
fs.open('./tmp/create.md', 'r', (err, fd) => {
  if (err) return console.error(err)
  console.log('文件打开成功,准备读取文件')
  console.log('截取10字节内的文件内容, 超出部分将被去除。')
  // 截取文件
  fs.ftruncate(fd, 21, (err) => {
    if (err) return console.error(err)
    console.log('截取文件成功')
    // 读取相同的文件
    fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
      if (err) return console.error(err)
      console.log(bytes + '字节被读取')
      console.log('---------------------------')
      // 仅输出读取的字节
      if (bytes > 0) {
        console.log(buf.slice(0, bytes).toString())
      }
      // 关闭文件
      fs.close(fd, (err) => {
        if (err) return console.error(err)
        console.log('---------------------------')
        console.log('文件关闭成功')
      })
    })
  })
})
