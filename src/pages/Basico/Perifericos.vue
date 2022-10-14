<template>
  <q-page>
    <h3 class="text-center">Perifericos</h3>
    <br />
    <ParagraphInfo :info="periferInfo" />
    <div class="row test">
      <div class="col-md-4">
        <BasicsInfoTab :label="label1" :text="txtEntrada" />
        <br />
        <BasicsInfoTab :label="label2" :text="txtSalida" />
      </div>
      <div class="col-md-4">
        <BasicsInfoTab :label="label3" :text="txtES" />
        <br />

        <BasicsInfoTab :label="label4" :text="txtAlmacenamiento" />
      </div>
    </div>
  </q-page>
</template>

<script>
import ParagraphInfo from "../../components/ParagraphInfo.vue";
import BasicsInfoTab from "src/components/InfoTab.vue";
import { periferInfo } from "../../assets/dataInfo";
export default {
  name: "Perifericos",
  components: { ParagraphInfo, BasicsInfoTab },
  data() {
    return {
      periferInfo,
      label1: "Entrada",
      label2: "Salida",
      label3: "Entrada / Salida",
      label4: "Almacenamiento",

      txtEntrada:
        "Se le conoce como periferico de entrada a los que ingresan datos al ordenador para ser procesados. Un ejemplo de estos pueden ser el teclado y/o el mouse.",
      txtSalida:
        "Los perifericos de salida suelen mas mostrar que sacar informacion proveniente de la computadora. Un ejemplo practico de este seria el monitor que nos muestra la lo que hacemos.",
      txtES:
        "Asi como hay blanco y negro porque no puede haber gris, este gris son los perfifericos de entrada y salida que realizan tanto la tarea de mostrar o sacar informacion como de ingresar datos.",
      txtAlmacenamiento:
        "Estos le permiten al usuario capturar de esa informacion procesada por el ordenador y hasta sacarla del mismo para moverla hacia otro.",
    };
  },
};
</script>
