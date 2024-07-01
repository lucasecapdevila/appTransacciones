import { useState, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editarTransaccion } from '../slices/transaccionSlice';

const EditTransaccion = ({ show, handleClose, transaccion }) => {
    const [cuentaOrigen, setCuentaOrigen] = useState("");
    const [cuentaDestino, setCuentaDestino] = useState("");
    const [monto, setMonto] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [categoria, setCategoria] = useState("");
    const [fecha, setFecha] = useState("");
    const [ingresoOGasto, setIngresoOGasto] = useState("");
   

    useEffect(() => {
        setCuentaOrigen(transaccion.cuentaOrigen);
        setCuentaDestino(transaccion.cuentaDestino);
        setMonto(transaccion.monto);
        setDescripcion(transaccion.descripcion);
        setCategoria(transaccion.categoria);
        setFecha(transaccion.fecha);
        setIngresoOGasto(transaccion.ingresoOGasto);
    }, [transaccion]);


    const dispatch = useDispatch();
		
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editarTransaccion({
            id: transaccion.id,
            descripcion,
            monto,
            categoria,
            fecha,
            cuentaOrigen,
            cuentaDestino,
            ingresoOGasto
        }));
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Editar Transacción</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId='cuentaOrigen'>
                        <Form.Label>Seleccione cuenta de origen</Form.Label>
                        <Form.Select value={cuentaOrigen} onChange={(e) => setCuentaOrigen(e.target.value)}>
                            <option value='' disabled>Elija una cuenta de origen</option>
                            <option value='cuentaCorriente'>Cuenta corriente</option>
                            <option value='cajaAhorro'>Caja de ahorro</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group controlId='cuentaDestino'>
                        <Form.Label>Ingrese CBU/Alias</Form.Label>
                        <Form.Control type="text" value={cuentaDestino} onChange={(e) => setCuentaDestino(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId='monto'>
                        <Form.Label>Ingrese monto a transferir</Form.Label>
                        <Form.Control type="number" value={monto} onChange={(e) => setMonto(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId='categoria'>
                        <Form.Label>Ingrese categoría</Form.Label>
                        <Form.Select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
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
                        <Form.Control as="textarea" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId='fecha'>
                        <Form.Label>Ingrese la fecha</Form.Label>
                        <Form.Control type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId='ingresoOGasto'>
                        <Form.Label>Indique si la operación es un ingreso o un gasto</Form.Label>
                        <Form.Select value={ingresoOGasto} onChange={(e) => setIngresoOGasto(e.target.value)}>
                            <option value="" disabled>Elija una opción</option>
                            <option value="ingreso">Ingreso</option>
                            <option value="gasto">Gasto</option>
                        </Form.Select>
                    </Form.Group>

                    <Button type='submit' className='mt-2'>Editar</Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default EditTransaccion;
