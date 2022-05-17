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
    <div className={Styles.content}>
       <div className={Styles.header}> Event id:&nbsp;{data.event.id}    </div>
      <table>
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
              {data.event.date.substring(0, 10)}&nbsp;/ from:&nbsp;{data.event.from.substring(11, 16)}
              &nbsp;-&nbsp;to:&nbsp;{data.event.to.substring(11, 16)}
            </td>
          </tr>
          <tr>
            <td className={Styles.textb1}>Description:&nbsp;&nbsp; </td>
            <td className={Styles.text}>{data.event.desc}</td>
          </tr>
          <tr>
            <td className={Styles.textb1}> Participants:</td>
            <td className={Styles.participant}>
                <Participants participant_id={n_id} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Event;
