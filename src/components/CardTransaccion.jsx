import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { eliminarTransaccion } from '../slices/transaccionSlice';
import EditTransaccion from '../pages/EditTransaccion';

const CardTransaccion = ({ transaccion }) => {
    const dispatch = useDispatch();
    const [editarShow, setEditarShow] = useState(false);

    const handleEliminar = (id) => {
        dispatch(eliminarTransaccion({ id }));
        window.location.reload();
    };

    const handleEdit = () => {
        setEditarShow(true);
    };

    const handleClose = () => {
        setEditarShow(false);
    };

    return (
        <>
            <tr key={transaccion?.id}>
                <td>{transaccion?.cuentaOrigen}</td>
                <td>{transaccion?.cuentaDestino}</td>
                <td><span>$</span>{transaccion?.monto}</td>
                <td>{transaccion?.descripcion}</td>
                <td>{transaccion?.categoria}</td>
                <td>{transaccion?.fecha}</td>
                <td>{transaccion?.ingresoOGasto}</td>
                <td>
                    <button className='btn btn-success' onClick={handleEdit}>Editar</button>
                </td>
                <td>
                    <button className="btn btn-danger" onClick={() => handleEliminar(transaccion.id)}>Eliminar</button>
                </td>
            </tr>
            <EditTransaccion show={editarShow} handleClose={handleClose} transaccion={transaccion} />
        </>
    );
};

export default CardTransaccion;
