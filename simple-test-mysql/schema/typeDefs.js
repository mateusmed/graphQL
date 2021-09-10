const { gql } = require('apollo-server-express')


// exclamação significa que o campo é obrigatorio
const typeDefs = gql`

  type Student {
    id: Int!
    firstName: String!
    email: String!
    hobbies: [Hobbies!]!
  }

  type Hobbies {
    id: Int!
    title: String!
    student: Student!
  }

  type Query {
    
    hello: String
    getStudent(id: Int!): Student
    
    getAllStudents: [Student!]!
    getHobbies(id: Int!): Hobbies
  }

  type Mutation {
    createStudent(firstName: String!, email: String!): Student!
    createHobbies(studentId: Int!, title: String!): Hobbies!
  }
`

module.exports = typeDefs
