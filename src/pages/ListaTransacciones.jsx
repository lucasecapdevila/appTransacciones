import { Container, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import CardTransaccion from '../components/CardTransaccion';

const ListaTransacciones = () => {
  const listaTransacciones = useSelector((state) => state.transacciones);

  return (
    <Container>
      <Table responsive>
        <thead>
          <tr>
            <th>Cuenta origen</th>
            <th>Cuenta destino</th>
            <th>Monto</th>
            <th>Descripción</th>
            <th>Categoría</th>
            <th>Fecha</th>
            <th>Ingreso/Gasto</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {listaTransacciones.map((transaccion) => (
            <CardTransaccion transaccion={transaccion} key={transaccion.id}></CardTransaccion>
          ))}
        </tbody>
      </Table>
</Container>
  )
}

export default ListaTransacciones;