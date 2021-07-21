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

            <q-tab-panel name="Componentes internos">
              <div class="text-h4 q-mb-md test">Componentes internos</div>
              <ParagraphInfo :info="internalInfo" />
              <table>
                <tr>
                  <th>Componentes</th>
                  <th>Parte del cuerpo</th>
                </tr>

                <tr>
                  <td>Placa Madre</td>
                  <td>Esqueleto</td>
                </tr>

                <tr>
                  <td>Microprocesador</td>
                  <td>Sistema Nervioso</td>
                </tr>
                <tr>
                  <td>Placa de video</td>
                  <td>Sistema visual</td>
                </tr>
                <tr>
                  <td>Disco Rígido</td>
                  <td>Conocimientos/Recuerdos</td>
                </tr>
                <tr>
                  <td>Memoria RAM</td>
                  <td>Memoria</td>
                </tr>
              </table>
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
            </q-tab-panel>
            <q-tab-panel name="Archivos">
              <div class="text-h4 q-mb-md">Archivos</div>
              <ParagraphInfo :info="filesInfo" />
              <img
                src="https://divermax-latam.zendesk.com/hc/es/article_attachments/212396607/contrnido_multimedia.PNG"
                alt=""
              />
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
import ComponentsText from "../../components/seccionBasica/ComponentsText.vue";

import {
  hardwareList,
  softwareList,
  perifList,
  externalList
} from "../../assets/dataArray";
import {
  hardwareInfo,
  perifericosInfo,
  internalInfo,
  externalInfo,
  softwareInfo,
  operativeInfo,
  programsInfo,
  filesInfo
} from "../../assets/dataInfo";

export default {
  name: "Partes",
  components: { ParagraphInfo, UsosList, ComponentsText },
  data() {
    return {
      splitterModel: 20,
      selected: "Archivos",

      //Listas
      hardwareList,
      softwareList,
      perifList,
      externalList,

      //Textos
      hardwareInfo,
      perifericosInfo,
      internalInfo,
      externalInfo,
      softwareInfo,
      operativeInfo,
      programsInfo,
      filesInfo
    };
  }
};
</script>
