(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"8b85":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-btn",{attrs:{label:"Atras",icon:"chevron_left",to:"/categorias",color:"primary"}})},o=[],s={name:"BtnAtras"},l=s,i=a("2877"),r=a("9c40"),c=a("eebe"),u=a.n(c),d=Object(i["a"])(l,n,o,!1,null,null,null);t["a"]=d.exports;u()(d,"components",{QBtn:r["a"]})},d143:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",[a("div",{staticClass:"q-pa-md"},[a("div",{staticClass:"q-gutter-y-md"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("BtnAtras")],1),a("div",{staticClass:"col-md-6"},[a("h3",{staticClass:"titles"},[e._v("Pantalla")])])]),a("hr"),a("div",[a("q-splitter",{staticClass:"splModel",scopedSlots:e._u([{key:"before",fn:function(){return[a("q-tabs",{staticClass:"text-teal",attrs:{vertical:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},e._l(e.sTabs,(function(t,n){return a("div",{key:n},[a("ScreenTabs",e._b({},"ScreenTabs",t,!1))],1)})),0)]},proxy:!0},{key:"after",fn:function(){return[a("q-tab-panels",{attrs:{animated:"",swipeable:"",vertical:"","transition-prev":"jump-up","transition-next":"jump-up"},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},e._l(e.sPanel,(function(t){return a("q-tab-panel",{key:t.name,attrs:{name:t.name}},[a("ScreenPanel",e._b({},"ScreenPanel",t,!1))],1)})),1)]},proxy:!0}]),model:{value:e.splitterModel,callback:function(t){e.splitterModel=t},expression:"splitterModel"}})],1)])])])},o=[],s=a("8b85"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-tab",{attrs:{name:e.name,label:e.label}})},i=[],r={name:"ScreenTabs",props:{name:String,label:String}},c=r,u=a("2877"),d=a("7460"),m=a("eebe"),p=a.n(m),b=Object(u["a"])(c,l,i,!1,null,null,null),f=b.exports;p()(b,"components",{QTab:d["a"]});var x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"text-h4 q-mb-md"},[e._v(e._s(e.title))]),a("p",[e._v("\n    "+e._s(e.text)+"\n    ")]),a("p",[e._v("\n    "+e._s(e.text)+"\n    ")])])},v=[],_={name:"ScreenPanel",props:{panel:String,title:String,text:String}},C=_,P=Object(u["a"])(C,x,v,!1,null,null,null),h=P.exports,k=a("e187"),q={name:"Pantalla",components:{BtnAtras:s["a"],ScreenTabs:f,ScreenPanel:h},data(){return{tab:"brillo",splitterModel:20,sTabs:k["sTabs"],sPanel:k["sPanel"]}}},S=q,y=a("9989"),T=a("8562"),g=a("429b"),w=a("adad"),E=a("823b"),M=Object(u["a"])(S,n,o,!1,null,null,null);t["default"]=M.exports;p()(M,"components",{QPage:y["a"],QSplitter:T["a"],QTabs:g["a"],QTabPanels:w["a"],QTabPanel:E["a"]})},e187:function(e,t,a){"use strict";a.d(t,"e",(function(){return n})),a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return o})),a.d(t,"f",(function(){return l})),a.d(t,"d",(function(){return i})),a.d(t,"g",(function(){return r})),a.d(t,"j",(function(){return c})),a.d(t,"c",(function(){return u}));let n=[{link:"info",label:"Que es"},{link:"utilidad",label:"Para que sirve"},{link:"partes",label:"Componentes"},{link:"perif",label:"Periféricos"},{link:"cantidad",label:"¿Cuantas Hay?"}],o=["Pantalla","Sistema","Navegador","Carteles Extraños","Extensiones"],s=[{title:"Conocimientos básicos",text:"Como en toda investigación se comienza por los conocimientos básicos como: que es una computadora, para que sirve, de que se compone, cuantas hay, periféricos, utilidades, etc",link:"#/info"}],l=[{icon:"photo",text:"Album de fotos"},{icon:"calculate",text:"Calculadora"},{icon:"menu_book",text:"Enciclopedia"},{icon:"map",text:"Mapa"},{icon:"mail",text:"Correo"},{icon:"sports_esports",text:"Entretenimiento"},{icon:"show_chart",text:"Finanzas"},{icon:"wb_sunny",text:"Clima"},{icon:"chat",text:"Medio de comunicación"},{icon:"school",text:"Docente"},{icon:"local_florist",text:"Baúl de recuerdos"},{icon:"article",text:"Documentación"}],i=[{label:"Hardware",children:[{label:"Perifericos"},{label:"Componentes internos"},{label:"Componentes externos"}]}],r=[{text:"Entrada"},{text:"Salida"},{text:"Entrada/salida"},{text:"Almacenamiento"}],c=[{label:"Software",children:[{label:"Sistema Operativos"},{label:"Programas"},{label:"Archivos"}]}],u=[{icon:"keyboard",itemLabel:"Teclado",spanText:"El teclado representa la evolución de la antigua maquina de escribir, ya que la misma permite la escritura dentro de la PC"},{icon:"desktop_windows",itemLabel:"Pantalla",spanText:"Nos permite visualizar lo que la PC contiene dentro de su sistema para mostrarnos y asi interactuar mas fácilmente"},{icon:"mouse",itemLabel:"Mouse",spanText:"Conocido como mouse, ratón o pad este podría interpretarse como nuestra mano dentro de la pc, ya que con este nos movemos dentro de la misma y es la mas importante"},{icon:"speaker",itemLabel:"Parlantes",spanText:"Por medio de estos la computadora se comunica con nosotros con música, videos, sonidos. Estos son importantes ya que si no están o no funcionan no podremos escucharla."}]}}]);