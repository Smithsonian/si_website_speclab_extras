<template>
  <div>
    <VideoJSPlayer :other-options="{ poster }">
      <source
        src="https://lweb.cfa.harvard.edu/smgdvl/datalabs/video_extra_keats_conservation_science_imaging-20250910.mp4"
      />
      <track label="Captions" kind="captions" srclang="en" :src="captions" />
    </VideoJSPlayer>
    <p>
      Smithsonian Imaging Scientist, Dr. Keats Webb, demonstrates some of the different imaging
      techniques that she uses at the Smithsonian Museum Conservation Institute, and describes how
      imaging is a necessary first step for understanding the history of - and the conservation of -
      Smithsonian objects.
    </p>
  </div>
</template>

<script setup lang="ts">
import poster from '@/assets/video_metadata/video_extra_keats_conservation_science_imaging_poster.jpg';
import captions from '@/assets/video_metadata/video_extra_keats_conservation_science_imaging.vtt';
</script>
