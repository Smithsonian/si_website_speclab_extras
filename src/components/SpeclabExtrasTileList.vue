<template>
  <div class="bg-sle-blue-grey" style="min-height: 700px">
    <BContainer class="pt-5">
      <BRow>
        <BCol cols="12" xxl="10" offset-xxl="1">
          <BCardGroup columns>
            <a href="" @click="handleKeatsClick">
              <SpeclabExtrasTile
                title="Keats Webb: Conservation Science Imaging"
                :img-url="keatsUrl"
                img-alt="Woman speaks to the camera in front of a lab"
              >
                <p>
                  Smithsonian Imaging Scientist, Dr. Keats Webb, demonstrates some of the different
                  imaging techniques that she uses at the Smithsonian Museum Conservation Institute,
                  and describes how imaging is a necessary first step for understanding the history
                  of - and the conservation of - Smithsonian objects.
                </p>
                <p class="mb-0">Running time: 6:52</p>
              </SpeclabExtrasTile>
            </a>
            <a href="" @click="handlePigmentsClick">
              <SpeclabExtrasTile
                title="Matthew Clarke: Identifying Pigments"
                :img-url="matthewUrl"
                img-alt="Stylized screenshot of spectrum analyzer software"
              >
                <p>
                  At the National Museum of Asian Art, Conservation Scientist Dr. Matthew Clarke is
                  studying the 13th century Japanese scroll, "The Miraculous Interventions of Jizō
                  Bosatsu." To learn more about the history of the scroll, Dr. Clarke imaged the
                  object with shortwave infrared reflectance spectroscopy. In this video, he
                  demonstrates the process with a sample chart of pigments, then matches the spectra
                  of the different pigments to areas in the paper scroll where the pigments were
                  applied. In this way, he locates places that may have faded or where the object
                  was over-painted with new pigments in later efforts to repair the scroll.
                </p>
                <p class="mb-0">Running time: 7:37</p>
              </SpeclabExtrasTile>
            </a>
            <a href="" @click="handleJadesClick">
              <SpeclabExtrasTile
                title="Matthew Clarke: Identifying Jades"
                :img-url="jadesUrl"
                img-alt="A man points at a screen showing spectrum analyzer software"
              >
                <p>
                  The Smithsonian’s National Museum of Asian Art has a renowned collection,
                  including thousands of Chinese jades. However, the term "jade" is applied to many
                  different minerals. To assist with their conservation and preservation, it's
                  important to know the mineral composition of each object. Dr. Matthew Clarke
                  demonstrates the non-invasive technique of shortwave infrared reflectance
                  spectroscopy as he quickly differentiates the mineral composition of a set of
                  samples.
                </p>
                <p class="mb-0">Running time: 3:42</p>
              </SpeclabExtrasTile>
            </a>
            <a href="" @click="handleLopezMoralesClick">
              <SpeclabExtrasTile
                title="Mercedes López-Morales: Search for Earth-like Exoplanets"
                :img-url="mercedesUrl"
                img-alt="A woman speaks to the camera"
              >
                <p>
                  Astrophysicist Dr. Mercedes López-Morales at the Smithsonian Astrophysical
                  Observatory is a specialist in studying the atmospheres of exoplanets. To try to
                  answer the question "Are we alone?", she describes the progress that has been made
                  so far to identify and categorize planets using the transiting method - as well as
                  the challenges ahead to identify an exoplanet that may have life outside our solar
                  system.
                </p>
                <p class="mb-0">Running time: 5:29</p>
              </SpeclabExtrasTile>
            </a>
            <a href="https://my.matterport.com/show/?m=m9ozTg7QiUi">
              <SpeclabExtrasTile
                title="Harvard Plate Stacks: 3D Virtual Tour"
                :img-url="harvardUrl"
                img-alt="A workbench in front of wall with many photos"
              >
                The Harvard College Observatory's Astronomical Photographic Glass Plate Collection
                (Plate Stacks) is the largest collection of its kind in the world. The core of the
                collection is over 550,000 glass plate negatives and spectral images, covering both
                the northern and southern hemispheres. Hundreds of women studied and curated the
                Harvard Plate Stacks while making discoveries of their own, but more often than not
                their work went unrecognized.
              </SpeclabExtrasTile>
            </a>
            <a href="https://my.matterport.com/show/?m=axmx4L8BGfJ">
              <SpeclabExtrasTile
                title="The Great Refractor: 3D Virtual Tour"
                :img-url="refractorUrl"
                img-alt="Inside the dome of a telescope taller than a person"
              >
                This 15-inch telescope was installed in Cambridge, Massachusetts in 1847. Named the
                "Great Refractor," it was the largest and most significant telescope in the United
                States for 20 years, spurring the development of the Harvard College Observatory.
                Housed in the Sears Tower, which is the oldest building of the complex at the Center
                for Astrophysics, the Great Refractor was used to discover the eighth satellite of
                Saturn in 1848, and it was used by J.A. Whipple to take the first daguerreotype of a
                star.
              </SpeclabExtrasTile>
            </a>
            <SpeclabExtrasTile
              title="Thom Burns: Annie Jump Cannon"
              :img-url="annieUrl"
              img-alt="Black-and-white photo. Woman sits at a desk"
            >
              <p>
                Annie Jump Cannon (1863-1941) was a pioneering woman astronomer who classified over
                40,000 stars using their brightness and spectral types. Thom Burns is the Curator of
                the Harvard Glass Plate Collection at the Center for Astrophysics
                Harvard-Smithsonian. He describes how Cannon, one of the famous "Harvard Computers,"
                studied the plates in the collection and how her work advanced the dream of Henry
                and Mary Ann Draper to use stellar spectra to understand the lifecycle of stars.
              </p>
              <p class="mb-0">Running time: TBD</p>
            </SpeclabExtrasTile>
          </BCardGroup>
        </BCol>
      </BRow>
    </BContainer>
  </div>
</template>

<script setup lang="ts">
import mercedesUrl from '@/assets/video_metadata/video_extra_mercedes_poster.jpg';
import annieUrl from '@/assets/annie_jump_cannon@2x.webp';
import keatsUrl from '@/assets/keats_webb@2x.webp';
import harvardUrl from '@/assets/harvard_plate_stacks@2x.webp';
import matthewUrl from '@/assets/matthew_clarke@2x.webp';
import jadesUrl from '@/assets/video_metadata/video_extra_matt_identifying_jades_poster.jpg';
import refractorUrl from '@/assets/the_great_refractor@2x.webp';
import { useModalsStore } from '@/store/modals';

const modalsStore = useModalsStore();

const handleKeatsClick = (e: MouseEvent) => {
  e.preventDefault();
  modalsStore.showKeats = true;
};

const handlePigmentsClick = (e: MouseEvent) => {
  e.preventDefault();
  modalsStore.showPigments = true;
};

const handleJadesClick = (e: MouseEvent) => {
  e.preventDefault();
  modalsStore.showJades = true;
};

const handleLopezMoralesClick = (e: MouseEvent) => {
  e.preventDefault();
  modalsStore.showLopezMorales = true;
};
</script>
