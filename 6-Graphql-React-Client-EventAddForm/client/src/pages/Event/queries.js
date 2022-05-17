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

const participantFragment = gql`
  fragment ParticipantFragment on Participant {
    id
    user_id
    users {
      id
      username
    }
  }
`;

export const GET_EVENT_PARTICIPANTS = gql`
  query getParticipants($id: Int!) {
    event(id: $id) {
      participants {
        ...ParticipantFragment
      }
    }
  }
  ${participantFragment}
`;

export const PARTICIPANTS_SUBSCRIPTIONS = gql`
  subscription {
    participantAdded {
      ...ParticipantFragment
    }
  }
  ${participantFragment}
`;
