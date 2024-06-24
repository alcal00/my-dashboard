<template>
  <div>
    <UHeader :links="links" class="w-full">
      <template #logo>
        <NuxtLink to="/" class="text-2xl font-bold hover:text-gray-400">
          My Dash
        </NuxtLink>
      </template>

      <template #right>
        <UColorModeButton />
        <UButton color="blue" variant="outline" @click="isOpen = true">Connexion</UButton>
      </template>

      <template #panel>
        <UNavigationTree :links="linksPanel" />
      </template>
    </UHeader>

    <UModal v-model="isOpen">
      <div class="p-4">
        <Placeholder class="h-48" />
        <ppw-jsonschema-form />
      </div>
    </UModal>
    
  </div>
 
</template>

<script setup>
const links = [{
  label: 'Docs',
  icon: 'i-heroicons-book-open',
  to: '/'
}, {
  label: 'Pro',
  icon: 'i-heroicons-square-3-stack-3d',
  to: '/'
}, {
  label: 'Releases',
  icon: 'i-heroicons-rocket-launch',
  to: '/'
}]

const linksPanel = [{
  label: 'Docs',
  icon: 'i-heroicons-book-open',
  to: '/'
}, {
  label: 'Pro',
  icon: 'i-heroicons-square-3-stack-3d',
  to: '/'
}, {
  label: 'Releases',
  icon: 'i-heroicons-rocket-launch',
  to: '/'
},{
  label: 'Settings',
  icon: 'i-heroicons-cog-8-tooth',
  children: [{
    label: 'General'
  },
  {
    label: 'Notifications'
  }]
}]

const isOpen = ref(false)
</script>

<style scoped></style>
