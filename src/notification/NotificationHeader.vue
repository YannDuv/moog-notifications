<style lang="scss">
.header {
  display: flex;
  flex: 1;
  justify-content: space-between;
  border-bottom: solid 1px $dark;
  padding: 1rem 2rem;
  align-items: center;

  button {
    color: white;
    width: 120px;
    height: 30px;

    &.selected {
      background-color: $accent;
    }
    &.normal {
      background-color: $primary;
    }
  }
}
</style>

<template>
  <div class="header">
    <button
      id="filterUnread"
      type="button"
      @click="$emit('toggle-filter')"
      :class="[isUnreadFiltered ? 'selected' : 'normal']"
    >{{isUnreadFiltered ? 'All' : 'Unreads' }}</button>
    <span>
      <b>{{unread.length}}</b>
      unreads / {{notifications.length}}
    </span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { NotificationService } from ".";
import { Notification } from "rx";

export default {
  props: ["isUnreadFiltered"],
  subscriptions: () => {
    return {
      notifications: NotificationService.list(),
      unread: NotificationService.unreads()
    };
  }
};
</script>