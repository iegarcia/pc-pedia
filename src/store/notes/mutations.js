import * as types from './types'

export default {
    [types.AGREGAR_NOTA]: function (state, data) {
        state.notas.push(data)
    },
    [types.MODIFICAR_NOTA]: function (state, data) {
        let i = 0
        state.notas[i] = data
    },
    [types.ELIMINAR_NOTA]: function (state, data) {
        state.notas.splice(data, 1)
    }
}
