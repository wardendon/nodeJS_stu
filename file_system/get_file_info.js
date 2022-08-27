let fs = require('fs')

fs.stat('./tmp/input.txt', (err, stats) => {
  if (err) return console.error(err)
  console.log(stats)
  console.log('读取文件信息成功！')
  console.log('是否为文件? ' + stats.isFile()) // 如果是文件返回 true，否则返回 false
  console.log('是否为目录? ' + stats.isDirectory()) // 如果是目录返回 true，否则返回 false
  console.log(stats.isFIFO()) // 如果是FIFO，返回true，否则返回 false。FIFO是UNIX中的一种特殊类型的命令管道
  console.log(stats.isSocket()) // 如果是 Socket 返回 true，否则返回 false
})
