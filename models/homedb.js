
module.exports = function(sequelize, Sequelize) {

	var Home = sequelize.define('home', {
		id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
		agent_id: { type: Sequelize.INTEGER,notEmpty: true},
		zipcode: { type: Sequelize.INTEGER,notEmpty: true},
		image_url: {type:Sequelize.TEXT},
		address: {type:Sequelize.TEXT},
		price: {type:Sequelize.INTEGER},
		baths: {type:Sequelize.DOUBLE(4,2)},
		beds: {type:Sequelize.INTEGER},
		price: {type:Sequelize.INTEGER},
		lot_size: {type:Sequelize.DOUBLE(4,2)},
		square_feet: {type:Sequelize.INTEGER},
		description: {type:Sequelize.TEXT},
              


});
console.log("homes---------------------");
	return Home;

}
