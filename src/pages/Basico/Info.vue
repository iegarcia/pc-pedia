<template>
  <q-page>
    <div class="container">
      <h3 class="titles">¿Que es una computadora?</h3>
      <br />
      <ParagraphInfo :info="p1" />
      <div class="row">
        <div class="col-md-6">
          <img
            src="https://cdn.cienradios.com/wp-content/uploads/sites/15/2016/12/charles.jpg"
            alt="Maquina Analítica"
            width="98%"
          />
        </div>
        <div class="col-md-6">
          <ParagraphInfo :info="p2" />
          <br />
          <ParagraphInfo :info="p3" />
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-md-6">
          <BasicsInfoTab
            :text="powerText"
            :icon="powerIcon"
            :label="powerlabel"
          />
        </div>
        <div class="col-md-6">
          <BasicsInfoTab :text="sadText" :icon="sadIcon" :label="sadlabel" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import ParagraphInfo from "../../components/seccionBasica/ParagraphInfo";
import BasicsInfoTab from "src/components/seccionBasica/BasicsInfoTab.vue";
import {
  p1,
  p2,
  p3,
  powerIcon,
  powerText,
  powerlabel,
  sadIcon,
  sadText,
  sadlabel
} from "../../assets/dataInfo";

export default {
  name: "Info",
  components: {
    ParagraphInfo,
    BasicsInfoTab
  },
  data() {
    return {
      p1,
      p2,
      p3,
      powerIcon,
      powerText,
      powerlabel,
      sadIcon,
      sadText,
      sadlabel
    };
  }
};
</script>
