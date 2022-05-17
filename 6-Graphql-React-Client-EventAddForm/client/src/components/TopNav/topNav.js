import React from "react";
import { Menu } from "antd";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import Counter from "components/PostCounter/index";
import Styles from "./styles.module.css";

const items = [
  {
    label: <Link to="/">HOME</Link>,
    key: "/",
  },
  {
    label: <Link to="/newevent">NEW EVENT</Link>,
    key: "/newevent",
  },
];

const Tabnav = () => {
  const [current, setCurrent] = React.useState("/");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          <th className={styles.tleft} colSpan="1">
            <Menu
              className={styles.tabnav}
              onClick={onClick}
              selectedKeys={current}
              mode="horizontal"
              items={items}
            />
          </th>
          <th className={Styles.trigth} colSpan="1">
            <Counter />
          </th>
        </tr>
      </tbody>
    </table>
  );
};

export default Tabnav;
