<template>
  <q-page>
    <br />
    <h3 class="titles">Componentes</h3>
    <br />
    <div>
      <q-splitter v-model="splitterModel" class="listaComponentes">
        <template v-slot:before>
          <div class="q-pa-md">
            <q-tree
              :nodes="hardwareList"
              node-key="label"
              selected-color="primary"
              :selected.sync="selected"
              default-expand-all
            />
            <q-tree
              :nodes="softwareList"
              node-key="label"
              selected-color="primary"
            />
          </div>
        </template>

        <template v-slot:after>
          <q-tab-panels
            v-model="selected"
            animated
            transition-prev="jump-up"
            transition-next="jump-up"
          >
            <q-tab-panel name="Hardware">
              <div class="text-h4 q-mb-md">Hardware</div>
              <ParagraphInfo :info="hardwareInfo" />
              <img
                src="https://miblodotblog.files.wordpress.com/2017/11/96c64-1325170579_295287224_1-servicio-tecnico-de-hardware-y-software-para-pc-j-c-independencia.jpg"
                alt="hardware"
              />
            </q-tab-panel>

            <q-tab-panel name="Perifericos">
              <div class="text-h4 q-mb-md">Periféricos</div>
              <ParagraphInfo :info="perifericosInfo" />
              <div
                class="q-pa-md listaUsos col-md-3"
                v-for="(perif, idx) in perifList"
                :key="idx"
              >
                <UsosList v-bind="perif" class="bg-grey-10 text-white" />
              </div>
            </q-tab-panel>

            <q-tab-panel name="Room service">
              <div class="text-h4 q-mb-md">Room service</div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                praesentium cumque magnam odio iure quidem, quod illum numquam
                possimus obcaecati commodi minima assumenda consectetur culpa
                fuga nulla ullam. In, libero.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                praesentium cumque magnam odio iure quidem, quod illum numquam
                possimus obcaecati commodi minima assumenda consectetur culpa
                fuga nulla ullam. In, libero.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                praesentium cumque magnam odio iure quidem, quod illum numquam
                possimus obcaecati commodi minima assumenda consectetur culpa
                fuga nulla ullam. In, libero.
              </p>
            </q-tab-panel>

            <q-tab-panel name="Room view">
              <div class="text-h4 q-mb-md">Room view</div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                praesentium cumque magnam odio iure quidem, quod illum numquam
                possimus obcaecati commodi minima assumenda consectetur culpa
                fuga nulla ullam. In, libero.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                praesentium cumque magnam odio iure quidem, quod illum numquam
                possimus obcaecati commodi minima assumenda consectetur culpa
                fuga nulla ullam. In, libero.
              </p>
            </q-tab-panel>
          </q-tab-panels>
        </template>
      </q-splitter>
    </div>
  </q-page>
</template>

<script>
import ParagraphInfo from "src/components/seccionBasica/ParagraphInfo.vue";
import UsosList from "../../components/seccionBasica/UsosList";

import { hardwareList, softwareList, perifList } from "../../assets/dataArray";
import { hardwareInfo, perifericosInfo } from "../../assets/dataInfo";
export default {
  name: "Partes",
  components: { ParagraphInfo, UsosList },
  data() {
    return {
      splitterModel: 20,
      selected: "Perifericos",
      hardwareList,
      softwareList,

      hardwareInfo,
      perifericosInfo,
      perifList
    };
  }
};
</script>
