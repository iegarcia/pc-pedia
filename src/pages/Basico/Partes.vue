<template>
  <q-page>
    <div>
      <h3 class="text-center">Componentes</h3>
      <p class="paragraphs">
        Como toda maquina, sistema, herramienta, etc, la computadora esta
        compuesta por componentes donde están ayudan al funcionamiento de la
        misma, estos componentes se clasifican en 2 grupos: Hardware y Software
      </p>
    </div>
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
              :selected.sync="selected"
              selected-color="primary"
              default-expand-all
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
            <q-tab-panel :name="c.title" v-for="(c, i) in components" :key="i">
              <div class="text-h4 q-mb-md">{{ c.title }}</div>
              <ParagraphInfo :info="c.text" />
              <img :src="c.image" :alt="c.name" />
            </q-tab-panel>

            <q-tab-panel name="Componentes externos">
              <div class="text-h4 q-mb-md">Componentes externos</div>
              <ParagraphInfo :info="externalInfo" />

              <q-list
                bordered
                class="rounded-borders"
                style="max-width: 600px"
                v-for="(ext, idx) in externalList"
                :key="idx"
              >
                <ComponentsText v-bind="ext" />
                <q-separator spaced />
              </q-list>
            </q-tab-panel>
          </q-tab-panels>
          <q-tab-panels
            v-model="selected"
            animated
            transition-prev="jump-up"
            transition-next="jump-up"
          >
            <q-tab-panel name="Software">
              <div class="text-h4 q-mb-md">Software</div>
              <ParagraphInfo :info="softwareInfo" />
              <img
                src="https://www.ardilu.com/wp-content/uploads/2020/10/Windows-10-20h2.jpg"
                alt="software"
                width="50%"
              />
            </q-tab-panel>
            <q-tab-panel name="Sistema Operativo">
              <div class="text-h4 q-mb-md">Sistema Operativo</div>
              <ParagraphInfo :info="operativeInfo" />
              <p>
                Existen varios pero los mas conocidos son
                <strong>Windows y Linux</strong> en lo que corresponde a PC y
                con respecto a sistemas de celulares estan
                <strong>Android o IOS</strong>
              </p>
              <img
                src="https://sites.google.com/site/informatica8egb/_/rsrc/1424882222807/primer-quimestre/segundo-parcial/4-el-sistema-operativo/SO%20Icons.png"
                alt="sistema_operativo"
                width="50%"
              />
            </q-tab-panel>
            <q-tab-panel name="Programas">
              <div class="text-h4 q-mb-md">Programas</div>
              <ParagraphInfo :info="programsInfo" />
              <img
                src="https://blogdeuninformatico.com/wp-content/uploads/2018/04/programas.png"
                alt="programas"
                width="100%"
              />
            </q-tab-panel>
            <q-tab-panel name="Archivos">
              <div class="text-h4 q-mb-md">Archivos</div>
              <ParagraphInfo :info="filesInfo" />
              <img src="~assets/files.png" alt="archivos" width="70%" />
            </q-tab-panel>
          </q-tab-panels>
        </template>
      </q-splitter>
    </div>
  </q-page>
</template>

<script>
import ParagraphInfo from "../../components/ParagraphInfo.vue";

import ComponentsText from "../../components/ComponentsText.vue";

import {
  hardwareList,
  softwareList,
  externalList,
} from "../../assets/dataArray";
import { components } from "../../assets/dataInfo";

export default {
  name: "Partes",
  components: { ParagraphInfo },
  data() {
    return {
      splitterModel: 20,
      selected: "Hardware",

      //Listas
      hardwareList,
      softwareList,
      externalList,

      //Textos
      components,
    };
  },
};
</script>
