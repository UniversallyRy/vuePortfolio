// v2.0
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import Layout from "~/layouts/Default.vue";

export default function(Vue, { appOptions, head }) {
  head.htmlAttrs = { lang: "en" };
  head.link.push({
    rel: "stylesheet",
    href:
      "https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css"
  });

  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900"
  });

  const opts = {}; //opts includes, vuetify themes, icons, etc.
  Vue.use(Vuetify);

  appOptions.vuetify = new Vuetify(opts);

  // Set default layout as a global component
  Vue.component("Layout", Layout);
}
