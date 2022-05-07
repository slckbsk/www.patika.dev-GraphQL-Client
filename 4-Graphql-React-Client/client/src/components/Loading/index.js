import React from 'react'
import { Spin } from 'antd';
import Styles from "./styles.module.css";

function Loading() {
  return (
    <div className={Styles.loading}>
    <Spin />
  </div>
  )
}

export default Loading;