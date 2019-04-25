export default {
	Query: {
		messages: async (parent, args, { models }) => {
			return await models.Message.findAll();
		},
		// message: async (parent, { id }, { models }) => {
		// 	return await models.Message.findByPk(id);
		// }
	},

	Mutation: {
		createMessage: async (parent, { message, id  }, {  models }) => {
			return await models.Message.create({
				message,
				userId: id
			});
		},

		deleteMessage: async (parent, { id }, { models }) => {
			await models.Message.destroy({ where: { id } });
			return parent ;
			 
		}
	//},

	// Message: {
	// 	user: async (message, args, { models }) => {
	// 		return await models.User.findByPk(message.userId);
	// 	}
	}
};
