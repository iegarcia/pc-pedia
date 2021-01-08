<template>
  <q-page>
    <div class="q-pa-md">
      <div class="q-gutter-y-md">
        <div class="row">
          <div class="col-md-3">
            <BtnAtras />
          </div>
          <div class="col-md-6">
            <h3 class="titles">Pantalla</h3>
          </div>
        </div>
        <hr />
        <div>
          <q-splitter v-model="splitterModel" class="splModel">
            <template v-slot:before>
              <q-tabs v-model="tab" vertical class="text-teal">
                <div v-for="(stab, idx) in sTabs" :key="idx">
                  <ScreenTabs v-bind="stab" />
                </div>
              </q-tabs>
            </template>

            <template v-slot:after>
              <q-tab-panels
                v-model="tab"
                animated
                swipeable
                vertical
                transition-prev="jump-up"
                transition-next="jump-up"
              >
                <q-tab-panel
                  v-for="pnl in sPanel"
                  :key="pnl.name"
                  :name="pnl.name"
                >
                  <ScreenPanel v-bind="pnl" />
                </q-tab-panel>
              </q-tab-panels>
            </template>
          </q-splitter>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import BtnAtras from "../../components/BtnAtras";
import ScreenTabs from "../../components/seccionPantalla/ScreenTabs";
import ScreenPanel from "../../components/seccionPantalla/ScreenPanel";
import { sTabs, sPanel } from "../../assets/dataArray";

export default {
  name: "Pantalla",
  components: {
    BtnAtras,
    ScreenTabs,
    ScreenPanel
  },
  data() {
    return {
      tab: "brillo",
      splitterModel: 20,
      sTabs,
      sPanel
    };
  }
};
</script>
