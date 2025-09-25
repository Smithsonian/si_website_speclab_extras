<template>
  <div class="bg-sle-blue-grey" style="min-height: 700px">
    <BContainer class="pt-5">
      <BRow>
        <BCol cols="12" xxl="10" offset-xxl="1">
          <BCardGroup columns>
            <SpeclabExtrasTile
              title="Scott Rosenfeld"
              :img-url="scottUrl"
              img-alt="A carefully-lit museum exhibit hall"
            >
              Learn how Lighting Designer Scott Rosenfeld molestie tellus ut fringilla. Proin arcu
              quam, mattis vel purus sit amet. Donec id tellus eget lectus pulvinar suscipit quis
              vitae felis. Nunc rutrum nisl quis ligula tristique.
            </SpeclabExtrasTile>
            <SpeclabExtrasTile
              title="Annie Jump Cannon"
              :img-url="annieUrl"
              img-alt="Black-and-white photo. Older woman sits at a desk"
            >
              Proin arcu quam, mattis vel purus sit amet, vulputate scelerisquemolestie tellus ut
              fringilla. Proin arcu quam, mattis vel purus sit amet. Donec id tellus eget lectus
              pulvinar suscipit quis vitae felis. Nunc rutrum nisl quis.
            </SpeclabExtrasTile>
            <SpeclabExtrasTile
              title="Keats Webb"
              :img-url="keatsUrl"
              img-alt="Young woman speaks to the camera in front of a lab"
            >
              Imaging Scientist Keats Webb molestie tellus ut fringilla. Proin arcu quam, mattis vel
              purus sit amet, vulputate scelerisque libero. Donec id tellus eget lectus pulvinar
              suscipit quis vitae felis. Nunc rutrum nisl quis ligula tristique. Proin arcu quam,
              mattis vel purus sit amet, vulputate scelerisque libero. Donec id tellus eget lectus
              pulvinar suscipit quis vitae felis. Nunc rutrum nisl quis ligula tristique.
            </SpeclabExtrasTile>
            <SpeclabExtrasTile
              title="Harvard Plate Stacks"
              :img-url="harvardUrl"
              img-alt="A workbench in front of wall with many photos"
            >
              Proin arcu quam, mattis vel purus sit amet, vulputate scelerisquemolestie tellus ut
              fringilla. Proin arcu quam, mattis vel purus sit amet. Donec id tellus eget lectus
              pulvinar suscipit quis vitae felis. Nunc rutrum nisl quis.
            </SpeclabExtrasTile>
            <SpeclabExtrasTile
              title="Matthew Clarke"
              :img-url="matthewUrl"
              img-alt="Stylized screenshot of spectrum analyzer software"
            >
              As a Conservation Scientist, Matt Clarke molestie tellus ut fringilla. Proin arcu
              quam, mattis vel purus sit amet, vulputate scelerisque libero. Donec id tellus eget
              lectus pulvinar suscipit quis vitae felis.
            </SpeclabExtrasTile>
            <SpeclabExtrasTile
              title="The Great Refractor"
              :img-url="refractorUrl"
              img-alt="Inside the dome of a telescope taller than a person"
            >
              Proin arcu quam, mattis vel purus sit amet, vulputate scelerisquemolestie tellus ut
              fringilla. Proin arcu quam, mattis vel purus sit amet. Donec id tellus eget lectus
              pulvinar suscipit quis vitae felis. Nunc rutrum nisl quis.
            </SpeclabExtrasTile>
          </BCardGroup>
        </BCol>
      </BRow>
    </BContainer>
  </div>
</template>

<script setup lang="ts">
import scottUrl from '@/assets/scott_rosenfeld@2x.webp';
import annieUrl from '@/assets/annie_jump_cannon@2x.webp';
import keatsUrl from '@/assets/keats_webb@2x.webp';
import harvardUrl from '@/assets/harvard_plate_stacks@2x.webp';
import matthewUrl from '@/assets/matthew_clarke@2x.webp';
import refractorUrl from '@/assets/the_great_refractor@2x.webp';
</script>
