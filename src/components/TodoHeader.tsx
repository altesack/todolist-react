import { Col, Row } from 'react-bootstrap'

interface Props {
  title: string
}

export const TodoHeader = ({ title }: Props): JSX.Element => {
  return (
    <Row>
        <Col>
            <h1>{title}</h1>
        </Col>
    </Row>
  )
}
