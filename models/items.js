module.exports = function(sequelize, DataTypes) {

	return sequelize.define('items', {
		item_barcode
		item_name
		item_uom
		item_description
		item_location
		item_package_unit
		item_current_stock
		item_reorder_level
		item_reorder_qty
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
		}		
	});

};