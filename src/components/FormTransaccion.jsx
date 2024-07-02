import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { agregarTransaccion } from "../slices/transaccionSlice";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const FormTransaccion = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch();

  const handleTransacciones = (transaccion) => {
    const nuevaTransaccion = {
      id: Math.floor(Math.random() * 1000),
      ...transaccion,
    };

    dispatch(agregarTransaccion(nuevaTransaccion));

    Swal.fire({
      title: "Transacción realizada",
      icon: "success",
    });

    reset()
  };

  return (
    <Form onSubmit={handleSubmit(handleTransacciones)}>
      <Form.Group controlId="cuentaOrigen">
        <Form.Label>Seleccione cuenta de origen</Form.Label>
        <Form.Select
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
