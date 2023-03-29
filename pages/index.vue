<template>
  <div class="flex h-screen">
    <div class="w-full flex flex-col items-center justify-center">
      <div class="flex flex-col border border-hookers-green rounded p-2 bg shadow-lg">
        <h1 class="text-center">Restricted area</h1>
        <input type="email" class="mb-2" v-model="email">
        <input type="password" class="mb-2" v-model="password">
        <input type="password" class="mb-2" v-model="passwordRepeat">
        <button class="btn" @click="submit">
          Login
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
const email = ref('test@tests.com')
const password = ref('123')
const passwordRepeat = ref('123')
const pending = ref(false);

const submit = async () => {
  
  if (password.value !== passwordRepeat.value) return;
  pending.value = true;
    
  const { data, error } = await useFetch(`/api/v2/users`, {
    method: 'GET',
    baseURL: 'https://random-data-api.com',
    params: {
      size: 1
      /* email: email.value,
      password: password.value */
    }
  })
  if (!data.value) {
    throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
  }
  // log response (data will be a ref)
  if (error.value) console.log('ERROR from useFetch: ', error.value)
  console.log('data returned from useFetch: ', data)
  navigateTo('/mountains')
  }

</script>