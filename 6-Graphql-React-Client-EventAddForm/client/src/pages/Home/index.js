import { List } from "antd";
import { useQuery } from "@apollo/client";
import Loading from "components/Loading";
import { GET_EVENTS, EVENTS_SUBSCRIPTION } from "./queries";
import { Link } from "react-router-dom";
import Styles from "./styles.module.css";
import { useEffect } from "react";

function Home() {
  const { loading, error, data, subscribeToMore  } = useQuery(GET_EVENTS);

  useEffect(() => {
    subscribeToMore({
        document: EVENTS_SUBSCRIPTION,
        updateQuery: (prev, { subscriptionData }) => {
            if(!subscriptionData.data) return prev;
            return {
                events: [
                    subscriptionData.data.eventCreated, ...prev.events,
                ],
            }
        }
    })
}, [subscribeToMore]);



  if (loading) return <Loading />;
  if (error) return <div> Error!: {error.message}</div>;

  return (
    <List 
      className={Styles.listcontent}
      bordered={false}
      loading={false}
      itemLayout="horizontal"
      dataSource={data.events}
      renderItem={(item) => (
      <div className={Styles.table}>
          <table className={Styles.tablemain}>
            <thead>
              <tr>
                <th colSpan="1" className={Styles.tleft}>&nbsp;{item.title}</th>
                <th colSpan="1" className={Styles.trigth}>{item.date.substring(0, 10)}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <Link className={Styles.description} to={`/event/${item.id}`}>
                    <p>&nbsp;{item.desc}</p>
                  </Link>
                </th>
              </tr>
            </tbody>
          </table>
    </div>
      )}
    />
  );
}

export default Home;
