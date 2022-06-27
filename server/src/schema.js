const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    "Query for random recipes for the homepage"
  }

  type Recipe {
    id: ID!
    title: String!
    
  
  }

`