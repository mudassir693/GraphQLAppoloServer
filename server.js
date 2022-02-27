const express = require('express')
const { ApolloServer } = require("apollo-server-express");
const app = express()
const dotenv = require('dotenv')
const resolvers = require('./GraphQL/Query/Query') 
const typeDefs = require('./GraphQL/TypeDefs/Index') 
const DB_Connect = require('./config/DB_config')
// 

dotenv.config()

DB_Connect()

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: {
        settings: {
          'editor.theme': 'light',
        },
      },
    // plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

// server.start();

server.applyMiddleware({
    app,
    path: '/graphQL'
  });

  app.get('/', function (req, res) {
      return res.status(200).json({data:"success",status:200,error:false})
  })


app.listen(5000,()=>{
    console.log('server is running on port: 5000')
})