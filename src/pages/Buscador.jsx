import { useState } from "react"
import { Container, Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { buscarTransaccion } from "../slices/transaccionSlice"
import CardTransaccion from "../components/CardTransaccion"

const Buscador = () => {
  const dispatch = useDispatch()
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('')

  const listaTransacciones = useSelector((state) => state.transacciones.transaccionesFiltradas)
  console.log(listaTransacciones);

  const handleFiltrar = (e) => {
    const categoria = e.target.value;
    setCategoriaSeleccionada(categoria);
    dispatch(buscarTransaccion({ categoria }));
    console.log(categoria);
    console.log(listaTransacciones);
  };

  return (
    <Container>
      <h2 className="text-center my-5">Buscador</h2>
      <form className="ms-5 my-4">
        <label>Seleccione una categoría</label>
        <select
          className="ms-2"
          value={categoriaSeleccionada}
          onChange={handleFiltrar}
        >
          <option value="Sin categoría">Sin categoría</option>
          <option value="Alimentos/Bebidas">Alimentos/Bebidas</option>
          <option value="Entretenimiento">Entretenimiento</option>
          <option value="Servicios">Servicios</option>
          <option value="Supermercado">Supermercado</option>
          <option value="Transporte">Transporte</option>
        </select>
      </form>

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

export default Buscador