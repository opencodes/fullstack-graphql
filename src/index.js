const db = require("./db");
const resolvers = require("./resolvers");
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
db.initialize();
const server = new ApolloServer({
    resolvers,
    typeDefs,
    dataSources: () => ({
        db
    })
})
server.listen(4000).then(({ url }) => {
    console.log('Server listen on ' + url);
})