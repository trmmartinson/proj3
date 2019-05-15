
module.exports = function(sequelize, Sequelize) {

	var Home = sequelize.define('home', {
		id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
		agent_id: { type: Sequelize.INTEGER,notEmpty: true},
		zipcode: { type: Sequelize.INTEGER,notEmpty: true},
		image_url: {type:Sequelize.TEXT},
		image_blob: {type:Sequelize.BLOB},
		address: {type:Sequelize.TEXT},
		price: {type:Sequelize.INTEGER},
		beds: {type:Sequelize.INTEGER},
		baths: {type:Sequelize.INTEGER},
		price: {type:Sequelize.INTEGER},
		lat: {type:Sequelize.DOUBLE(4,4)},
		lng: {type:Sequelize.DOUBLE(4,4)}
              





});
console.log("homes---------------------");
	return Home;

}
