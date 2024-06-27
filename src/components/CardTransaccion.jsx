import { useSelector } from "react-redux";

const CardTransaccion = () => {
  const listaTransacciones = useSelector((state) => state.transacciones);

  return (
    <div>
      {listaTransacciones.map((transaccion) => {
        return (
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Transacción</h5>
              <p className="card-text">Descripción: </p>
              <p className="card-text">Monto: </p>
              <p className="card-text">Categoría: </p>
              <p className="card-text">Fecha: </p>
              <p className="card-text">Ingreso o gasto: </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardTransaccion;
