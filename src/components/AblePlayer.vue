<template>
  <div class="mb-3">
    <video ref="videoPlayer" :poster="otherOptions.poster">
      <slot></slot>
    </video>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, useTemplateRef } from 'vue';
import AblePlayer from '@vanessaphippscfa/ableplayer';

interface PlayerOtherOptions {
  poster?: string;
}

withDefaults(defineProps<{ otherOptions?: PlayerOtherOptions }>(), {
  otherOptions: () => ({}),
});

let player: AblePlayer | null = null;

const videoPlayer = useTemplateRef('videoPlayer');

onMounted(() => {
  if (!videoPlayer.value) {
    return;
  }
  player = new AblePlayer(videoPlayer.value);
  console.log('Instance count:', AblePlayer.ablePlayerInstances.size);
  console.log('Next index:', AblePlayer.nextIndex);
});

onBeforeUnmount(() => {
  if (player) {
    player.dispose();
  }
});
</script>
