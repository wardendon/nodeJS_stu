const fs = require('fs')
const child_process = require('child_process')
/**
 * child_process.exec使用子进程执行命令，缓存子进程的输出
 * 并将子进程的输出以回调函数参数的形式返回
 * child_process.exec(command[, options], callback)
 */
function exec() {
  for (var i = 0; i < 3; i++) {
    var workerProcess = child_process.exec(
      'node support.js ' + i,
      function (error, stdout, stderr) {
        if (error) {
          console.log(error.stack)
          console.log('Error code: ' + error.code)
          console.log('Signal received: ' + error.signal)
        }
        console.log('stdout: ' + stdout)
        console.log('stderr: ' + stderr)
      },
    )
    workerProcess.on('exit', function (code) {
      console.log('子进程已退出，退出码 ' + code)
    })
  }
}
/**
 * child_process.fork是spawn()方法的特殊形式，用于创建进程
 * child_process.fork(modulePath[, args][, options])
 */
function spawn() {
  for (var i = 0; i < 3; i++) {
    var workerProcess = child_process.spawn('node', ['support.js', i])
    workerProcess.stdout.on('data', function (data) {
      console.log('stdout: ' + data)
    })
    workerProcess.stderr.on('data', function (data) {
      console.log('stderr: ' + data)
    })
    workerProcess.on('close', function (code) {
      console.log('子进程已退出，退出码 ' + code)
    })
  }
}
/**
 * child_process.fork是spawn()方法的特殊形式，用于创建进程
 * child_process.fork(modulePath[, args][, options])
 * 返回的对象除了拥有ChildProcess实例的所有方法，还有一个内建的通信信道
 */
function fork() {
  for (var i = 0; i < 3; i++) {
    var worker_process = child_process.fork('support.js', [i])

    worker_process.on('close', function (code) {
      console.log('子进程已退出，退出码 ' + code)
    })
  }
}
