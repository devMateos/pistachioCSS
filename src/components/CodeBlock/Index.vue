<script setup>
import CopyButton from './CopyButton.vue';

const props = defineProps({
  code: {
    type: String,
  },
  codeBlockName: {
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
      <p>{{ codeBlockName }}</p>
      <CopyButton @copy-code="copy(code)"/>
    </div>
    <pre class="code-block__content">
      <code>{{ code }}</code>
    </pre>
  </div>
</template>
<style>
.code-block {
  margin: var(--spacing-M) 0;
}
.code-block__top-bar {
  border-radius: var(--border-radius-standard) var(--border-radius-standard) 0 0;
  display: flex;
  background-color: var(--color-text);
  justify-content: space-between;
  padding: var(--spacing-S) var(--spacing-M);
}
.code-block__top-bar > p {
  color: var(--color-background-primary);
  text-transform: uppercase;
}
.code-block__content {
  border-radius: 0 0 var(--border-radius-standard) var(--border-radius-standard);
  background-color: var(--color-light-text);
  color: var(--color-background-primary);
  padding: var(--spacing-S) var(--spacing-XL);
}
</style>