import { Container } from "react-bootstrap"
import FormTransaccion from "../components/FormTransaccion"

const Home = () => {
  return (
    <Container>
      <h1 className="text-center">App de Transacciones</h1>
      <h2>Realice sus transacciones aquí</h2>

      <FormTransaccion />
    </Container>
  )
}

export default Home