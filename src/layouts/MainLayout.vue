<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar style="background-color: green">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <a href="/" style="color: White">
          <q-toolbar-title> PC-Pedia </q-toolbar-title>
        </a>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8"> Enlaces </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksData = [
  {
    title: "Web Page",
    caption: "ijegdesign.com",
    icon: "public",
    link: "https://ijegdesign.com"
  },
  {
    title: "Github",
    caption: "github.com/iegarcia",
    icon: "code",
    link: "https://github.com/iegarcia"
  }
  // {
  //   title: "Apuntes Personales",
  //   caption: "Seccion para anotar cosas",
  //   icon: "note",
  //   link: "#/notas"
  // }
];

export default {
  name: "MainLayout",
  components: { EssentialLink },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    };
  }
};
</script>
