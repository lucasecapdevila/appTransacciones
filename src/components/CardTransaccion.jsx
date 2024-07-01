import { useDispatch } from 'react-redux';
import { editarTransaccion, eliminarTransaccion } from '../slices/transaccionSlice';

const CardTransaccion = ({transaccion}) => {
  
	const dispatch = useDispatch();

	const handleEditar = (id, descripcion, monto, categoria, fecha) => {
		dispatch(editarTransaccion({ id, descripcion, monto, categoria, fecha }));
	};

  const handleEliminar = (id) => {
		dispatch(eliminarTransaccion({ id }));
    window.location.reload();
	};

  return (
          <tr key={transaccion?.id}>
            <td>{transaccion?.cuentaOrigen}</td>
            <td>{transaccion?.cuentaDestino}</td>
            <td><span>$</span>{transaccion?.monto} </td>
            <td>{transaccion?.descripcion} </td>
            <td>{transaccion?.categoria} </td>
            <td>{transaccion?.fecha} </td>
            <td>{transaccion?.ingresoOGasto} </td>
            <td>
				<button
					className="btn btn-success"
					onClick={() => handleEditar(transaccion.id,
                      transaccion.descripcion, transaccion.monto,
                      transaccion.categoria, transaccion.fecha)}
				>
					Editar
				</button>
			</td>
			<td>
				<button
					className="btn btn-danger"
					onClick={() => handleEliminar(transaccion.id)}
				>
					Eliminar
				</button>
			</td>
          </tr>
  );
};

export default CardTransaccion;