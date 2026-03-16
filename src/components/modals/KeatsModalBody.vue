<template>
  <div>
    <AblePlayer :other-options="{ poster }">
      <source
        type="video/mp4"
        src="https://lweb.cfa.harvard.edu/smgdvl/datalabs/video_extra_keats_conservation_science_imaging-20260316.mp4"
      />
      <track label="Captions" kind="captions" srclang="en" :src="captions" />
      <track label="Audio Description" kind="descriptions" srclang="en" :src="description" />
    </AblePlayer>
    <p>
      Smithsonian Imaging Scientist, Dr. Keats Webb, demonstrates some of the different imaging
      techniques that she uses at the Smithsonian Museum Conservation Institute, and describes how
      imaging is a necessary first step for understanding the history of - and the conservation of -
      Smithsonian objects.
    </p>
    <p class="mb-0">Running time: 6:52</p>
  </div>
</template>

<script setup lang="ts">
import poster from '@/assets/video_metadata/video_extra_keats_conservation_science_imaging_poster.jpg';
import captions from '@/assets/video_metadata/video_extra_keats_conservation_science_imaging.vtt';
import description from '@/assets/video_metadata/video_extra_keats_conservation_science_imaging_audio_description.vtt';
</script>
