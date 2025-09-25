<template>
  <BNavbar v-b-color-mode="'dark'" variant="dark" container="xl">
    <BNavbarBrand href="https://datalabs.cfa.harvard.edu/">
      <img src="/src/assets/DataLabsLogo@2x.webp" height="45" width="195" />
    </BNavbarBrand>
    <BNavbarNav>
      <BNavText>
        <span class="vr bg-light text-light ms-5 me-3 h-100 align-top"></span>
        <img
          class="d-inline-block align-top"
          src="/src/assets/speclab_extras_logo.svg"
          height="36"
          width="415"
        />
      </BNavText>
    </BNavbarNav>
    <BNavbarNav class="ms-auto">
      <BNavItem :href="SPECLAB_URL" variant="light" opacity-hover="75" class="text-uppercase">
        Spectrum Lab
      </BNavItem>
    </BNavbarNav>
  </BNavbar>
</template>

<script setup lang="ts">
import { SPECLAB_URL } from '@/constants';
</script>
