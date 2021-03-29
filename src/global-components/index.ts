import { App } from "vue";
import Header from "./header/Main.vue";
import Footer from "./footer/Main.vue";

export default (app: App): void => {
  app.component("Header", Header);
  app.component("Footer", Footer);
};
