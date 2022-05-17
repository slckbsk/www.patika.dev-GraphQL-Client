import { Routes, Route } from "react-router-dom";
import { Row, Col } from "antd";
import Styles from "./styles.module.css";
import Home from "pages/Home";
import Event from "pages/Event";
import NewEvent from "pages/NewEvent";
import TABNAV from "../TopNav/topNav";

function App() {
  return (
    <div >
      <Row className={Styles.content}  >
        <Col span={14}>
          <TABNAV/>
          <div>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/event/:id" element={<Event />}></Route>
              <Route path="/newevent" element={<NewEvent />}></Route>
            </Routes>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
