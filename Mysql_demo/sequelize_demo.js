const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("db_soft", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
});

class Book extends Model {}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
    },
  },
  { sequelize }
);

(async () => {
  await sequelize.sync(); // 模型同步
  // 增：create 创建实例并持久保存
  const yy = await Book.create({
    name: "红拂夜奔",
    author: "王二",
  });
  console.log(yy.name);

  // 改：update
  await Book.update(
    { name: "Store of O" },
    {
      where: { id: 2 },
    }
  );

  // 查：findAll
  const obj = await Book.findAll({
    where: {
      author: "王二",
    },
  });
  console.log("BookList:", JSON.stringify(obj, null, 2));

  // 删：destroy
  await Book.destroy({
    where: { name: "我的阴阳两界" },
  });

  // 关闭连接
  await sequelize.close();
})();
