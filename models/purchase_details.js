module.exports = function(sequelize, DataTypes) {

	return sequelize.define('purchase_details', {
		purchase_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		item_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		item_costprice: {
			type: DataTypes.DECIMAL(15, 2),
			allowNull: true
		},
		item_batch: {
			type: DataTypes.STRING,
			allowNull: true
		},
		item_exp: {
			type: DataTypes.DATE,
			allowNull: true
		},
		tax_per: {
			type: DataTypes.DECIMAL(6, 2),
			allowNull: true
		},
		tax_amt: {
			type: DataTypes.DECIMAL(15, 2),
			allowNull: true
		},
		item_qty: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		item_current_stock: {
			type: DataTypes.INTEGER,
			allowNull: true
		}		
	});

};