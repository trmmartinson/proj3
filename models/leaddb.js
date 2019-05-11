
module.exports = function(sequelize, Sequelize) {

	var Lead = sequelize.define('lead', {
		id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
		user_id: { type: Sequelize.INTEGER,notEmpty: true},
		gender_opt: {type:Sequelize.TEXT}




});
console.log("leads---------------------");
	return Lead;

}
