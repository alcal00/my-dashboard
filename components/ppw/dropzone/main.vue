<template>
    <div>
        <UBlogPost
        title="Drop"
        description="Nuxt 3.9 is out - a gift from the Nuxt team bringing Vite 5, interactive server components, new composables, a new loading API and more."
        date="Dec 25, 2023"
        orientation="vertical"
        :image="{ src: 'https://picsum.photos/640/360', alt: 'Nuxt 3.9' }"
        :authors="[{ name: 'Daniel Roe', avatar: { src: 'https://github.com/danielroe.png', target: '_blank' }, to: 'https://twitter.com/danielcroe' }]"
        :badge="{ label: 'Release' }"
      />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>