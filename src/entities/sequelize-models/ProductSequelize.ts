const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const User = sequelize.define("user", {
  id: DataTypes.INTEGER,
  nome: DataTypes.TEXT,
  email: DataTypes.TEXT,
  password: DataTypes.TEXT
});

const Product = sequelize.define("products", {
  id: DataTypes.INTEGER,
  title: DataTypes.TEXT,
  type: DataTypes.TEXT,
  description: DataTypes.TEXT,
  filename: DataTypes.TEXT,
  height: DataTypes.INTEGER,
  width: DataTypes.INTEGER,
  price: DataTypes.DOUBLE,
  rating: DataTypes.INTEGER
});

(async () => {
  await sequelize.sync({ force: true });
  // Code here

const jane = User.build({ nome: "Jane" });
console.log(jane instanceof User); // true
console.log(jane.nome); // "Jane"

//update an instance
async function updateUser(name:string, newname:string){

  const user = await User.create({ nome: name });

  console.log(user.nome); // "Jane"

  user.nome = newname;

  // the name is still "user" in the database

  await user.save();

  // Now the name was updated to "user" in the database!

}//fim updateUser

  async function deleteUser(emailToDelete: string) {
  
  const user = await User.create({ email: emailToDelete });
  console.log(user.nome); // "Jane"
  await user.destroy();
  // Now this entry was removed from the database
}

})();