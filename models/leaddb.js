
module.exports = function(sequelize, Sequelize) {

	var Lead = sequelize.define('lead', {
		id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
		email: {type:Sequelize.TEXT},
		name: {type:Sequelize.TEXT},
		phone: {type:Sequelize.TEXT},
		address: {type:Sequelize.TEXT},
		agent_id: { type: Sequelize.INTEGER},
		property_id: { type: Sequelize.INTEGER},




});
console.log("leads---------------------");
	return Lead;

}
