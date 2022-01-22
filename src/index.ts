import { ApolloServer } from "apollo-server"
import gql from "graphql-tag"

const typedefsDemo = gql`
   type User {
       email: String!
       avatar: String
       friends: [User]!
   }

   type Query {
       me: User
   }
`

const resolversDemo = {
    Query: {
        me () {
            return {
                email: 'me@mail.com',
                avatar: 'http://test.png',
                friends: []
            }
        }
    }
}

const server = new ApolloServer({
    typeDefs: typedefsDemo,
    resolvers: resolversDemo
})
server.listen(4000).then(({ url }) => {
    console.log('Server listen on ' + url);
})