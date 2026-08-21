<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const cursorX = ref(0)
const cursorY = ref(0)

const isHovering = ref(false)

const handleMouseMove = (event: MouseEvent) => {
  cursorX.value = event.clientX
  cursorY.value = event.clientY
}

const handleMouseOver = (event: MouseEvent) => {
  const target = event.target as HTMLElement

  if (
    target.closest(
      'a, button, .project-card, .skill-card, .about-card',
    )
  ) {
    isHovering.value = true
  } else {
    isHovering.value = false
  }
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseover', handleMouseOver)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseover', handleMouseOver)
})
</script>

<template>
  <div
    class="custom-cursor"
    :class="{ hovering: isHovering }"
    :style="{
      left: `${cursorX}px`,
      top: `${cursorY}px`,
    }"
  ></div>
</template>

<style lang="scss">
.custom-cursor {
  position: fixed;

  z-index: 9999;

  width: 18px;
  height: 18px;

  border: 1px solid #14b8a6;

  border-radius: 50%;

  pointer-events: none;

  transform: translate(-50%, -50%);

  transition:
    width 0.2s ease,
    height 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease;

  mix-blend-mode: difference;
}

.custom-cursor.hovering {
  width: 38px;
  height: 38px;

  background: rgba(20, 184, 166, 0.15);

  box-shadow:
    0 0 25px rgba(20, 184, 166, 0.3);
}

@media (hover: none) {
  .custom-cursor {
    display: none;
  }
}
</style>