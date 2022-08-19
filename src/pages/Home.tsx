import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Col, Container, Row } from 'react-bootstrap'

export const Home = (): JSX.Element => {
  return (
      <Container>
        <Row>
          <Col>
            <h1>Application home</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button href={'https://reactjs.org'}>Learn React</Button>
          </Col>
          <Col>
            <Button href={'/'}>Home</Button>
          </Col>
          <Col>
            <Button href={'/page1'}>Page One</Button>
          </Col>
          <Col>
            <Button href={'/page2'}>Page Two</Button>
          </Col>
        </Row>
      </Container>
  )
}
