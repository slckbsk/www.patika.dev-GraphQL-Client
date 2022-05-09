import { Routes, Route } from "react-router-dom";
import { Row, Col } from "antd";
import Styles from "./styles.module.css";
import Home from "pages/Home";
import Event from "pages/Event";
import TABNAV from "../TopNav/topNav";

function App() {
  return (
    <div>
      <Row justify="center">
        <Col span={14}>
          <TABNAV/>
          <div className={Styles.content}>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/event/:id" element={<Event />}></Route>
            </Routes>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
