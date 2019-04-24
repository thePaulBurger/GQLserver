//Library Imports
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

//Definitions imports
import typeDefs from './schema';
import resolvers from './resolvers';
import models, { sequelize } from './models/index';
// import {dbUsers, dbMessages} from './dataBase/index'

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const app = express();

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: {
		models
	}
});

server.applyMiddleware({ app, path: '/graphql' });

sequelize.sync().then(async () => {
	app.listen({ port: 8000 }, () => {
		console.log('Apollo Server on http://localhost:8000/graphql');
	});
});
