const { ApolloServer, gql } = require("apollo-server");
const providers = require("./providers");

const typeDefs = gql`
  enum Status {
    APPROVED
    PREQUALIFIED
    UNDER_REVIEW
    EDIT_IN_PROGRESS
    REJECTED
  }

  type SignatureProvider {
    uuid: String
    firstName: String
    middleName: String
    lastName: String
    title: String
    abbreviatedTitle: String
    photoUrl: String
    services: String
    boardCertified: Boolean
    leadProvider: Boolean
    speciality: String
    education: String
    aboutMe: String
    yearsExperience: Int
    proceduresPerformed: Int
  }

  type Query {
    providers: [SignatureProvider]
  }
`;

const resolvers = {
  Query: {
    providers: () => {
      return providers;
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server started at ${url}`);
});
