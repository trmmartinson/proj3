
module.exports = function(sequelize, Sequelize) {

	var Home = sequelize.define('home', {
		id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
		zipcode: { type: Sequelize.INTEGER,notEmpty: true},
		image_url: {type:Sequelize.TEXT},
		image_blob: {type:Sequelize.BLOB},
		address: {type:Sequelize.TEXT},
		price: {type:Sequelize.INTEGER},
		lat: {type:Sequelize.DOUBLE(4,4)},
		lng: {type:Sequelize.DOUBLE(4,4)}
              





});
console.log("homes---------------------");
	return Home;

}
