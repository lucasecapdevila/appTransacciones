import { createSlice } from '@reduxjs/toolkit';

const cargarTransacciones = () =>{
    const transaccionesAlmacenadas = localStorage.getItem("transacciones")
    return transaccionesAlmacenadas ? JSON.parse(transaccionesAlmacenadas) : []
}

const guardarTransaccion = (transacciones) =>{
    localStorage.etIem("transacciones", JSON.stringify(turnos))
}


const transaccionSlice = createSlice({
    name: 'transacciones',
    initialState: cargarTransacciones(),
    reducers: {
        agregarTransaccion: (state, action) => {
            state.unshift(action.payload)
            guardarTransaccion(state)
        },
        
        editarTransaccion: (state, action) => {
            const {id, categoria} = action.payload;
            const transacciones = state.find((transaccion) => 
                transaccion.id === id ? action.payload : transaccion);

        },
        eliminarTransaccion: () => {
            
        },
    },      
});

export const { agregarTransaccion} = transaccionSlice.actions;

export default transaccionSlice.reducer;