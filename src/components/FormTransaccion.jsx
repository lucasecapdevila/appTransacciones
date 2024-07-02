import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { agregarTransaccion } from "../slices/transaccionSlice";

const FormTransaccion = () => {
  const [cuentaOrigen, setCuentaOrigen] = useState("");
  const [cuentaDestino, setCuentaDestino] = useState("");
  const [monto, setMonto] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [ingresoOGasto, setIngresoOGasto] = useState("");

  const dispatch = useDispatch();

  const handleTransacciones = (e) => {
    e.preventDefault();

    if (!cuentaOrigen || !monto || !categoria || !ingresoOGasto) {
      alert("Por favor complete todos los campos requeridos.");
      return;
    }

    const nuevaTransaccion = {
      id: Math.floor(Math.random() * 1000),
      fecha: new Date().toISOString(),
      cuentaOrigen,
      cuentaDestino,
      monto,
      descripcion,
      categoria,
      ingresoOGasto,
    };

    dispatch(agregarTransaccion(nuevaTransaccion));

    setCuentaOrigen("");
    setCuentaDestino("");
    setMonto("");
    setDescripcion("");
    setCategoria("");
    setIngresoOGasto("");

    alert("Transaccion realizada exitosamente.");
  };

  return (
    <Form onSubmit={handleTransacciones}>
      <Form.Group controlId="cuentaOrigen">
        <Form.Label>Seleccione cuenta de origen</Form.Label>
        <Form.Select
          value={cuentaOrigen}
          onChange={(e) => setCuentaOrigen(e.target.value)}
          required
        >
          <option value="" disabled>
            Elija una cuenta de origen
          </option>
          <option value="cuentaCorriente">Cuenta corriente</option>
          <option value="cajaAhorro">Caja de ahorro</option>
        </Form.Select>
      </Form.Group>

      <Form.Group controlId="cuentaDestino">
        <Form.Label>Ingrese CBU/Alias</Form.Label>
        <Form.Control
          type="text"
          value={cuentaDestino}
          onChange={(e) => setCuentaDestino(e.target.value)}
          minLength={15}
          maxLength={22}
          required
        />
      </Form.Group>

      <Form.Group controlId="monto">
        <Form.Label>Ingrese monto a transferir</Form.Label>
        <Form.Control
          type="number"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
          min={1}
          max={1000000}
          required
        />
      </Form.Group>

      <Form.Group controlId="categoria">
        <Form.Label>Ingrese categoría</Form.Label>
        <Form.Select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          required
        >
          <option value="" disabled>
            Elija una categoría
          </option>
          <option value="Sin categoría">Sin categoría</option>
          <option value="Alimentos/Bebidas">Alimentos/Bebidas</option>
          <option value="Entretenimiento">Entretenimiento</option>
          <option value="Servicios">Servicios</option>
          <option value="Supermercado">Supermercado</option>
          <option value="Transporte">Transporte</option>
        </Form.Select>
      </Form.Group>

      <Form.Group controlId="descripcion">
        <Form.Label>Ingrese una breve descripción</Form.Label>
        <Form.Control
          as="textarea"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          maxLength={50}
        />
      </Form.Group>

      <Form.Group controlId="ingresoOGasto">
        <Form.Label>
          Indique si la operación es un ingreso o un gasto
        </Form.Label>
        <Form.Select
          value={ingresoOGasto}
          onChange={(e) => setIngresoOGasto(e.target.value)}
          required
        >
          <option value="" disabled>
            Elija una opción
          </option>
          <option value="ingreso">Ingreso</option>
          <option value="gasto">Gasto</option>
        </Form.Select>
      </Form.Group>

      <Button type="submit" className="mt-2">
        Confirmar
      </Button>
    </Form>
  );
};

export default FormTransaccion;
