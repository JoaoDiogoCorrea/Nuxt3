<template>
  <div class="absolute">
    <section class="p-2">
      <h1 class="mb-2 ml-1">Mountains</h1>
      <div v-if="pending">
        Loading ...
      </div>
      <div v-else class="grid grid-cols-4 gap-4">
        <div v-for="(post, index) in posts" :key="index" class="shadow-lg border border-hookers-green rounded p-2 bg">
          <h1 class="text-center">{{ post.title }}</h1>
          <img :src="post.image" :alt="post.title" class="ring-1 ring-hookers-green rounded shadow-lg">
          <p>{{ post.description }}</p>
          <table class="table-auto">
            <thead>
              <tr>
                <th class="uppercase text-xs font-bold">Continent</th>
                <th class="uppercase text-xs font-bold">Countries</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="font-light">{{ post.continent }}</td>
                <td class="font-light">{{ post.countries.join(" - ") }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
  <Welcome class="alert" @closeWelcome="closeWelcome" v-show="welcomea" />
</template>
<script setup>
const welcomea = ref(true);
const { pending, data: posts, error } = await useLazyFetch('https://api.nuxtjs.dev/mountains')
definePageMeta({
  layout: "restricted",
})
const closeWelcome = () => {
  console.log('oioi')
  welcomea.value = false
}
useHead({
  title: 'Nuxt3 Mountains',
  meta: [
    { name: 'Nuxt3 Mountains', content: 'Nuxt3 Mountains'}
  ]
})
</script>
  