import { gql } from 'apollo-server-express';

export default gql`
	type Query {
		users: [User]
		messages: [Message]
	}

	type Mutation {
		createUser(input: UserInput): User
		createMessage(message: String!, id:ID): Message
	}

	type User {
		id: ID!
		username: String!
		messages: [Message]!
	}

	input UserInput {
		name: String!
	}

	input MessageInput {
		message: String!
		id: ID
	}

	type Message {
		id: ID!
		message: String!
		userId: String!
	}

`;
