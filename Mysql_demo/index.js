const mysql = require("mysql2");

// 创建连接对象
const connection = mysql.createConnection({
  host: "localhost", //连接的数据库地址。（默认:localhost）
  user: "root", //mysql的连接用户名
  password: "123456", // 对应用户的密码
  port: 3306, // 端口
  database: "db_soft", //所需要连接的数据库的名称
});
// 开始连接
connection.connect();
// 执行sql
const sql = `SELECT * FROM t_student WHERE student_name like '_智康'`;
// const sql2 = `DELETE from t_student WHERE student_name like '测试%'`;
// const sql3 = `insert into t_student values (4312,2,'王東','江西赣州','1999-07-10');`;
connection.query(sql, (error, result) => {
  if (error) {
    console.error("error", error);
    return;
  }
  console.log("result:", result);
});
// 连接关闭
connection.end();

// 打印结果
// result: [
//   RowDataPacket {
//     student_id: 1001,
//     clazz_id: 1,
//     student_name: '钱智康',
//     hometown: '江苏苏州',
//     birthday: 2000-01-17T16:00:00.000Z
//   },
// ]
