<style lang="scss">
  .container {
    background-color: $background;
    border: solid 1px $dark;
    border-radius: 3px;
    height: 75vh;
    overflow: scroll;
  }

  ol {
    padding: 2rem .6rem;
  }
</style>

<template>
  <div class="container">
    <ol>
      <notification-row v-for="value in notifications" :key="value.id" :notification="value"/>
    </ol>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NofificationRow from "./NotificationRow.vue";
import { from } from "rxjs";
import { NotificationService } from ".";

export default {
  components: {
    "notification-row": NofificationRow
  },
  subscriptions: () => {
    return {
      notifications: NotificationService.list()
    };
  }
};
</script>
