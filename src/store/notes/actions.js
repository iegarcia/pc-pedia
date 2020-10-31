import * as types from './types'

export default {
    [types.AGREGAR_NOTA]: function ({ commit, state }, data) {
        console.log(state);
        commit(types.AGREGAR_NOTA, data)
    },
    [types.MODIFICAR_NOTA]: function ({ commit, state }, id) {
        console.log(state);
        commit(types.MODIFICAR_NOTA, id)
    },
    [types.ELIMINAR_NOTA]: function ({ commit, state }, data) {
        console.log(state);
        commit(types.ELIMINAR_NOTA, data)
    }
}
