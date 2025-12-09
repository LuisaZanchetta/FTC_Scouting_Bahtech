import { DataTypes, Model } from "sequelize";

export default class Match extends Model {
static initModel(sequelize) {
Match.init(
{
matchNumber: DataTypes.INTEGER,
event: DataTypes.STRING
},
{ sequelize, modelName: "match" }
);
}
}
