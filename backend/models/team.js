import { DataTypes, Model } from "sequelize";

export default class Team extends Model {
static initModel(sequelize) {
Team.init(
{
number: DataTypes.INTEGER,
name: DataTypes.STRING
},
{ sequelize, modelName: "team" }
);
}
}
