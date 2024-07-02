import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { agregarTransaccion } from "../slices/transaccionSlice";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const FormTransaccion = () => {
  const [cuentaOrigen, setCuentaOrigen] = useState("");
  const [cuentaDestino, setCuentaDestino] = useState("");
  const [monto, setMonto] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [fecha, setFecha] = useState("");
  const [ingresoOGasto, setIngresoOGasto] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const handleTransacciones = (e) => {
    e.preventDefault();

    // if (!cuentaOrigen || !monto || !categoria || !fecha || !ingresoOGasto) {
    //   alert("Por favor complete todos los campos requeridos.");
    //   return;
    // }

    const nuevaTransaccion = {
      id: Math.floor(Math.random() * 1000),
      cuentaOrigen,
      cuentaDestino,
      monto,
      descripcion,
      categoria,
      fecha,
      ingresoOGasto,
    };

    dispatch(agregarTransaccion(nuevaTransaccion));

    setCuentaOrigen("");
    setCuentaDestino("");
    setMonto("");
    setDescripcion("");
    setCategoria("");
    setFecha("");
    setIngresoOGasto("");

    Swal.fire({
      title: "Transacción realizada",
      icon: "success",
    });

    // alert("Transaccion realizada exitosamente.");
  };

  return (
    <Form onSubmit={handleSubmit(handleTransacciones)}>
      <Form.Group controlId="cuentaOrigen">
        <Form.Label>Seleccione cuenta de origen</Form.Label>
        <Form.Select
          value={cuentaOrigen}
          onChange={(e) => setCuentaOrigen(e.target.value)}
          {...register("cuentaOrigen", {
            required: "Seleccione una cuenta de origen",
          })}
        >
          <option value="" disabled>
            Elija una cuenta de origen
          </option>
          <option value="cuentaCorriente">Cuenta corriente</option>
          <option value="cajaAhorro">Caja de ahorro</option>
        </Form.Select>
        <Form.Text className="text-danger">
          {errors.cuentaOrigen?.message}
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="cuentaDestino">
        <Form.Label>Ingrese CBU/Alias</Form.Label>
        <Form.Control
          type="text"
          value={cuentaDestino}
          onChange={(e) => setCuentaDestino(e.target.value)}
          {...register("cuentaDestino", {
            required: "La cuenta destino es obligatoria",
            minLength: {
              value: 5,
              message: "La cuenta debe tener como mínimo 5 caracteres",
            },
            maxLength: {
              value: 50,
              message: "La cuenta debe tener como máximo 50 caracteres",
            },
          })}
        />
        <Form.Text className="text-danger">
          {errors.cuentaDestino?.message}
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="monto">
        <Form.Label>Ingrese monto a transferir</Form.Label>
        <Form.Control
          type="number"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
          {...register("monto", {
            required: "El monto es obligatorio",
            min: {
              value: 10,
              message: "El monto debe ser como mínimo de $10",
            },
            max: {
              value: 1000000,
              message: "El monto debe ser como máximo de $1000000",
            },
          })}
        />
        <Form.Text className="text-danger">{errors.monto?.message}</Form.Text>
      </Form.Group>

      <Form.Group controlId="categoria">
        <Form.Label>Ingrese categoría</Form.Label>
        <Form.Select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          {...register("categoria", {
            required: "Seleccione una categoría",
          })}
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
        <Form.Text className="text-danger">
          {errors.categoria?.message}
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="descripcion">
        <Form.Label>Ingrese una breve descripción</Form.Label>
        <Form.Control
          as="textarea"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          {...register("descripcion", {
            required: "La descripción es obligatoria",
            minLength: {
              value: 5,
              message: "La descripción debe tener como mínimo 5 caracteres",
            },
            maxLength: {
              value: 200,
              message: "La descripción debe tener como máximo 200 caracteres",
            },
          })}
        />
        <Form.Text className="text-danger">
          {errors.descripcion?.message}
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="fecha">
        <Form.Label>Ingrese la fecha</Form.Label>
        <Form.Control
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          {...register("fecha", {
            required: "La fecha es obligatoria",
          })}
        />
        <Form.Text className="text-danger">{errors.fecha?.message}</Form.Text>
      </Form.Group>

      <Form.Group controlId="ingresoOGasto">
        <Form.Label>
          Indique si la operación es un ingreso o un gasto
        </Form.Label>
        <Form.Select
          value={ingresoOGasto}
          onChange={(e) => setIngresoOGasto(e.target.value)}
          {...register("ingresoOGasto", {
            required: "Seleccione si es ingreo o gasto",
          })}
        >
          <option value="" disabled>
            Elija una opción
          </option>
          <option value="ingreso">Ingreso</option>
          <option value="gasto">Gasto</option>
        </Form.Select>
        <Form.Text className="text-danger">
          {errors.ingresoOGasto?.message}
        </Form.Text>
      </Form.Group>

      <Button type="submit" className="mt-2">
        Confirmar
      </Button>
    </Form>
  );
};

export default FormTransaccion;
