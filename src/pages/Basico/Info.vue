<template>
  <q-page>
    <div class="container">
      <h3 class="titles">¿Que es una computadora?</h3>
      <br />
      <ParagraphInfo :info="info" />
      <div class="row">
        <div class="col-md-6">
          <img
            src="https://cdn.cienradios.com/wp-content/uploads/sites/15/2016/12/charles.jpg"
            alt="Maquina Analítica"
            width="98%"
          />
        </div>
        <div class="col-md-6">
          <ParagraphInfo :info="info2" />
          <br />
          <ParagraphInfo :info="info3" />
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-md-6">
          <BasicsInfoTab :text="text" :icon="icon" :label="label" />
        </div>
        <div class="col-md-6">
          <BasicsInfoTab :text="text2" :icon="icon2" :label="label2" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import ParagraphInfo from "../../components/seccionBasica/ParagraphInfo";
import BasicsInfoTab from "src/components/seccionBasica/BasicsInfoTab.vue";

export default {
  name: "Info",
  components: {
    ParagraphInfo,
    BasicsInfoTab
  },
  data() {
    return {
      info:
        "La computadora u ordenador como se le conoce en España es una máquina electrónica que recibe y procesa datos para convertirlos en información conveniente y útil, que te permite realizar diversas tareas que van desde realizar operaciones lógicas o aritméticas de forma automática, notas o ayuda memoria hasta Creación de juegos. En 1833 el matemático e inventor británico Charles Babbage diseña e intenta construir la primera computadora, de funcionamiento mecánico, a la que llamó la 'máquina analítica'. sin embargo, la tecnología de su época no estaba lo suficientemente avanzada para hacer realidad su idea.",
      info2:
        "Hoy en día un celular es una computadora, como lo es un lavarropas, heladera incluso hasta una casa. Todo lo que realice una acción de forma autónoma. La misma hecha a base a de una serie de componentes que la hacen funcionar sea la maquina de 1833 o una actual como toda maquina tiene sus elementos, dependiendo del tipo algunos elementos varian en su tamaño o simplemente están diseñados para ser mas compactos mientras que en el interior se comportan de la misma manera.",
      info3:
        "A todo esto una de las preguntas mas frecuentes al momento de estar de cara con una maquina y no tener conocimiento alguno suele ser la misma de siempre para algunas personas...",
      text:
        "Dependiendo del tipo de computadora (portátil, escritorio) que tengas el botón desde donde se va a encender puede estar ubicado en distintos puntos. Si es de escritorio se encuentra ubicado en la parte superior del CPU, si es una portátil es mas común que este por encima del teclado.",
      icon: "power_settings_new",
      label: "¿De donde se prende?",
      text2:
        "Hay muchas respuestas a eso dependiendo del equipo que tengas. Si es un equipo portátil lo primero que se hace cuando esto ocurre es revisar la batería. ¿Como revisar la batería? Solo conéctela a la corriente utilizando su cargador y vuelva a probar encenderla, si haciendo eso no arranco seguro se trate de una falla técnica. En el caso de ser un equipo de escritorio el problema puede residir en cualquiera de sus componentes por lo que le recomendamos que se comunique con soporte técnico o alguien que sepa",
      icon2: "sentiment_very_dissatisfied",
      label2: "¿Porque no enciende?"
    };
  }
};
</script>
