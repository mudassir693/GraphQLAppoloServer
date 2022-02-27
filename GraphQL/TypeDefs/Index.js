const {gql} =  require('apollo-server-express')

const typeDefs = gql`
    type User {
        Name: String,
        Email:String,
        Password:String,
        createdAt:String,
    }

    type Query {
        GetUser: [User!]!
    }
    type Mutation {
        AddUser(Name:String, Email:String, Password:String): User!
    }
`


module.exports = typeDefs