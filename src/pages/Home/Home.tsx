import { Col, Container, Row } from 'react-bootstrap'
import { FormattedMessage } from 'react-intl'
import { DarkMode, LanguageToggle } from '../../components'

const Home = () => {
    return (
        <Container fluid>
            <Row>
                <Col className='d-flex justify-content-between pt-4'>
                    <p><FormattedMessage id="message.simple" /></p>
                    <LanguageToggle />
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-end pt-2'>
                    <DarkMode />
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <h2>Happy coding!</h2>
                </Col>
            </Row>
        </Container>
    )
}

export default Home