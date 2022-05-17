import { List } from "antd";
import { useQuery } from "@apollo/client";
import { GET_EVENT_PARTICIPANTS, PARTICIPANTS_SUBSCRIPTIONS } from "./queries";
import Loading from "components/Loading";
import { useEffect } from "react";
import Styles from "./styles.module.css";

function Participants({ participant_id })
 {
  const { called, loading, error,  data, subscribeToMore } = useQuery(GET_EVENT_PARTICIPANTS, {
    variables: {
      id: participant_id,
    },
  });

  useEffect(() => {
    if (!loading && called) {
      subscribeToMore({
        document: PARTICIPANTS_SUBSCRIPTIONS,
        updateQuery: (prev, { subscriptionData }) => {
          if (!subscriptionData.data) return prev;
          const newParticipantItem = subscriptionData.data.participantAdded;
          return {
            event: {
              ...prev.event,
              participants:  [...prev.event.participants, newParticipantItem ],
            },
          };
        },
      });
    }
  }, [loading, called, subscribeToMore]);


  if (loading) return <Loading />;
  if (error) return <div> Error!: {error.message} </div>;

  return (
      <List
        loading={false}
        itemLayout="horizontal"
        dataSource={data.event.participants}
        renderItem={(item) => <p  className={Styles.text}><strong> - </strong>{item.users[0].username}</p>}
      />
  );
}

export default Participants;
