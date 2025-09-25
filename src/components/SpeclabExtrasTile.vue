<template>
  <BCard no-body class="border-0 bg-sle-lavender rounded-4 overflow-hidden">
    <BCardImg :src="imgUrl" :alt="imgAlt" />
    <BCardBody class="pt-4 px-4 pb-5">
      <BCardTitle class="speclab-extras-card-title text-uppercase text-dl-dark-purple">{{
        title
      }}</BCardTitle>
      <slot></slot>
    </BCardBody>
  </BCard>
</template>

<script setup lang="ts">
defineProps<{ title: string; imgUrl: string; imgAlt: string }>();
</script>

<style>
.speclab-extras-card-title {
  font-size: 18px;
  font-weight: 700;
}
</style>
