<template>
    <div class="flex justify-between items-center bg-gray-800 w-full border-b border-gray-700 px-6 py-4">
        <div>
          <NuxtLink to="/" class="text-2xl text-white font-bold hover:text-gray-400">My Dash</NuxtLink>
        </div>
        <div class="flex items-center">
          <UAvatar
            src="https://avatars.githubusercontent.com/u/739984?v=4"
            alt="Avatar"
            size="sm"
            class="rounded-full"
          />
          <p class="ml-3 text-lg text-white">User Default</p>
        </div>
      </div>
</template>

<script setup>

</script>

<style scoped>

</style>