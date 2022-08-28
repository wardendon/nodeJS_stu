# Node.js 多进程

Node.js本身是以单线程的模式运行的，但它使用的是事件驱动来处理并发，这样有助于我们在多核 cpu 的系统上创建多个子进程，从而提高性能。

每个子进程总是带有三个流对象：child.stdin, child.stdout和child.stderr。他们可能会共享父进程的stdio流，或者也可以是独立的被导流的流对象。

Node 提供了`child_process模块`来创建子进程，方法有：
- `exec`- child_process.exec使用子进程执行命令，缓存子进程的输出，并将子进程的输出以回调函数参数的形式返回。
- `spawn` - child_process.spawn使用指定的命令行参数创建新进程。
- `fork` - child_process.fork是spawn()的特殊形式，用于在子进程中运行的模块，如fork('./son.js')相当于spawn('node', ['./son.js']) 。与spawn方法不同的是，fork会在父进程与子进程之间，建立一个通信管道，用于进程之间的通信。



## 参考
- [线程和进程的区别是什么？](https://www.zhihu.com/question/25532384/answer/411179772)
- [Node.js 多进程](https://www.w3cschool.cn/nodejs/nodejs-process.html)