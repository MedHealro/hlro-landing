<template>
  <div v-if="visible" class="modal-backdrop" @click="closeModal">
    <div class="modal" @click.stop>
      <slot></slot>
      <button v-if="showCloseButton" class="button" @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Modal',
  props: {
    visible: {
      type: Boolean,
      required: true
    },
    showCloseButton: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:visible'],
  methods: {
    closeModal() {
      this.$emit('update:visible', false)
    },
    handleKeydown(event) {
      if (event.key === 'Escape') {
        this.closeModal()
      }
    }
  },
  mounted() {
    document.addEventListener('keydown', this.handleKeydown)
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleKeydown)
  }
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal {
  z-index: 1001;
}
</style>
