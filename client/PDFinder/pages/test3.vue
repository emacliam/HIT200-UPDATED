<template>
<div id="app">
  <demo-resizable-modal/>
  <v-dialog
    @before-opened="dialogEvent('before-open')"
    @before-closed="dialogEvent('before-close')"
    @opened="dialogEvent('opened')"
    @closed="dialogEvent('closed')"/>
  <div style="margin-top: 20px; margin-bottom: 15px;">
    <button
      class="btn"
      @click="$modal.show('example-resizable')">
      Resizable
    </button>
  </div>
</div>
</template>

<script>

import DemoResizableModal   from "~/components/Modal_Resizable.vue";


export default {
  name: 'app',
  components: {
    DemoResizableModal,
  },
  data () {
    return {
      canBeShown: false
    }
  },
  created () {
    setInterval(() => {
      this.canBeShown = !this.canBeShown
    }, 5000)
  },
  methods: {
    dialogEvent (eventName) {
      console.log('Dialog event: ' + eventName)
    }
  }
}
</script>


