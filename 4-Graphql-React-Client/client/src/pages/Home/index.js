import { List } from "antd";
import { useQuery } from "@apollo/client";
import Loading from "components/Loading";
import { GET_EVENTS } from "./queries";
import { Link } from "react-router-dom";
import Styles from "./styles.module.css";

function Home() {
  const { loading, error, data } = useQuery(GET_EVENTS);

  if (loading) return <Loading />;
  if (error) return <div> Error!: {error.message}</div>;

  return (
    <List
      bordered={true}
      loading={false}
      itemLayout="horizontal"
      dataSource={data.events}
      renderItem={(item) => (
        <div className={Styles.listcontent}>
          <table>
            <thead>
              <tr>
                <th className={Styles.tleft}>&nbsp;{item.title}</th>
                <th className={Styles.trigth}>{item.date}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th colSpan="2">
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
