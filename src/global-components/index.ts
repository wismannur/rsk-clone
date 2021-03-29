import { App } from "vue";
import Header from "./header/Main.vue";

export default (app: App): void => {
  app.component("Header", Header);
};
