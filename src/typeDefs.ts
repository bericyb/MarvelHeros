const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    heros: [Hero]
    heroByID(id: String!): Hero
    heroByName(name: String!): Hero
    herosByPower(power: String!): [Hero]
    familyByID(id: String!): Family
    groups: [Group]
  }

  type Mutation {
    incrementMovieCount(id: String!): incrementMovieCountResponse!
    insertNewHero(hero: HeroInput!): insertNewHeroResponse!
    removeHero(id: String!): removeHeroResponse
    setFamily(id: String!, family: FamilyInput!): setFamilyResponse!
  }

  type removeHeroResponse {
    code: Int!
  }

  type incrementMovieCountResponse {
    code: Int!
    success: Boolean!
    message: String!
    movieCount: Int
  }

  type insertNewHeroResponse {
    code: Int!
    success: Boolean!
    message: String!
    hero: Hero
  }

  type setFamilyResponse {
    code: Int!
  }

  type Family {
    dad: Boolean!
    mom: Boolean!
  }

  type Hero {
    name: String!
    power: String!
    group: String!
    family: Family
    movieCount: Int!
  }

  type Group {
    name: String!
    heros: [Hero]
  }

  input HeroInput {
    name: String!
    power: String!
    group: String!
    family: FamilyInput
    movieCount: Int!
  }

  input FamilyInput {
    dad: Boolean!
    mom: Boolean!
  }
`;

export default typeDefs;
