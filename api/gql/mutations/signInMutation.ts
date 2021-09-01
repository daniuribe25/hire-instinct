import { gql } from "@apollo/client";

const signIn = gql`
  mutation($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      token
      user {
          id
          fullname
          email
          phone
      }
      company {
          id
          website
          name
      }
    }
  }
`;

export default signIn;
