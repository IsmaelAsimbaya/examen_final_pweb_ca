import axios from 'axios'

//metodos fachada
export const obtenerVuelosDisponiblesODF = async (origen, destino, fechaVuelo) => {
    return await getVuelosDisponiblesODF_AXIOS(origen, destino, fechaVuelo);
}

export const convertirVuelosDisponiblesLista = async (data) => {
    const lista = []
    for (const {numero: n , origen: o, destino: d, categoria:c, avion: a, valorAsiento:va } of data){
        lista.push({numero: n , origen: o, destino: d, categoria:c, avion: a, valorAsiento:va })
    }
    return lista
}

//metodos consumo api
const getVuelosDisponiblesODF_AXIOS = async (origen, destino, fechaVuelo) => {
    const data = axios.get(`http://localhost:8085/API/Aerolinea/V1/clientes/vuelosDisponiblesODF?origen=${origen}&destino=${destino}&fechaVuelo=${fechaVuelo}`).then(r => r.data)
    console.log(data)
    return data
}