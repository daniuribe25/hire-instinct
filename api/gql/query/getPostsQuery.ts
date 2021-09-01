import { gql } from "@apollo/client";

const getPosts = gql`
  query Posts {
    posts(filter: { }) {
      id
      title
      description
      location
      logo
      salaryBase
      salaryUpTo
      salaryFrequency
      vacants
      labels
      jobType
      insertedAt
      company {
        id
        name
        email
        phone
        description
        postCredits
        logo
      }
    }
  }
`;

export default getPosts;
