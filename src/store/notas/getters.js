export default {
    estadoNota: (state) => {
        let existe = 0
        let falta = 0
        state.notas.array.forEach(nota => {
            if (nota.notas) {
                existe++
            } else {
                falta++
            }
        });
        return { existe, falta }
    }
}
