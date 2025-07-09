import { gql } from 'apollo-server'

const typeDefs = gql`
  type Order {
    id: ID!
    userId: ID!
    products: String!
    total: Float!
    status: String!
    createdAt: String!
  }

  type Mutation {
    cancelOrder(id: ID!): Order
  }

  type Query {
    _: Boolean
  }
`

export default typeDefs