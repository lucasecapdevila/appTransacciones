import { Container } from "react-bootstrap"
import FormTransaccion from "../components/FormTransaccion"

const Home = () => {
  return (
    <Container style={{ marginBottom: '10rem' }}>
   
      <h2 className="my-2">Realice sus transacciones aquí</h2>

      <FormTransaccion />
    </Container>
  )
}

export default Home