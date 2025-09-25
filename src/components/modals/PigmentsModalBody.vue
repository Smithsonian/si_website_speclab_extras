<template>
  <div>
    <VideoJSPlayer :other-options="{ poster }">
      <source
        src="https://lweb.cfa.harvard.edu/smgdvl/datalabs/video_extra_matt_identifying_pigments-20250910.mp4"
      />
      <track label="Captions" kind="captions" srclang="en" :src="captions" />
    </VideoJSPlayer>
    <p>
      At the National Museum of Asian Art, Conservation Scientist Dr. Matthew Clarke is studying the
      13th century Japanese scroll,
      <BLink
        href="https://asia.si.edu/explore-art-culture/collections/search/edanmdm:fsg_F1907.375a/"
        >"The Miraculous Interventions of Jizō Bosatsu"</BLink
      >. To learn more about the history of the scroll, Dr. Clarke imaged the object with shortwave
      infrared reflectance spectroscopy. In this video, he demonstrates the process with a sample
      chart of pigments, then matches the spectra of the different pigments to areas in the paper
      scroll where the pigments were applied. In this way, he locates places that may have faded or
      where the object was over-painted with new pigments in later efforts to repair the scroll.
    </p>
    <p class="mb-0">Running time: 7:35</p>
  </div>
</template>

<script setup lang="ts">
import poster from '@/assets/video_metadata/video_extra_matt_identifying_pigments_poster.jpg';
import captions from '@/assets/video_metadata/video_extra_matt_identifying_pigments.vtt';
</script>
