<script setup>
import CopyButton from './CopyButton.vue';

const props = defineProps({
  code: {
    type: String,
  }
});

function copy(text) {
  navigator.clipboard.writeText(text);
}
</script>

<template>
  <div class="code-block">
    <div class="code-block__top-bar">
      <CopyButton @copy-code="copy(code)"/>
    </div>
    <pre class="code-block__content">
      <code>{{ code }}</code>
    </pre>
  </div>
</template>
<style>
.code-block__top-bar {
  border-radius: var(--border-round) var(--border-round) 0 0;
  display: flex;
  background-color: var(--color-text);
  justify-content: end;
  padding: var(--spacing-S) var(--spacing-M);
}
.code-block__content {
  border-radius: 0 0 var(--border-round) var(--border-round);
  background-color: var(--color-light-text);
  color: var(--color-background-primary);
  padding: var(--spacing-S) var(--spacing-XL);
}
</style>