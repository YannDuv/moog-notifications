<style lang="scss">
#app p {
  color: $primary;
}
</style>

<template>
  <div id="app">
    <h1>Moogsoft - Notifications</h1>
    <notification/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VueRx from "vue-rx";
import { NotificationComponent } from "./notification";

Vue.use(VueRx);

export default Vue.extend({
  name: "app",
  components: {
    notification: NotificationComponent
  }
});
</script>

