const { gql } = require("apollo-server");

// TODO write correct schema

const typeDefs = gql`
    enum Status {
        PENDING
        IN_PROGESS
        IN_DELIVERY
        DELIVERED
        PAID
    }
    type Query {
        orders(status: Status): [Order]
        order(id: ID!): Order
    }
    type Mutation {
        updateStatus(id: ID!, status: Status): Order
    }
    type Order {
        id: String!
        total:Float!
        discountCode: String
        comment: String
        items:String!
        status: String!
        deliveryAddress: String!
    }
`;

module.exports = typeDefs;
