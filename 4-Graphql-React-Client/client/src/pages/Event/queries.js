import { gql } from "@apollo/client";

export const GET_EVENT = gql`
  query getEvent($id: Int!) {
    event(id: $id) {
      id
      title
      desc
      date
      from
      to
      participants {
        users {
          id
          username
        }
      }
      locations {
        id
        name
      }
      user {
        id
        username
      }
    }
  }
`;

export const GET_PARTICIPANTS = gql`
  query getParticipants($id: Int!) {
    event(id: $id) {
      participants {
        id
        user_id
        users {
          id
          username
        }
      }
    }
  }
`;




export const GET_PARTICIPANT = gql`
query getParticipant($id: Int!) {
  participant(id: $id) {
    users {
      username
    }
  }
}
`;

