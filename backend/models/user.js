import { DataTypes, Model } from "sequelize";

export default class User extends Model {
static initModel(sequelize) {
User.init(
{
username: DataTypes.STRING,
password: DataTypes.STRING
},
{ sequelize, modelName: "user" }
);
}
}
