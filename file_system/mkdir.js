let fs = require('fs')
console.log('创建目录')
fs.mkdir('./tmp/test/', (err) => {
  if (err) return console.error(err)
  console.log('目录创建成功')
})
