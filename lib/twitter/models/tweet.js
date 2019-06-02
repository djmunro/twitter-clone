module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Tweet", {
    user: DataTypes.STRING,
    status: DataTypes.STRING
  });
};
