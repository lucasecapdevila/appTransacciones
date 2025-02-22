import { Container } from "react-bootstrap"
import { useSelector } from "react-redux"

const Resumen = () => {
  const listaTransacciones = useSelector((state) => state.transacciones.transacciones)

  let ingresosTotales = 0
  let gastosTotales = 0

  listaTransacciones.map((transaccion) => {
    if(transaccion.ingresoOGasto === 'gasto'){
      gastosTotales += Number(transaccion.monto)
    } else{
      ingresosTotales += Number(transaccion.monto)
      console.log(ingresosTotales);
    }
  })

  return (
    <Container>
      <h2>Resumen de la cuenta</h2>

      <p>Ingresos totales: {ingresosTotales}</p>
      <p>Gastos totales: {gastosTotales}</p>
      <p>Saldo final: {ingresosTotales - gastosTotales}</p>
    </Container>
  )
}

export default Resumen