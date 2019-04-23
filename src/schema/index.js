import { gql } from 'apollo-server-express';

export default gql`
  type Query {
    users: [User]
  }
  type User {
		id:String!
    username: String!
  }
`;