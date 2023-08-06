const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const cors = require('cors');
const express = require('express');
const path = require('path');
const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

// Enable cors middleware
app.use(cors());

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  // context: authMiddleware,
  // context: async ({ req }) => {
  //   // Call the authMiddleware to get the user from the request
  //   const user = await authMiddleware(req);
  //   return { user };
  // },
  context: ({ req }) => {
    const context = { req }; 
    return context;
  },
  introspection: true, // Enable introspection
});

// Start Apollo Server
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  // Serve the React app from the build folder for production
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/build/index.html'));
    });
  }

  // Handle connection errors
  db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
  });

  // Handle successful connection
  // Start the Express server
  db.once('open', () => {
    console.log('MongoDB connected successfully.');
    app.listen(PORT, () => {
      console.log(`🌍 Now listening on localhost:${PORT}`);
      console.log(`GraphQL endpoint at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};

startApolloServer();
