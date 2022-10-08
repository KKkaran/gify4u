import { gql } from "@apollo/client";

export const query_users = gql`
    query getUsers {
        users {
            username
        }
    }
`;
export const login_user = gql`
    mutation login($email: String!, $password: String!){
        login(email: $email, password: $password) {
            token
            user {
                _id
                email
                username
            }
        }
    }
`;
export const add_user = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`;