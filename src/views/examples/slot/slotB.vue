<template>
  <div class="slotB">
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
  </div>
</template>

<script>
export default {
  name: 'SlotB',
  props: {
    routerInfo: {
      default: function() {
        return null
      },
      type: Object
    }
  }
}
</script>
<style lang="scss">
</style>