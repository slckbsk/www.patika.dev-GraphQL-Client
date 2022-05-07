import { List } from "antd";
import { useQuery } from "@apollo/client";
import { GET_PARTICIPANTS } from "./queries";
import Loading from "components/Loading";

function Participants({ participant_id }) {
  const { loading, error, data } = useQuery(GET_PARTICIPANTS, {
    variables: {
      id: participant_id,
    },
  });

  if (loading) return <Loading />;
  if (error) return <div> Error!: {error.message} </div>;

  return (
    <div>
      <List
        loading={false}
        itemLayout="horizontal"
        dataSource={data.event.participants}
        renderItem={(item) => <p>-{item.users[0].username}</p>}
      />
    </div>
  );
}

export default Participants;
