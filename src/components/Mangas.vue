<template>
  <div class="hello">
    <form @submit.prevent="fetchData">
      <input type="text" v-model="title">
      <button type="submit">Search</button>
    </form>
    <h1 v-if="loading">Loading...</h1>
    <h1 v-else-if="noData">No manga found!</h1>
    <h1 v-else-if="error">Unfortunately, an error occured!</h1>
    <div class="mangas">
      <WibuCard v-for="manga in mangas" :key="manga.mal_id" :content="manga"></WibuCard>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { fetchAnimeSeason } from "@/api/jikan";
import WibuCard from "./WibuCard.vue";
import { Manga } from "@/types/jikanMangaTypes";

export default defineComponent({
  name: "Mangas",
  data() {
    return {
      mangas: [] as Manga[],
      loading: true,
      noData: false,
      error: false,
      title: "",
    };
  },
  components: {
    WibuCard
  },
  methods: {
    fetchData: async function (): Promise<void> {
      try {
        this.loading = true;
        this.mangas = await fetchAnimeSeason(this.title);
        if (this.mangas.length === 0) {
          this.noData = true;
        }
      } catch (error) {
        this.error = true;
      } finally {
        this.loading = false;
      }
    },
  },
  async created() {
    await this.fetchData();
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello {
  width: 70%;
  margin: 0 auto;
}
.mangas {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 8px;
  margin-top: 2rem;
}

@media screen and (max-width: 1366px) {
  .mangas {
    display: flex;
    flex-direction: column;
  }
}
</style>
