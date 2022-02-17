<template>
  <div class="home">
    <h1>Vue Manga with Typescript</h1>
    <Mangas/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Mangas from '@/components/Mangas.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Manga',
  components: {
    Mangas,
  },
});
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>