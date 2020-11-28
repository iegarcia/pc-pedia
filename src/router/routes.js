const routes = [
  {
    path: "/",
    name: "raiz",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "indice",
        component: () => import("pages/Index")
      },
      {
        path: "categorias",
        name: "categorias",
        component: () => import("pages/Categorias")
      },
      {
        path: "/basicos",
        name: "basicos",
        component: () => import("pages/Categorias/Basicos"),
        children: [
          {
            path: "/info",
            name: "info",
            component: () => import("pages/Basico/Info")
          },
          {
            path: "/utilidad",
            name: "utilidad",
            component: () => import("pages/Basico/Utilidad")
          },
          {
            path: "/partes",
            name: "partes",
            component: () => import("pages/Basico/Partes")
          },
          {
            path: "/perif",
            name: "perifericos",
            component: () => import("pages/Basico/Perifericos")
          },
          {
            path: "/cantidad",
            name: "cantidad",
            component: () => import("pages/Basico/Cantidad")
          }
        ]
      },
      {
        path: "pantalla",
        name: "pantalla",
        component: () => import("pages/Categorias/Pantalla")
      },
      {
        path: "navegador",
        name: "navegador",
        component: () => import("pages/Categorias/Navegador")
      },
      {
        path: "sistema",
        name: "sistema",
        component: () => import("pages/Categorias/Sistema")
      },
      {
        path: "carteles",
        name: "carteles",
        component: () => import("pages/Categorias/Carteles")
      },
      {
        path: "extensiones",
        name: "extensiones",
        component: () => import("pages/Categorias/Extensiones")
      }
    ]
  },

  {
    path: "/notas",
    name: "notes",
    component: () => import("pages/Notas.vue")
  },
  //   ,
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
