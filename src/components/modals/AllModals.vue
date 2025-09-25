<template>
  <BModal
    title="Keats Webb: Conservation Science Imaging"
    id="keats-modal"
    v-model="showKeats"
    size="xl"
    lazy
    unmount-lazy
    no-footer
    header-class="pb-0"
  >
    <KeatsModalBody />
  </BModal>
  <BModal
    title="Matthew Clarke: Identifying Pigments"
    id="pigments-modal"
    v-model="showPigments"
    size="xl"
    lazy
    unmount-lazy
    no-footer
    header-class="pb-0"
  >
    <PigmentsModalBody />
  </BModal>
  <BModal
    title="Matthew Clarke: Identifying Jades"
    id="jades-modal"
    v-model="showJades"
    size="xl"
    lazy
    unmount-lazy
    no-footer
    header-class="pb-0"
  >
    <JadesModalBody />
  </BModal>
  <BModal
    title="Mercedes López-Morales: Search for Earth-like Exoplanets"
    id="lopez-morales-modal"
    v-model="showLopezMorales"
    size="xl"
    lazy
    unmount-lazy
    no-footer
    header-class="pb-0"
  >
    <LopezMoralesModalBody />
  </BModal>
</template>

<script setup lang="ts">
import { useModalsStore } from '@/store/modals';
import { storeToRefs } from 'pinia';

const modalsStore = useModalsStore();
const { showKeats, showPigments, showJades, showLopezMorales } = storeToRefs(modalsStore);
</script>
