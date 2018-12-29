<style lang="scss">
.container {
  background-color: $background;
  border: solid 1px $dark;
  border-radius: 3px;
}

ol {
  height: 60vh;
  padding: 2rem 0.6rem;
  overflow: scroll;
  margin: 0;
  box-shadow: inset 0px 2px 3px -2px $dark;
  position: relative;
}

.list-enter-active {
  transition: all 600ms;
}
.list-leave-active {
  transition: all 400ms;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.list-leave-active {
  position: absolute;
}
.item {
  transition-delay: 500ms;
  transition: all 400ms;
}
</style>

<template>
  <div class="container">
    <notification-header @toggle-filter="toggleFilter" :isUnreadFiltered="isUnreadFiltered"/>
    <transition-group name="list" tag="ol">
      <notification-row
        v-for="value in notifications"
        :key="value.id"
        :notification="value"
        class="item"
      />
    </transition-group>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import NotificationHeader from "./NotificationHeader.vue";
import NotificationRow from "./NotificationRow.vue";
import { from } from "rxjs";
import { NotificationService, NotificationModel } from ".";

@Component({
  components: {
    "notification-header": NotificationHeader,
    "notification-row": NotificationRow
  },
  subscriptions: () => {
    return {
      all: NotificationService.list(),
      unreads: NotificationService.unreads()
    };
  }
})
export default class NotificationComponent extends Vue {
  all: NotificationModel[] = [];
  unreads: NotificationModel[] = [];
  isUnreadFiltered = false;

  get notifications(): NotificationModel[] {
    return this.isUnreadFiltered ? this.unreads : this.all;
  }

  toggleFilter() {
    this.isUnreadFiltered = !this.isUnreadFiltered;
  }
}
</script>
