// const resolvers = {
// 	Query: {
// 		users: async (parent, args, { dbUsers }) => {
// 			return await dbUsers.findAll();
// 		},
// 		messages: async (parent, args, { dbMessages }) => {
// 			return await dbMessages.findAll();
// 		}
// 	}
// };

// export default resolvers;

import users from './user';
import messages from './message';

const resolvers = [
	users,
	messages
]

export default resolvers;