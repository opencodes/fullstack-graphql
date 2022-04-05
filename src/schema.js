const { gql } = require("apollo-server");

// TODO write correct schema

const typeDefs = gql`
    type Query {
        order(id: ID!): Order
    }
    type Order {
        id: ID!
        total:Float
        discountCode: String!
        comment: String!
        items:[String!]
        status: String!
        deliveryAddress: String!
    }
`;


module.exports = typeDefs;