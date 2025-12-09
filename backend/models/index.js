import User from "./user.js";
import Team from "./team.js";
import Match from "./match.js";
import ScoutEntry from "./scoutEntry.js";

export default (sequelize) => {
User.initModel(sequelize);
Team.initModel(sequelize);
Match.initModel(sequelize);
ScoutEntry.initModel(sequelize);

Team.hasMany(ScoutEntry);
ScoutEntry.belongsTo(Team);

Match.hasMany(ScoutEntry);
ScoutEntry.belongsTo(Match);
};
