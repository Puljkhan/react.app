import { useState } from "react";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Bootstrap = () => {
  const [show, setShow] = useState(true);
  const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];
  return (
    <div className="container">
      <div className="Dashboard">
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Home">
            <Alert show={show} variant="success">
              <Alert.Heading>My Alert</Alert.Heading>
              <h2>Bootstrap</h2>
              <Button onClick={() => setShow(false)} variant="primary">
                Click me
              </Button>
            </Alert>
            {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
            <hr />
            <div className="dashboard">
              <h2>60</h2>
              <ProgressBar now={60} />
            </div>
            <hr />
            <div className="chart">
              <LineChart
                width={600}
                height={300}
                data={data}
                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
              >
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </div>
            <div className="table">
              <Table>
                <tr>
                  <th>Name</th>
                  <th>Last Name</th>
                  <th>Age</th>
                </tr>
                <tr>
                  <td>Goran</td>
                  <td>Viljanac</td>
                  <td>19</td>
                </tr>
                <tr>
                  <td>Nikolina</td>
                  <td>Kirčanski</td>
                  <td>40</td>
                </tr>
              </Table>
            </div>
          </Tab>
          <Tab eventKey="profile" title="Profile"></Tab>
        </Tabs>
      </div>
    </div>
  );
};
export default Bootstrap;
