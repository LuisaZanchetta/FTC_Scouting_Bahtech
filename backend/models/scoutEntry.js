import { DataTypes, Model } from "sequelize";

export default class ScoutEntry extends Model {
static initModel(sequelize) {
ScoutEntry.init(
{
autonomousScore: DataTypes.INTEGER,
teleopScore: DataTypes.INTEGER,
endgameScore: DataTypes.INTEGER,
notes: DataTypes.STRING
},
{ sequelize, modelName: "scoutEntry" }
);
}
}
