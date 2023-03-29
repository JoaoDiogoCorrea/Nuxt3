<template>
  <div class="w-76 flex p-2">
    <img src="/Avatar.jpg" class="avatar ml-2 mt-2" alt="">
    <div class="ml-4 mt-3">
      <h1 class=" text-hookers-green">What is Lorem Ipsum?</h1>
      <p class=" text-hookers-green">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,
        adipisci velit..."</p>
    </div>
    <div class="
      rounded-full
      w-1/12
      h-4
      cursor-pointer
      flex
      justify-center
      items-center
      font-bold
      text-hookers-green
    " @click="$emit('closeWelcome')">
      X
    </div>
  </div>
</template>