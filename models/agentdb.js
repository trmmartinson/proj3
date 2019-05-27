
module.exports = function(sequelize, Sequelize) {

	var Agent = sequelize.define('agent', {
		id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
		email: {type:Sequelize.TEXT},
		name: {type:Sequelize.TEXT},
		phone: {type:Sequelize.TEXT},
		agency: {type:Sequelize.TEXT},
		image_url: {type:Sequelize.TEXT}

});
console.log("agent---------------------");
	return Agent;

}
