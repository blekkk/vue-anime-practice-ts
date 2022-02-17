<template>
  <div class="card">
    <h3><a target="_blank" :href="content?.url">{{ content?.title }}</a></h3>
    <p>
      rank: {{ content?.rank }}
    </p>
    <img :src="content?.images.webp.image_url" :alt="content?.title" />
  </div>
</template>

<script lang="ts">

import { Manga } from "@/types/jikanMangaTypes";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "WibuCard",
  props: {
    content: {
      type: Object as PropType<Manga>,
    },
  },
});
</script>

<style scoped>
.card {
  box-shadow: 0 0 3px #ccc;
  padding: 1rem;
  margin: 0.5rem;
}

a {
  color: black;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>