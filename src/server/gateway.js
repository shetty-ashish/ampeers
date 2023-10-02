'use strict'

const Fastify = require('fastify');
const mercurius = require('mercurius');
const schema = require('./schema.graphql');
const data = require('./data');

const app = Fastify()

const resolvers = {
  Query: {
    readContract: async (_, { id }) => data[id] || null,
    readContractComponent: async (_, { id }) => Object.values(data).flatMap(t => t.contractMeter.contractComponents).filter(c => c.id === +id)[0] || null,
  }
}

app.register(mercurius, {
  schema,
  resolvers
});


app.listen({ port: 3001 })