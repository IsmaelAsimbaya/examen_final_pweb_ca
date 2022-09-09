<template>
  <div>
    <h1>Pagina Clientes</h1>
    <h2>Buscar Vuelo Disponible</h2>
  </div>

  <div>
    <label for="origen">Origen: </label>
    <input id="origen" v-model="origen" type="text" />
    <br />
    <br />
    <label for="destino">Destino: </label>
    <input id="destino" v-model="destino" type="text" />
    <br />
    <br />
    <label for="fecha_vuelo">Fecha Vuelo: </label>
    <input id="fecha_buelo" v-model="fechaVuelo" type="text" />
    <br />
    <br />
    <button @click="buscarVuelosDisponibles">Buscar</button>
  </div>

  <br />

  <div>
    <table style="margin: auto; border: solid">
      <thead>
        <tr>
          <th>N° Vuelo</th>
          <th>Origen</th>
          <th>Destino</th>
          <th>Categoria</th>
          <th>Id Avion</th>
          <th>Valor Asiento</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="vuelo in listaVuelosDisponibles" v-bind:key="vuelo">
          <th>{{ vuelo.numero }}</th>
          <th>{{ vuelo.origen }}</th>
          <th>{{ vuelo.destino }}</th>
          <th>{{ vuelo.categoria }}</th>
          <th>{{ vuelo.avion }}</th>
          <th>{{ vuelo.valorAsiento }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>
    
<script>
import {
  obtenerVuelosDisponiblesODF,
  convertirVuelosDisponiblesLista,
} from "@/helpers/procesarVuelos.js";

export default {
  data() {
    return {
      origen: null,
      destino: null,
      fechaVuelo: null,
      listaVuelosDisponibles: [],
    };
  },
  methods: {
    async buscarVuelosDisponibles() {
      const response = await obtenerVuelosDisponiblesODF(
        this.origen,
        this.destino,
        this.fechaVuelo
      );
      this.listaVuelosDisponibles = await convertirVuelosDisponiblesLista(
        response
      );
      console.log(response);
    },
  },
};
</script>

<style>
div {
  align-content: center;
}
button {
  background-color: #64bb87;
  border-radius: 5px;
  color: white;
  margin: 0 5px;
  cursor: pointer;
}
button:hover {
  background-color: #5aa;
  transition: 0.3s ease-in-out;
}
td {
  border: solid;
}
th {
  border: solid;
}
</style>