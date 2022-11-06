import LineChart from "./LineChart";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col><LineChart/></Col>
        <Col><LineChart/></Col>
        <Col><LineChart/></Col>
      </Row>
      <Row>
        <Col><LineChart/></Col>
        <Col><LineChart/></Col>
        <Col><LineChart/></Col>
      </Row>
      <Row>
        <Col><LineChart/></Col>
        <Col><LineChart/></Col>
        <Col><LineChart/></Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
