import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { agregarTransaccion } from '../slices/transaccionSlice'


const FormTransaccion = () => {
    const [cuentaOrigen, setCuentaOrigen] = useState("")
    const [cuentaDestino, setCuentaDestino] = useState("")
    const [monto, setMonto] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [categoria, setCategoria] = useState("")
    const [fecha, setFecha] = useState("")
    
    const handleTransacciones = (e)=>{
        e.preventDefault();
        //validaciones
    }

    


  return (
    <Form>
        <Form.Group controlId='cuentaOrigen'>
          <Form.Label></Form.Label>
          <Form.Select>
            <option value='' disabled>Elija una cuenta de origen</option>
            <option value='cuentaCorriente'>Cuenta corriente</option>
            <option value='cajaAhorro'>Caja de ahorro</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId='cuentaDestino'>
          <Form.Label>Ingrese CBU/Alias</Form.Label>
          <Form.Control type="text"></Form.Control>
        </Form.Group>

        <Form.Group controlId='monto'>
          <Form.Label>Ingrese monto a transferir</Form.Label>
          <Form.Control type="number"></Form.Control>
        </Form.Group>

        <Form.Group controlId='categoria'>
          <Form.Label>Ingrese categoría</Form.Label>
          <Form.Select>
            <option value="" disabled>Elija una categoría</option>
            <option value="sinCategoría">Sin categoría</option>
            <option value="alimentosBebidas">Alimentos/Bebidas</option>
            <option value="entretenimiento">Entretenimiento</option>
            <option value="servicios">Servicios</option>
            <option value="supermercado">Supermercado</option>
            <option value="transporte">Transporte</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId='descripcion'>
          <Form.Label>Ingrese una breve descripción</Form.Label>
          <Form.Control as="textarea"></Form.Control>
        </Form.Group>

        <Form.Group controlId='fecha'>
          <Form.Label>Ingrese la fecha</Form.Label>
          <Form.Control type="date"></Form.Control>
        </Form.Group>

        <Form.Group controlId='ingresoOGasto'>
          <Form.Label>Indique si la operación es un ingreso o un gasto</Form.Label>
          <Form.Control type="date"></Form.Control>
        </Form.Group>
      </Form>
  )
}

export default FormTransaccion