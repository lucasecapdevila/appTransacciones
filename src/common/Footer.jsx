import { Container, Row, Col} from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="footer fixed-bottom py-3 mt-3 bg-dark">
            <Container>
                <Row>
                    <Col>
                        <p className="text-center text-white">App transacciones G1-RC &copy; 2024-Todos los derechos reservados.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
