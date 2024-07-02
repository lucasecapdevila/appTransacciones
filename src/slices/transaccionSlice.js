import { createSlice } from '@reduxjs/toolkit';

const cargarTransacciones = () =>{
    const transaccionesAlmacenadas = localStorage.getItem("transacciones")
    return transaccionesAlmacenadas ? JSON.parse(transaccionesAlmacenadas) : []
};

const guardarTransaccion = (transacciones) =>{
    localStorage.setItem("transacciones", JSON.stringify(transacciones))
};



const transaccionSlice = createSlice({
    name: 'transacciones',
    initialState: {
        transacciones: cargarTransacciones(),
        transaccionesFiltradas: []
    },
    reducers: {
        agregarTransaccion: (state, action) => {
            state.transacciones.unshift(action.payload)
            guardarTransaccion(state.transacciones);
        },
        
        editarTransaccion: (state, action) => {
            const {id, cuentaOrigen, cuentaDestino, descripcion, monto, categoria, ingresoOGasto} = action.payload;
            const campo = state.findIndex((transaccion => transaccion.id === id));
            if (campo !== -1){
                state[campo] = {
                    ...state[campo],
                    cuentaOrigen,
                    cuentaDestino,
                    descripcion,
                    monto,
                    categoria,
                    ingresoOGasto
                };
                guardarTransaccion(state);
            }

        },
        eliminarTransaccion: (state, action) => {
            const {id} = action.payload;
            const transacciones = cargarTransacciones();
            const nuevasTransacciones = transacciones.filter((transaccion) => transaccion.id !== id);
            guardarTransaccion(nuevasTransacciones);            
        },
        buscarTransaccion: (state, action) => {
            const { categoria } = action.payload;
            state.transaccionesFiltradas = state.transacciones.filter(transaccion => transaccion.categoria === categoria);
        }
    },      
});

export const { agregarTransaccion, editarTransaccion, eliminarTransaccion, buscarTransaccion} = transaccionSlice.actions;

export default transaccionSlice.reducer;