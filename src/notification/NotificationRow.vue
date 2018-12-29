<style lang="scss">
li {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex: 1;
  padding: 1rem 2rem;
  border-bottom: solid 1px #979797;

  &.is-read {
    background-color: #00000012;
  }

  &:last-of-type {
    border-bottom: none;
  }

  .content {
    flex: 1;
    margin-left: 1rem;

    p {
      margin-top: 0;
    }

    em.name {
      text-transform: capitalize;
    }
  }
}
</style>

<template>
  <li :class="{'is-read': !notification.isRead}">
    <div class="date">
      <b>{{notification.localeDate}}</b>
    </div>
    <div class="content">
      <p v-html="notification.message"></p>
      <span>
        from
        <em class="name">{{notification.user.name}}</em> by
        <em>{{notification.vector}}</em>
      </span>
    </div>
  </li>
</template>

<script lang="ts">
import Vue from "vue";

export default {
  props: ["notification"]
};
</script>