<template>
  <div>
    <VideoJSPlayer :other-options="{ poster }">
      <source
        src="https://lweb.cfa.harvard.edu/smgdvl/datalabs/video_extra_matt_identifying_jades-20250910.mp4"
      />
      <track label="Captions" kind="captions" srclang="en" :src="captions" />
    </VideoJSPlayer>
    <p>
      The Smithsonian’s National Museum of Asian Art has a renowned collection, including thousands
      of Chinese jades. However, the term "jade" is applied to many different minerals. To assist
      with their conservation and preservation, it's important to know the mineral composition of
      each object. Dr. Matthew Clarke demonstrates the non-invasive technique of shortwave infrared
      reflectance spectroscopy as he quickly differentiates the mineral composition of a set of
      samples.
    </p>
    <p class="mb-0">Running time: 3:43</p>
  </div>
</template>

<script setup lang="ts">
import poster from '@/assets/video_metadata/video_extra_matt_identifying_jades_poster.jpg';
import captions from '@/assets/video_metadata/video_extra_matt_identifying_jades.vtt';
</script>
