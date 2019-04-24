const user = (sequelize, DataTypes) => {
	const User = sequelize.define('user', {
		username: {
			type: DataTypes.STRING
		}
	});

	/**
	 * Relationship between User and Messages 
	 * User has many Messages
	 */
	User.associate = models => {
		User.hasMany(models.Message, { onDelete: 'CASCADE' });
	};

	return User;
};

export default user;
