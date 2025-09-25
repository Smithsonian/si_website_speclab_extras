<template>
  <div class="bg-gen-black">
    <div
      class="speclab-extras-intro-header-image text-light d-flex flex-column justify-content-end"
    >
      <BContainer>
        <BRow>
          <BCol cols="12" xl="10" xxl="8" offset-xxl="1">
            <p class="mb-5">
              The study of light, color, and spectra connects to stories from many disciplines, from
              history, art, science, and culture.
            </p>
          </BCol>
        </BRow>
      </BContainer>
    </div>
  </div>
</template>

<style>
.speclab-extras-intro-header-image {
  background-image:
    linear-gradient(0deg, rgb(66 42 22 / 100%) 0%, rgb(66 42 22 / 0%) 100%),
    url(/src/assets/colored_lights@2x.webp);
  background-blend-mode: multiply;
  background-size: cover;
  background-position: top 70% left 50%;
  min-height: 402px;
}
</style>
