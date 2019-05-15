
module.exports = function(sequelize, Sequelize) {

	var Email = sequelize.define('email', {
		id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
		agent_id: {type:Sequelize.INTEGER},
		user_id: {type:Sequelize.INTEGER},
		house_id: {type:Sequelize.INTEGER}
              





});
console.log("homes---------------------");
	return Email;

}
