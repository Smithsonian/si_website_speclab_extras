<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { configure } from 'vue-gtag';

useHead({ title: 'Extra resources | Spectrum Lab' });

configure({ tagId: 'G-CQCJ1860S7' });
</script>

<template>
  <BApp>
    <header>
      <SpeclabExtrasNavBar />
    </header>
    <main>
      <SpeclabExtrasIntro />
      <SpeclabExtrasTileList />
    </main>
    <footer>
      <SpeclabExtrasFooter />
    </footer>

    <AllModals />
  </BApp>
</template>

<style scoped></style>
