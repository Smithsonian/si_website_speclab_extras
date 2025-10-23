<template>
  <div>
    <VideoJSPlayer :other-options="{ poster }">
      <source
        src="https://lweb.cfa.harvard.edu/smgdvl/datalabs/annie_jump_cannon_classifying_stars.mp4"
      />
      <track label="Captions" kind="captions" srclang="en" :src="captions" />
    </VideoJSPlayer>
    <p>
      Annie Jump Cannon (1863-1941) was a pioneering woman astronomer who classified over 40,000
      stars using their brightness and spectral types. Thom Burns is the Curator of the Harvard
      Glass Plate Collection at the Center for Astrophysics Harvard-Smithsonian. He describes how
      Cannon, one of the famous "Harvard Computers," studied the plates in the collection and how
      her work advanced the dream of Henry and Mary Ann Draper to use stellar spectra to understand
      the lifecycle of stars.
    </p>
    <p class="mb-0">Running time: 5:06</p>
  </div>
</template>

<script setup lang="ts">
import poster from '@/assets/video_metadata/annie_jump_cannon_classifying_stars_poster.jpg';
import captions from '@/assets/video_metadata/annie_jump_cannon_classifying_stars.vtt';
</script>
