<template>
  <q-page>
    <div class="container">
      <Title text="¿Que es una computadora?" />
      <br />
      <p class="paragraphs">
        La computadora u ordenador como se le conoce en España es una máquina
        electrónica que recibe y procesa datos para convertirlos en información
        conveniente y útil, que te permite realizar diversas tareas que van
        desde realizar operaciones lógicas o aritméticas de forma automática,
        notas o ayuda memoria hasta Creación de juegos. En 1833 el matemático e
        inventor británico Charles Babbage diseña e intenta construir la primera
        computadora, de funcionamiento mecánico, a la que llamó la 'máquina
        analítica'. sin embargo, la tecnología de su época no estaba lo
        suficientemente avanzada para hacer realidad su idea.
      </p>
      <div class="row">
        <div class="col-md-6">
          <div v-for="data in paragraphs" :key="data.id">
            <ParagraphInfo :info="data[`p${data.id}`]" />
          </div>
        </div>
        <div class="col-md-6">
          <img
            src="https://cdn.cienradios.com/wp-content/uploads/sites/15/2016/12/charles.jpg"
            alt="Maquina Analítica"
            width="98%"
          />
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-md-6" v-for="q in questions" :key="q.id">
          <BasicsInfoTab :text="q.text" :icon="q.icon" :label="q.label" />
        </div>
        <!-- <div class="col-md-6">
          <BasicsInfoTab :text="sadText" :icon="sadIcon" :label="sadLabel" />
        </div> -->
      </div>
    </div>
  </q-page>
</template>

<script>
import ParagraphInfo from "../../components/ParagraphInfo.vue";
import Title from "../../components/Title.vue";
import BasicsInfoTab from "src/components/InfoTab.vue";
import { paragraphs, sirve, questions } from "../../assets/dataInfo";

export default {
  name: "Info",
  components: {
    Title,
    ParagraphInfo,
    BasicsInfoTab,
  },
  data() {
    return {
      paragraphs,
      sirve,
      questions,
    };
  },
};
</script>
