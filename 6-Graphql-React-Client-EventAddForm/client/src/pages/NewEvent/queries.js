
import { gql } from "@apollo/client";


export const GET_ALL_USERS = gql`
query getAllUsers {
    users {
      id
      username
    }
  }
`;

export const GET_ALL_LOCATIONS = gql`
query getAllLocations {
    locations {
      id
      name
    }
  }
`;



export const NEW_EVENT_MUTATION = gql`
mutation addNewEvent ($data: CreateEventInput!) {
    createEvent(data : $data) {
      id
      title
      desc
      date
      from
      to
      location_id
      user_id
    }
  }
`;

