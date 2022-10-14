<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar style="background-color: green">
        <q-btn
          flat
          dense
          round
          icon="fas fa-bars"
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
        <q-item-label header class="text-grey-8 text-h6">
          Enlaces
        </q-item-label>
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
    caption: "ignaciodev.vercel.app",
    icon: "fas fa-globe",
    link: "https://ignaciodev.vercel.app/",
  },
  {
    title: "Github",
    caption: "github.com/iegarcia",
    icon: "fab fa-github",
    link: "https://github.com/iegarcia",
  },
  {
    title: "Linkedin",
    caption: "in/ignacio-encina-garcia",
    icon: "fab fa-linkedin",
    link: "https://www.linkedin.com/in/ignacio-encina-garcia/",
  },
];

export default {
  name: "MainLayout",
  components: { EssentialLink },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
    };
  },
};
</script>
