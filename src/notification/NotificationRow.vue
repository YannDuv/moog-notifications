<style lang="scss">
li {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex: 1;
  padding: 0 2rem;
  margin: 1rem 0;
  border-bottom: solid 1px #979797;

  &:last-of-type {
    border-bottom: none;
  }

  .content {
    flex: 1;
    margin-left: 1rem;

    p {
      margin-top: 0;

      .name {
        text-transform: capitalize;
      }
    }
  }
}
</style>

<template>
  <li>
    <div class="date">
      <b>{{notification.date.toLocaleString()}}</b>
    </div>
    <div class="content">
      <p v-html="notification.message"></p>
      <p>from <em class="name">{{notification.user.name}}</em> by <em>{{notification.vector}}</em>
      </p>
    </div>
  </li>
</template>

<script lang="ts">
import Vue from "vue";

export default {
  props: ["notification"]
};
</script>