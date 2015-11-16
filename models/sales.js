module.exports = function(sequelize, DataTypes) {

	return sequelize.define('sales', {
		date: {
			type: DataTypes.DATE,
			allowNull: false
		},
		supplier_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		discount_per: {
			type: DataTypes.DECIMAL(6, 2),
			allowNull: true
		},
		discount_amt: {
			type: DataTypes.DECIMAL(15, 2),
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
		gross_amount: {
			type: DataTypes.DECIMAL(6, 2),
			allowNull: true
		},
		net_amount: {
			type: DataTypes.DECIMAL(6, 2),
			allowNull: true
		}
	}); 
};