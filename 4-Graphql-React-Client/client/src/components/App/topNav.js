import React from "react";
import { Menu } from "antd";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const items = [
  {
    label: <Link to="/">HOME</Link>,
    key: "/",
  },
];

const TABNAV = () => {
  const [current, setCurrent] = React.useState("/");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      className={styles.tabnav}
      onClick={onClick}
      selectedKeys={current}
      mode="horizontal"
      items={items}
    />
  );
};

export default TABNAV;
