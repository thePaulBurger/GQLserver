//Library Imports
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

//Definitions imports
import typeDefs from './schema'
import tUsers from './dataBase'
import resolvers from './resolvers'

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const app = express();

const server = new ApolloServer({
  typeDefs,
	resolvers,
	context: {
		tUsers
  },
	
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8000 }, () => {
  console.log('Apollo Server on http://localhost:8000/graphql');
});






  






  
