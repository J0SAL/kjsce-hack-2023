import { Container, Row, Col, Image, Accordion, Button } from "react-bootstrap";
import "./home.css";
const quoteImage =
  "https://www.wallquotes.com/sites/default/files/insp0002_1.png";
const garbageImage =
  "https://cdni.iconscout.com/illustration/premium/thumb/garbage-collector-transporting-waste-to-recycle-6021076-4991310.png";

function Home() {
  return (
    <div className="App-Child">
      <Container fluid>
        <Row className="mt-5 home-hero">
          <Col
            md={6}
            className="d-flex align-items-center justify-content-center"
          >
            <Image src={quoteImage} fluid />
          </Col>
          <Col md={6}>
            <Image src={garbageImage} fluid />
          </Col>
        </Row>
        <Row>
          <Col
            md={12}
            className="d-flex align-items-center justify-content-center"
          >
            <div className="text-center">
              <h2>Our Mission</h2>
              <p>
                "To create a sustainable environment for future generations by
                reducing and managing waste."
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col
            md={6}
            className="d-flex align-items-center justify-content-center"
          >
            <Button variant="primary" size="lg">
                  Report an Event
            </Button>{" "}
          </Col>
          <Col
            md={6}
            className="d-flex align-items-center justify-content-center"
          >
            <Button variant="primary" size="lg">
                  View Completed Event
            </Button>{" "}
          </Col>
        </Row>
        <Row className="mt-5">
          <Col
            md={12}
            className="d-flex align-items-center justify-content-center"
          >
            <div className="text-center">
              <h2>FAQ</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>How Does it Work ?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Why Should I Do it ?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;