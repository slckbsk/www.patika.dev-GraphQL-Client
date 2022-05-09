import { List } from "antd";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_EVENT } from "./queries";
import Loading from "components/Loading";
import Styles from "./styles.module.css";
import Participants from "./participants";


function Event() {
  const { id } = useParams();
  const n_id = parseInt(id);

  const { loading, error, data } = useQuery(GET_EVENT, {
    variables: {
      id: n_id,
    },
  });

  if (loading) return <Loading />;
  if (error) return <div> Error!: {error.message} </div>;

  return (
    <table className={Styles.listcontent}>
      <thead></thead>
      <tbody>
        <tr>
        <td className={Styles.textb}>Title: </td>
          <td className={Styles.text}>{data.event.title}</td>
        </tr>
        <tr>
          <td className={Styles.textb}>Host: </td>
          <td className={Styles.text}>{data.event.user.username}</td>
        </tr>
        <tr>
          <td className={Styles.textb}>Location:</td>
          <td className={Styles.text}>{data.event.locations.name}</td>
        </tr>
        <tr>
          <td className={Styles.textb}>Date:</td>
          <td className={Styles.text}>
            {data.event.date}&nbsp;/ from:&nbsp;{data.event.from}
            &nbsp;-&nbsp;to:&nbsp;{data.event.to}
          </td>
        </tr>
        <tr>
          <td className={Styles.textb1}>Description:&nbsp;&nbsp; </td>
          <td className={Styles.text}>{data.event.desc}</td>
        </tr>
        <tr>
          <td className={Styles.textb1}> Participants:</td>
          <td className={Styles.text}>
            <Participants participant_id={n_id} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Event;
