<style lang="scss">
li {
  color: $primary;
}
</style>

<template>
  <ol>
    <li v-for="value in notifications" v-bind:key="value.id">
      <pre>
        {{value}}
      </pre>
    </li>
  </ol>
</template>

<script lang="ts">
import Vue from "vue";
import { from } from "rxjs";
import { NotificationService } from ".";

export default {
  subscriptions: () => {
    return {
      notifications: NotificationService.list()
    };
  }
};
</script>
