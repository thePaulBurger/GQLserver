const Sequelize = require('sequelize');

//Creating Database link
const db = new Sequelize('fullstack', 'postgres', 'admin', {
    host: 'localhost',
    port: 4500,
    dialect:  'postgres' ,
    operatorAliases: false ,
  });

  //Testing database connection
db.authenticate()
.then(() => console.log("The Database is connected"))
.catch(err => console.log("There was an error connecting the Database\n" + err) );

//Defining database table object
const dbUsers = db.define('users', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	username: {
		type: Sequelize.TEXT
	},
	messageids: {
		type: Sequelize.ARRAY(Sequelize.INTEGER)
	},
	createdAt: {
		type: Sequelize.DATE
	}
});

export default dbUsers;